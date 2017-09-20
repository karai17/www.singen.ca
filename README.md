# SIN Generator

## Build Docker Image

```
$ docker build -t singen.ca .
```

## Create Docker Container

```
$ docker run -dti -p 10200:2808 -v "/var/www/singen.ca/www:/var/www" --name singen.ca singen.ca server prod
```
