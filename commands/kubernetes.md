Kubernetes is a container orchestration system.  
It is a system that manages and runs many containers (like Docker containers) automatically across multiple machines.  

building blocks:  

1. Cluster
A Kubernetes Cluster is the whole system.
It has:
One control center (master)
Many worker machines

2. Node
A Node is a machine (VM or server) where apps run.
Two types:
Control Plane Node (brain)
Worker Node (does the work)

3. Pod
A Pod is the smallest unit in Kubernetes.
A pod runs one or more containers
Usually 1 pod = 1 app container

4. Deployment
A Deployment manages pods.
It handles:
How many copies (replicas) to run
Updates without downtime
Restarting failed pods

5. Service
Pods are temporary (they can restart anytime).
So Kubernetes uses Service to give a stable network address.
It helps:
Connect users to pods
Load balance traffic

6. Control Plane (Brain of Kubernetes)
It decides:
Where pods should run
When to restart things
How to scale apps

Main components inside:
API Server (receives commands)
Scheduler (assigns pods to nodes)
Controller Manager (keeps system healthy)

7. kubelet (worker agent)
Runs on each node and:
Ensures pods are running
Reports status back to control plane

🔄 Simple flow 
You give instruction: “Run my app with 3 copies”
Kubernetes creates a Deployment
Deployment creates Pods
Pods are placed on Nodes
Service exposes them to users
If anything breaks → Kubernetes fixes it automatically

