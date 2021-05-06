```
    docker-compose up -d --build
    docker exec -it CONTAINER_ID /bin/bash # mysql 컨테이너 내부 접속
    mysql -u root -p # 접속
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password by 'yourpassword';
    FLUSH PRIVILEGES;
```