docker run -it ubuntu
docker run -Create a new container from an image and run it.
-i (interactive) → keeps STDIN open so you can type commands inside the container.
-t (tty) → allocates a terminal so you get a proper shell prompt

Images are blueprints — read-only templates that describe how to build a container
Containers are running instances of those blueprints

Containers
docker ps             # List running containers
docker ps -a          # List all containers
docker run -d -p 8080:80 --name myapp <image>   # Run a container
docker exec -it <container> bash                # Open shell in container
docker logs -f <container>                      # View container logs
docker start <container>                        # start a container
docker stop <container>                         # Stop a container
docker rm <container>                           # Remove a container
docker restart <container_id>
    
Images
docker images          # List images
docker pull <image>    # Download an image
docker build -t <name> .   # Build image from Dockerfile
docker rmi <image>      # Remove an image

Networks & Volumes 
Port binding maps a port on your host machine to a port inside the container : docker run -p <host_port>:<container_port> <image>
docker network ls      # List networks
docker volume ls       # List volumes

Inspect & Logs
docker logs <container_id> → View container logs.
docker exec -it <container_id> /bin/bash → Access the container’s terminal (interactive shell).
docker inspect <container_id> → Detailed configuration info (IP, mounts, env vars).

Cleanup & Maintenance
docker system prune → Remove unused data (containers, networks, images).
docker volume ls / docker network ls → List volumes and networks.
docker volume rm <volume_name> → Delete a specific volume.

Docker Compose (for multi-container apps)
docker-compose up -d → Start all services defined in docker-compose.yml.
docker-compose down → Stop and remove all services.
docker-compose ps → Check status of services.

-d -  detach
