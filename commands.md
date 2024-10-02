### Container:

- It is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software.
- Containers are designed to provide a consistent and reproducible environment across different platforms and development stages.

**Benefits**:
Consistency, Portability, Resource Efficiency, Scalability, Version and Rollback.

### Image;

- A container image is a standardized package that includes all of the files, binaries, libraries, and configurations to run a container.

### Docker Container Architecture:

```
   Application Image Layer
   .....
   Different layer for the container.
   .....
   Linux base Image Layer.
```

### Things to know:

1.  Each time we use run command it will start a new docker container.

Commands:

```bash
# To see that docker is running.
docker -v

# To pull an image.
docker pull <image-name>
docker pull <image-name>:version

# To see the pulled images.
docker images

# To remove the images.
docker rmi <image-id>

# To run the image as a container.
docker run <image-name>

# To run with custom container name.
docker run --name <name> <image-name>

# To see running docker containers.
docker ps

# To see all both running & non-running containers.
docker ps -a

# To pass environment variables.
docker run -e POSTGRES_PASSWORD=password postgres

# To stop the container.
docker stop <container-id>

# To re run existing container.
docker start <container-id>

# To delete the container.
docker rm <container-id>

# To see the running containers logs.
docker logs <container-name>
docker logs -f <container-name> (To keep listening)

# To interact with the container.
docker exec -it <container-name> mode -U <user-name>

# For postgres sql.
Ex: docker exec -it exciting_villani psql -U postgres

# For mysql.
Ex: docker exec -it db mysql -p
```

### Docker Hub:

```bash
# To build the image.
docker build -t ghost-drop .

# Change the name to your own.
docker tag ghost-drop kasodeep/ghost-drop:latest

# Push the image to docker hub.
docker push kasodeep/ghost-drop:latest
```
