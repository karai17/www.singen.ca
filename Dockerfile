FROM karai17/lapis-centos:latest

MAINTAINER Landon Manning <lmanning17@gmail.com>

WORKDIR /www

COPY www /www

EXPOSE 2808

ENTRYPOINT ["/usr/bin/lapis"]
CMD ["server", "prod"]
