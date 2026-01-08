# Base image
FROM openjdk:17-jdk-slim

# App jar copy
COPY target/*.jar app.jar

# App run
ENTRYPOINT ["java","-jar","/app.jar"]
