#!/bin/bash

if [ $# -ne 1 ]
then
    echo "usage: $0 study_id"
    exit
fi

SCRIPT_DIR=`dirname "$0"`
echo "Running remove stats from $SCRIPT_DIR"

mongo --quiet $MONGO_INITDB_DATABASE --eval "var study_id = '$1'" ${SCRIPT_DIR}/remove_stats.js
