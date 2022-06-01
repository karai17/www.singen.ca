# SIN Generator

## Build Docker Image

```
docker pull karai17/lapis-centos:latest
```

## Create Docker Container

```
./dev.sh
```

```
./prod.sh
```

## SSL Certificates

### Production

```
sudo certbot certonly --nginx --email lmanning17@gmail.com --agree-tos -d singen.ca -d www.singen.ca
```
