package com.murshid.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    @Bean
    public DataSource dataSource() {
        String jdbcUrl = url;
        if (jdbcUrl != null && (jdbcUrl.startsWith("postgresql://") || jdbcUrl.startsWith("postgres://"))) {
            jdbcUrl = "jdbc:" + jdbcUrl;
        }

        // Si l'URL contient user:password@, on les extrait et on les passe
        // separement (evite les problemes avec un '@' dans le mot de passe).
        // Surtout, on les UTILISE : ne pas les remplacer par les valeurs par
        // defaut (postgres/postgres) sinon l'authentification echoue.
        String extractedUser = null;
        String extractedPassword = null;

        String marker = "//";
        int schemeEnd = jdbcUrl.indexOf(marker);
        if (schemeEnd >= 0) {
            String rest = jdbcUrl.substring(schemeEnd + marker.length());
            int at = rest.indexOf('@');
            if (at > 0) {
                String userinfo = rest.substring(0, at);
                int colon = userinfo.indexOf(':');
                if (colon >= 0) {
                    extractedUser = userinfo.substring(0, colon);
                    extractedPassword = userinfo.substring(colon + 1);
                } else {
                    extractedUser = userinfo;
                }
                // Retire user:password@ de l'URL (les identifiants sont passes separement)
                jdbcUrl = jdbcUrl.substring(0, schemeEnd + marker.length()) + rest.substring(at + 1);
            }
        }

        HikariConfig config = new HikariConfig();
        config.setDriverClassName("org.postgresql.Driver");
        config.setJdbcUrl(jdbcUrl);
        if (extractedUser != null) {
            config.setUsername(extractedUser);
            config.setPassword(extractedPassword);
        } else {
            config.setUsername(username);
            config.setPassword(password);
        }
        config.setMaximumPoolSize(2);
        config.setInitializationFailTimeout(0);
        return new HikariDataSource(config);
    }
}
