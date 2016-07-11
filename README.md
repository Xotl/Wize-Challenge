# Wize-Challenge

[![Build Status](https://travis-ci.org/Xotl/Wize-Challenge.svg?branch=master)](https://travis-ci.org/Xotl/Wize-Challenge)

## How to run it using docker. (Developer)

- *(Optional)* Create a mongo instance with `docker run --name mongo-test -d mongo:3.2.7`.
    - You can add documents by entering Mongo CLI with `docker exec -it mongo-test mongo admin`
    Example:
        ```
        db.cats.insert(
            {
                name: "Fluffy",
                color:  "black"
            }
        )
        ```

- Build the docker image with `docker build -t xotl/wize-challenge .`
- Run the app with:
    ```
    docker run -it --rm --link mongo-test:mongodb --name wize-challenge -p 3000:3000 -e MONGODB_CONNECTION_STRING=mongodb://mongodb/exampledb xotl/wize-challenge
    ```
- Run the tests with: 
    ```
    docker run -it --rm --link mongo-test:mongodb --name wize-challenge -p 3000:3000 -e MONGODB_CONNECTION_STRING=mongodb://mongodb/exampledb xotl/wize-challenge npm test
    ```

You can also run it by mounting the current folder as a volume with:
```
docker run -it --rm --link mongo-test:mongodb --name wize-challenge -v "$PWD":/usr/src/app -p 3000:3000 -e MONGODB_CONNECTION_STRING=mongodb://mongodb/exampledb xotl/wize-challenge
```

or

```
docker run -it --rm --link mongo-test:mongodb --name wize-challenge -v "$PWD":/usr/src/app -p 3000:3000 -e MONGODB_CONNECTION_STRING=mongodb://mongodb/exampledb -w /usr/src/app node:6.3.0-slim npm start
```

But note that you will need to do a `npm install` first or to have the `node_modules` folder with the needed dependencies.

