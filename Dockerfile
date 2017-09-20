FROM karai17/lapis-centos:latest

MAINTAINER Landon Manning <lmanning@citadeldesign.ca>

VOLUME /var/www
WORKDIR /var/www

EXPOSE 2808

ENTRYPOINT ["/usr/bin/lapis"]
CMD ["server", "devel"]