### using aws ec2

first create a ec2 instance and create a key - pair login during setup and save it in .ssh folder and allow ssh traffic from myip   
and create the instance .

now for connecting via ssh -  ssh -i "your-key-name.pem" ubuntu@your-ec2-public-ip  