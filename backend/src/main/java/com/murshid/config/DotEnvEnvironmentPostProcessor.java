package com.murshid.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.Ordered;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.core.env.PropertySource;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

/**
 * Loads a project-level .env file into Spring's environment so that variables such as
 * GROQ_API_KEY, GROQ_API_URL and GROQ_MODEL are available to the application.
 * Without this, the keys defined in .env are never read and the AI calls silently
 * fall back to the static content.
 */
public class DotEnvEnvironmentPostProcessor implements EnvironmentPostProcessor, Ordered {

    private static final String PROPERTY_SOURCE_NAME = "murshidDotEnv";

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        Path envPath = findEnvFile();
        if (envPath == null) {
            return;
        }

        Map<String, Object> props = new HashMap<>();
        try (BufferedReader reader = Files.newBufferedReader(envPath)) {
            String line;
            while ((line = reader.readLine()) != null) {
                String trimmed = line.trim();
                if (trimmed.isEmpty() || trimmed.startsWith("#")) {
                    continue;
                }
                int eq = trimmed.indexOf('=');
                if (eq <= 0) {
                    continue;
                }
                String key = trimmed.substring(0, eq).trim();
                String value = trimmed.substring(eq + 1).trim();
                // strip optional surrounding quotes
                if (value.length() >= 2
                        && ((value.startsWith("\"") && value.endsWith("\""))
                            || (value.startsWith("'") && value.endsWith("'")))) {
                    value = value.substring(1, value.length() - 1);
                }
                props.put(key, value);
            }
        } catch (IOException ex) {
            // Non-blocking: if we can't read .env, system env / defaults still apply.
            return;
        }

        if (!props.isEmpty()) {
            PropertySource<Map<String, Object>> source = new MapPropertySource(PROPERTY_SOURCE_NAME, props);
            // Lowest precedence so that real system env vars and explicit overrides win.
            environment.getPropertySources().addLast(source);
        }
    }

    private Path findEnvFile() {
        String[] candidates = { ".env", "../.env", "backend/.env" };
        for (String candidate : candidates) {
            Path p = Paths.get(candidate).toAbsolutePath().normalize();
            if (Files.exists(p)) {
                return p;
            }
        }
        // Fall back to a .env located in the working directory or its parents.
        Path start = Paths.get("").toAbsolutePath().normalize();
        Path current = start;
        while (current != null) {
            Path candidate = current.resolve(".env");
            if (Files.exists(candidate)) {
                return candidate;
            }
            current = current.getParent();
        }
        return null;
    }

    @Override
    public int getOrder() {
        return Ordered.LOWEST_PRECEDENCE;
    }
}
