FROM mongo:3

# add current folder to Docker container
COPY . /app

# set the working directory so the indexes/query plans creation scripts
# will be able to find the indexes/query plans files.
WORKDIR /app