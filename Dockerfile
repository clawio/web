FROM nginx
MAINTAINER Hugo González Labrador

# Install custom NGINX configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/
