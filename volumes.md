### Volumes:

- Data is lost when restarting or removing a container.

1. **Container**: `/var/lib/mysql` -> Virtual File System.
2. **Disk**: `/user/some/path` -> Physical File System.

- Folder in physical file system(host) is mounted into the virtual file system of Docker (container).

### Types:

#### Host Volumes:

- You decide where on the host this reference is made.

#### Anonymous Volumes:

- For each container, a folder is generated and gets mounted.

#### Named Volumes:

- You can just reference the volume by name.
- Named volumes is the one we should use in production.

### Commands:

```bash
# To create volumes.
docker run --name postgres-sql -e POSTGRES_PASSWORD=password -v D:/Docker/Data:/var/lib/postgres/data postgres

# To create anonymous volumes.
docker run --name postgres-sql -e POSTGRES_PASSWORD=password -v /var/lib/postgres/data postgres

# Exposing Ports:
Multiple containers can run on a host.
A host has certain ports available.
Conflict when using the same port on your host.

# Ex:
docker run
--name postgres-sql
-p <host-port>:<container-port>
-e POSTGRES_PASSWORD=password
-v D:/Docker/Data:/var/lib/postgres/data
postgres
```
