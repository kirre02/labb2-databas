_default:
    just --list

start:
    docker start mongodb

create:
    docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest

down:
  docker stop mongodb
