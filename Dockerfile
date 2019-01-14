FROM mongo:3

# add current folder to Docker container
COPY . /app

# execute some scripts when the container is created
# note: the scripts are executed in alphabetical order
RUN ln -s /app/scripts/create_indexes.js /docker-entrypoint-initdb.d/01_create_indexes.js
RUN ln -s /app/scripts/create_query_plans.js /docker-entrypoint-initdb.d/02_create_query_plans.js
