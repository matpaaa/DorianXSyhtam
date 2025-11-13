FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/proj2

COPY css css
COPY js js
COPY assets assets
COPY en en
COPY fr fr
COPY *.html ./

RUN chown -R nginx:nginx /var/www/proj2

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]