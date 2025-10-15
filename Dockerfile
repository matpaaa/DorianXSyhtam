FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/proj2

COPY assets css js pages ./

RUN chown -R nginx:nginx /var/www/proj2 \
    && find /var/www/proj2 -type d -exec chmod 755 {} \; \
    && find /var/www/proj2 -type f -exec chmod 644 {} \;

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]