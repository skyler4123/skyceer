# README

This repo is a collection that combine Stimulus and ViewComponent to create the re-build basic components to reuse in UI with behaviors.

Setup
* Your Rails app must initial success with Stimulus and ViewComponent

Usage
* Just copy and past the components you want to your project and then use them in UI

Rules
* The basic components live at top level of /components. Expect some components that interage with 3rd libs.
* A component communicate with others via 'Global Event' controller name 'global'. Component A dispatch a event to 'global' then 'global' send that event to every components that listening to them.
* A component can not dispatch and receive the same event.
* Only 'ButtonComponent' can dispatch event.
* When 'ButtonComponent' want to to own its action (not event), the 'action' name must be prefixed by 'self' like 'selfOpen'.

Rails
  ##
    docker build -t rails .
    docker run -d --name web -p 3000:3000 -v $PWD:/rails rails
  ##
Postgres
  ##
    docker pull postgres
    docker run -d --name postgres -p 5432:5432 -e POSTGRES_USERNAME=postgres -e POSTGRES_PASSWORD=password postgres
  ##
Mongo
  ##
    docker pull mongo
    docker run -d --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongo -e MONGO_INITDB_ROOT_PASSWORD=password mongo
  ##
Elasticsearch
  ##
    docker pull elasticsearch:8.14.1
    docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:8.14.1
  ##
  ##
    docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "xpack.security.enabled=false" -e "xpack.security.enrollment.enabled=false" -e ELASTIC_USERNAME=elastic -e ELASTIC_PASSWORD=password elasticsearch:8.14.1
  ##
Kibana
  ##
    docker pull kibana:8.14.1
    docker run -d --name kibana -p 5601:5601 kibana:8.14.1
  ##