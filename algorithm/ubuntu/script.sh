echo "Kill port 3000"
kill -9 $(lsof -t -i:3000)