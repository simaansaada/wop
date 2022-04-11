#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN node_modules/.bin/ng build --configuration production
#stage 2
FROM nginx:alpine
COPY --from=node /app/default.conf /etc/nginx/conf.d/
COPY --from=node /app/www /usr/share/nginx/html

# EXPOSE 80

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'


