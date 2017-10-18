# SIN Generator

## Build Docker Image

This project just uses the default lapis-centos image, no building required.

## Create Docker Container

### Development

```
docker run \
	-dti \
	-p 8888:2808 \
	-v "/home/karai/CitadelDesign/singen.ca/data:/var/data" \
	-v "/home/karai/CitadelDesign/singen.ca/www:/var/www" \
	--name singen.ca \
	karai17/lapis-centos:latest
```

### Production

```
docker run \
	-dti \
	-p 10200:2808 \
	-v "/var/www/singen.ca/data:/var/data" \
	-v "/var/www/singen.ca/www:/var/www" \
	--name singen.ca \
	karai17/lapis-centos:latest \
	server prod
```