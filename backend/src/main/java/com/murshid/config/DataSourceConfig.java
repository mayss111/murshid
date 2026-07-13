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
        // Dans un fat-JAR, le driver n'est pas auto-enregistre aupres de DriverManager.
        // On le charge explicitement pour qu'Hikari (DriverDataSource) puisse le resoudre.
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException ex) {
            throw new IllegalStateException("Driver PostgreSQL introuvable", ex);
        }
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(username);
        config.setPassword(password);
        config.setMaximumPoolSize(2);
        config.setInitializationFailTimeout(0);
        return new HikariDataSource(config);
    }
}
