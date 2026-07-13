package com.murshid.config;

import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseDriverConfig {

    @PostConstruct
    public void registerPostgresDriver() {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException ex) {
            throw new IllegalStateException("PostgreSQL driver non trouve sur le classpath", ex);
        }
    }
}
