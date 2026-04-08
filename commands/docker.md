we cannot remove docker image without removing containers using that image   

docker run -it ubuntu  
docker run -Create a new container from an image and run it.  
-i (interactive) → keeps STDIN open so you can type commands inside the container.  
-t (tty) → allocates a terminal so you get a proper shell prompt  

Images are blueprints — read-only templates that describe how to build a container  
Containers are running instances of those blueprints  
  
Containers  
docker ps             # List running containers  
docker ps -a          # List all containers  
docker run -d -p 8080:80 --name myapp <image>   # Run a container    -d -  detach mode (background mode )
docker exec -it <container> bash                # Open container  in interactive mode 
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
 
instructions for writing dockerfile:  

start with os   
install dependencies    
copy app files   
run the file    
  
FROM  python:3.10-slim  
WORKDIR /app                              # change the working directory  
COPY . .                                  # copy all files from location => location  
RUN pip install -r  req.txt               # installing dependencies  
CMD ["python", "-u", "backend/app.py"]    # then running the application  

then package  the application  :   
docker build -t docker_tag file_location   

docker build -t my_app .   
then create the docker container using docker image   

Instead of rebuilding every time when we change the code , we can link your local code into the container   
docker run -p 5000:5000 -v $(pwd):/app myapp  

Docker Compose:  

Run multiple containers together  
Define everything in one file  (yaml file)
Start everything with one command   

template for flask :     
version: "3.9"  
services:  
  backend:  
    build:  
      context: ./backend  
      dockerfile: Dockerfile  
    container_name: flask_backend  
    ports:  
      - "5000:5000"  
  frontend:  
    build:  
      context: ./frontend  
      dockerfile: Dockerfile  
    container_name: frontend_app  
    ports:  
      - "8080:80"  

then docker-compose up --build


dockerignore :  
.dockerignore works like .gitignore  
👉 but only for Docker build context  

# Git  
.git  
.gitignore  
# Python cache  
__pycache__/  
*.pyc  
*.pyo  
# Virtual environment  
venv/  
env/  
# OS files  
.DS_Store  
Thumbs.db  
# Logs  
*.log  
# Docker files (optional)  
docker-compose.yml  
Dockerfile  
# Node (if you ever add frontend frameworks)  
node_modules/  
# IDE files  
.vscode/  
.idea/  
# Database files (if local)  
*.db  