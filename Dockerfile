#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/default.conf /etc/nginx/conf.d/
COPY --from=node /app/www /usr/share/nginx/html
