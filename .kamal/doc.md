Kamal uses SSH to connect and run commands on your hosts. By default, it will attempt to connect to the root user on port 22.

If you are using a non-root user, you may need to bootstrap your servers manually before using them with Kamal. On Ubuntu, you’d do:

##
  sudo apt update
  sudo apt upgrade -y
  sudo apt install -y docker.io curl git
  sudo usermod -a -G docker app
##