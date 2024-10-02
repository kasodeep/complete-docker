### Networks:

- We need the spring boot container to communicate with postgres container.
- Hence we use the concept of networking.
- Modify the connection url and inplace of localhost connect to container name.

### Commands:

```bash
# To see list of available networks.
docker network ls

# To create a new network.
docker network create spring-boot-net

# To connect to the network.
docker network connect <network-id> <container-name>(db)

# To run the container with connection.
docker run --net <network-name> -p 8080:8080 <container-name>
```
