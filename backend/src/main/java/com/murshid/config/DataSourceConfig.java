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
        // Hikari lit les identifiants dans l'URL si presents. Pour eviter tout
        // probleme (ex: '@' dans le mot de passe), on retire user:pass@ de l'URL
        // et on les passe uniquement en proprietes separees.
        jdbcUrl = stripCredentials(jdbcUrl);

        HikariConfig config = new HikariConfig();
        config.setDriverClassName("org.postgresql.Driver");
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(username);
        config.setPassword(password);
        config.setMaximumPoolSize(2);
        config.setInitializationFailTimeout(0);
        return new HikariDataSource(config);
    }

    private String stripCredentials(String jdbcUrl) {
        if (jdbcUrl == null) {
            return null;
        }
        // jdbc:postgresql://user:password@host:port/db -> jdbc:postgresql://host:port/db
        int schemeEnd = jdbcUrl.indexOf("//");
        if (schemeEnd < 0) {
            return jdbcUrl;
        }
        String scheme = jdbcUrl.substring(0, schemeEnd + 2);
        String rest = jdbcUrl.substring(schemeEnd + 2);
        int at = rest.indexOf('@');
        if (at < 0) {
            return jdbcUrl;
        }
        return scheme + rest.substring(at + 1);
    }
}
