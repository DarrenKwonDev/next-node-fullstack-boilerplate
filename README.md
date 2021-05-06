# next-node-fullstack-boilerplate

## stack  

docker / next.ts / node.ts 

## Backend : type-node-boilerplate

- 기존 백엔드 보일러 플레이트 : https://github.com/DarrenKwonDev/type-node-boilerplate  
- [제작 과정, 설명](https://darrengwon.tistory.com/1284?category=921119)

- 과거에 작성한 보일러 플레이트
  [type-node-graphql-boilerplate](https://github.com/DarrenKwonDev/type-node-graphql-boilerplate)

- [x] typescript
- [x] /api_ver/\* 꼴로 api 서버에 접근할 수 있습니다.
- [x] envalid를 통한 환경 변수 검증
- [x] controller와 service의 분리
- [x] class 형태로 route, app 관리
- [x] typeORM(현재 mariaDB. 원하는대로 변경 가능)
- [x] winston logger
- [ ] DTO validation
- [x] swagger
- [ ] jest

## Front : Next.ts  

- 기존 프론트 보일러 플레이트 : https://github.com/DarrenKwonDev/FuzeNextBoilerplate  
- 다만 제가 최근 코딩하는 방식이 조금 바뀌어서, 이 보일러 플레이트에서는 최대한 퓨어하게 뒀습니다.

- [x] eslint + prettier
- [x] server,js, next.config.js, sitemap을 생성하는 스크립트 등은 그대로 js로 두었습니다.  


## Docker  

mysql docker-compose

```
    docker-compose up -d --build
    docker exec -it CONTAINER_ID /bin/bash # mysql 컨테이너 내부 접속
    mysql -u root -p # 접속
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password by 'yourpassword';
    FLUSH PRIVILEGES;
```