# this file is used to create our own image.

FROM openjdk:17

# set the working directory.
WORKDIR /app

# copy the jar file created while building.
COPY target/demo-1.0.jar /app/demo.jar

EXPOSE 8080

CMD [ "java -jar demo.jar" ]

# To package spring boot app, we need to use ./mvnw clean package
# To build the image, we need to use docker build -t <tag-name> .