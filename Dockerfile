FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www/proj2

COPY assets css js pages ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]