/*
 *
 * This script is used to set up the iReceptor query plans for the mongo database.
 * 
 * Use the following command to execute this script in order to load the query plans:
 * "sudo docker exec -it irdn-mongo mongo --authenticationDatabase admin <dbname> -u <serviceAccount> -p <serviceSecret> /dbsetup/queryplan.js"
 * where <dbname> is the database name, <serviceAccount> is the account name, and <serviceSecret> is the password. 
 * These correspond to the Turnkey environment variables $MONGODB_DB, $MONGODB_SERVICE_USER, and $MONGODB_SERVICE_SECRET respectively.
 * 
 */

// collection name to run the commands
const collectionName = "sequence";
const commands = [{
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4
    },
    indexes: [{
        ir_project_sample_id: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "v_call": {
            "$gte": "TRBV20-1*01",
            "$lt": "TRBV20-1*02"
        }
    },
    indexes: [{
            ir_project_sample_id: 1,
            v_call: 1
        },
        {
            v_call: 1,
            ir_project_sample_id: 1
        }
    ]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "v_call": {
            "$gte": "TRBV20-1*01",
            "$lt": "TRBV20-1*02"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        v_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "d_call": {
            "$gte": "TRBD2*01",
            "$lt": "TRBD2*02"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        d_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "j_call": {
            "$gte": "TRBJ2-01*01",
            "$lt": "TRBJ2-01*02"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        j_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "v_call": {
            "$gte": "TRBV20-1*01",
            "$lt": "TRBV20-1*02"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        v_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "v_call": {
            "$regex": "^TRBV20-1\\*01"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        v_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "d_call": {
            "$regex": "^TRBD2\\*02"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        d_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "j_call": {
            "$regex": "^TRBJ2-01\\*1"
        }
    },
    indexes: [{
        ir_project_sample_id: 1,
        j_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "junction_aa_length": 8
    },
    indexes: [{
        ir_project_sample_id: 1,
        junction_aa_length: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "substring": "CASSQVGTGVY"
    },
    indexes: [{
        substring: 1,
        ir_project_sample_id: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "vgene_gene": "TRBV20-1"
    },
    indexes: [{
        ir_project_sample_id: 1,
        vgene_gene: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "vgene_family": "TRBV20"
    },
    indexes: [{
        ir_project_sample_id: 1,
        vgene_family: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "v_call": "TRBV20-1*01"
    },
    indexes: [{
        ir_project_sample_id: 1,
        v_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "jgene_gene": "TRBJ2-01"
    },
    indexes: [{
        ir_project_sample_id: 1,
        jgene_gene: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "jgene_family": "TRBJ2"
    },
    indexes: [{
        ir_project_sample_id: 1,
        jgene_family: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "j_call": "TRBJ2-1*01"
    },
    indexes: [{
        ir_project_sample_id: 1,
        j_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "dgene_gene": "TRBD2-01"
    },
    indexes: [{
        ir_project_sample_id: 1,
        dgene_gene: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "dgene_family": "TRBD2"
    },
    indexes: [{
        ir_project_sample_id: 1,
        dgene_family: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "d_call": "TRBD2-1*01"
    },
    indexes: [{
        ir_project_sample_id: 1,
        d_call: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "functional": 1
    },
    indexes: [{
        ir_project_sample_id: 1,
        functional: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "ir_annotation_tool": 1
    },
    indexes: [{
        ir_project_sample_id: 1,
        ir_annotation_tool: 1
    }]
}, {
    planCacheSetFilter: collectionName,
    query: {
        "ir_project_sample_id": 4,
        "ir_annotation_tool": "MiXCR"
    },
    indexes: [{
        ir_project_sample_id: 1,
        ir_annotation_tool: 1
    }]
}];

// main
for (let command of commands) {
    printjson(
        db.runCommand(command)
    );
}
