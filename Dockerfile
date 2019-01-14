FROM mongo:3

# add startup scripts
COPY scripts/01_create_indexes.js /docker-entrypoint-initdb.d/
COPY scripts/02_create_query_plans.js /docker-entrypoint-initdb.d/

# add scripts folder
COPY scripts /app

