# Wize-Challenge

[![Build Status](https://travis-ci.org/Xotl/Wize-Challenge.svg?branch=master)](https://travis-ci.org/Xotl/Wize-Challenge)


```
docker run --name mongo-test -d mongo:3.2.7
docker run --name mongo-prod -d mongo:3.2.7
```

```
docker exec -it mongo-test mongo admin
```


```
docker run -it --rm --link mongo-test:mongodb --name wize-challenge -v "$PWD":/usr/src/app -p 3000:3000 -e MONGODB_CONNECTION_STRING=mongodb://mongodb/exampledb -w /usr/src/app node:6.3.0-slim npm start
```

```
db.cats.insert(
   {
       name: "Fluffy",
       color:  "black"
   }
)
```
