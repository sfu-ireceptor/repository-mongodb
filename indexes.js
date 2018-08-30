/*
 * 
 * This script is used to set up the standard set of iReceptor indexes for the mongo database.
 * 
 * Use the following command to execute this script in order to load the query plans:
 * "sudo docker exec -it irdn-mongo mongo --authenticationDatabase admin <dbname> -u <serviceAccount> -p <serviceSecret> /dbsetup/indexes.js"
 * where <dbname> is the database name, <serviceAccount> is the account name, and <serviceSecret> is the password. 
 * These correspond to the Turnkey environment variables $MONGODB_DB, $MONGODB_SERVICE_USER, and $MONGODB_SERVICE_SECRET respectively.
 * 
 */

// collection name to run the commands
const collectionName = "sequence";
const indexes = [{
    ir_project_sample_id: 1
}, {
    ir_project_sample_id: 1,
    v_call: 1
}, {
    ir_project_sample_id: 1,
    j_call: 1
}, {
    ir_project_sample_id: 1,
    d_call: 1
}, {
    ir_project_sample_id: 1,
    junction_aa_length: 1
}, {
    ir_annotation_tool: 1
}, {
    ir_project_sample_id: 1,
    vgene_family: 1
}, {
    ir_project_sample_id: 1,
    vgene_gene: 1
}, {
    ir_project_sample_id: 1,
    jgene_gene: 1
}, {
    ir_project_sample_id: 1,
    jgene_family: 1
}, {
    ir_project_sample_id: 1,
    dgene_gene: 1
}, {
    ir_project_sample_id: 1,
    dgene_family: 1
}, {
    ir_project_sample_id: 1,
    functional: 1
}, {
    ir_project_sample_id: 1,
    ir_annotation_tool: 1
}, {
    substring: 1,
    ir_project_sample_id: 1
}];

// main
for (let index of indexes) {
    printjson(db[collectionName].createIndex(index));
}
