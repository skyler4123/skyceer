# syntax=docker/dockerfile:1
# check=error=true

# This Dockerfile is designed for production, not development. Use with Kamal or build'n'run by hand:
# docker build -t kamal_thruster .
# docker run -d -p 80:80 -e RAILS_MASTER_KEY=<value from config/master.key> --name kamal_thruster kamal_thruster
# docker build -t skyceer_rails .
# docker run -d -p 3000:3000 -e RAILS_MASTER_KEY=$(cat config/credentials/production.key) --name skyceer_rails_web skyceer_rails

# For a containerized dev environment, see Dev Containers: https://guides.rubyonrails.org/getting_started_with_devcontainer.html

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.4.3
FROM docker.io/library/ruby:$RUBY_VERSION-slim  AS base

# Rails app lives here
WORKDIR /rails

# Set production environment, uncomment for deploy on production mode
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development" \
    HTTP_PORT="3000" \
    TARGET_PORT="3001"


# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build gems
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential curl git libpq-dev libvips pkg-config libyaml-dev

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git && \
    bundle exec bootsnap precompile --gemfile

# Copy application code
COPY . .

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile app/ lib/

# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile
# RUN ./bin/rails assets:precompile

# Final stage for app image
FROM base

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libvips postgresql-client graphviz imagemagick chromium && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built artifacts: gems, application
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

# Run and own only the runtime files as a non-root user for security
# RUN useradd rails --create-home --shell /bin/bash && \
#     chown -R rails:rails db log storage tmp
# USER rails:rails

# Check Packwerk and Sorbet
# RUN ./bin/bundle exec tapioca init && \
#     ./bin/bundle exec tapioca dsl && \
#     ./bin/bundle exec packwerk check && \
#     ./bin/rails graphwerk:update

# Entrypoint prepares the database.
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
# CMD ["./bin/rails", "server", "-b", "0.0.0.0"]
CMD ["./bin/thrust", "./bin/rails", "server", "-p", "3001"]
# CMD ["bundle", "exec", "thrust", "./bin/rails", "server", "-p", "3001"]
# CMD ["./bin/bundle", "exec", "sidekiq"]
# CMD ["./bin/rails", "solid_queue:start"]