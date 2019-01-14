FROM mongo:3

# add scripts folder
COPY scripts /app

# add startup scripts (when container is created):
# - build indexes and query plans
cp create_indexes.js /docker-entrypoint-initdb.d/01_create_indexes.js
cp create_query_plans.js /docker-entrypoint-initdb.d/02_create_query_plans.js
