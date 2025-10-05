# README

Rails
  ##
    DOCKER_USERNAME=$(cat .ignore/docker-username.key)
    DOCKER_PASSWORD=$(cat .ignore/docker.key)
    GIT_COMMIT_HASH=$(git rev-parse --short HEAD)
    REPOSITORY_NAME=skyceer-rails

    docker login --username $DOCKER_USERNAME --password $DOCKER_PASSWORD
    docker build -t $REPOSITORY_NAME .
    docker image tag $REPOSITORY_NAME $DOCKER_USERNAME/$REPOSITORY_NAME:$GIT_COMMIT_HASH
    docker image tag $DOCKER_USERNAME/$REPOSITORY_NAME:$GIT_COMMIT_HASH $DOCKER_USERNAME/$REPOSITORY_NAME:latest

    docker image push $DOCKER_USERNAME/$REPOSITORY_NAME:latest
    docker image push $DOCKER_USERNAME/$REPOSITORY_NAME:$GIT_COMMIT_HASH

    docker run -d -it --name web -p 3000:3000 -v $PWD:/skyceer skyceer-rails
    docker run -d -it --name web -p 3000:3000 -e RAILS_MASTER_KEY=$(cat config/master.key) skyceer-rails
    docker run -d -it --name web -p 3000:3000 -e RAILS_MASTER_KEY=$(cat config/credentials/production.key) skyceer-rails
    DEBUG=true HTTP_PORT=80 TARGET_PORT=3001 RAILS_MASTER_KEY=$(cat config/credentials/production.key) bin/thrust bin/rails server -p 3001 -b "127.0.0.1" -e production
  ##
Solid queue + cache
  ##
    docker build -t skyceer-rails .
    docker run -d --name solid -v $PWD:/skyceer skyceer-rails bin/jobs
  ##
Solid
  ##
    docker build -t skyceer-rails .
    docker run -d --name solid skyceer-rails bundle exec rails solid_queue:start
  ##
Postgres
  ##
    docker pull postgres
    docker run -d --name postgres -p 5432:5432 -e POSTGRES_USERNAME=postgres -e POSTGRES_PASSWORD=password postgres
  ##
Mongo
  ##
    docker pull mongo
    docker run -d --name mongo -p 27017:27017 mongo
  ##
Elasticsearch
  ##
    docker pull elasticsearch:8.14.1
    docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "xpack.security.enabled=false" -e "xpack.security.enrollment.enabled=false" elasticsearch:8.14.1
  ##
Opensearch
  ##
    docker pull opensearchproject/opensearch
    docker run -d --name opensearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e OPENSEARCH_INITIAL_ADMIN_PASSWORD=password opensearchproject/opensearch
  ##
Kibana
  ##
    docker pull kibana:8.14.1
    docker run -d --name kibana -p 5601:5601 kibana:8.14.1
  ##
Selenium Grid Standalone with Chrome
  ##
    docker run -d --name selenium-standalone-chrome -p 4444:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-chrome:latest
  ##
Redis
  ##
    docker pull redis
    docker run --name redis -d -p 6379:6379 redis
  ##
Run development
  ##
    RAILS_MASTER_KEY=$(cat config/master.key) docker compose up -d
    RAILS_MASTER_KEY=$(cat config/master.key) docker compose -f docker-compose.yml -f docker-compose.local.yml up -d
  ##
Run test
  ##
    RAILS_MASTER_KEY=$(cat config/master.key) docker compose -f docker-compose.yml -f docker-compose.rspec-test.yml up --abort-on-container-exit --exit-code-from web
    RAILS_MASTER_KEY=$(cat config/master.key) docker compose -f docker-compose.yml -f docker-compose.seed-test.yml up --abort-on-container-exit --exit-code-from web
  ##
ENV
  ##
    EDITOR="code --wait" bin/rails credentials:edit
    EDITOR="code --wait" bin/rails credentials:edit -e production
  ##
  
  Setup Opentelemetry
  ##
    <!-- https://hub.docker.com/r/grafana/otel-lgtm -->
    docker run -p 3000:3000 -p 4317:4317 -p 4318:4318 --rm -ti grafana/otel-lgtm
  ##