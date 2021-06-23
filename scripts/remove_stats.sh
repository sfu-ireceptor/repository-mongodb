#!/bin/bash

if [ $# -ne 1 ]
then
    echo "usage: $0 study_id"
    exit
fi

mongo --quiet $MONGO_INITDB_DATABASE --eval "var study_id = '$1'" /data/src/repository-mongodb/scripts/remove_stats.js
