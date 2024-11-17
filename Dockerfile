# This file is used to create our own image.

# the base file for running java on container.
FROM openjdk:21

# set the working directory.
WORKDIR /app

# copy the jar file created while building.
COPY target/Banking-App-1.0.1.jar /app/App.jar

# exposing the port to connect to isolated containers.
EXPOSE 8080

# starting the jar file.
CMD [ "java", "-jar", "App.jar" ]

# To package spring boot app, we need to use ./mvnw clean package
# To build the image, we need to use docker build -t <tag-name>.