docker build -t registry.heroku.com/siwop/web . && \
docker push registry.heroku.com/siwop/web && \
heroku container:release web --app siwop
