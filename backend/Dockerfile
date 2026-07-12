FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B -Dmaven.wagon.http.connectionTimeout=120000 -Dmaven.wagon.http.readTimeout=120000 -Dmaven.wagon.http.retryHandler.count=3
COPY src ./src
RUN mvn clean package -DskipTests -B -Dmaven.wagon.http.connectionTimeout=120000 -Dmaven.wagon.http.readTimeout=120000 -Dmaven.wagon.http.retryHandler.count=3

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "app.jar"]
