print("Creating query plans...");

var collection = '', l = [];

/****************************************************************************************
 config */

collection = 'sequence';

load("query_plans.js");

/****************************************************************************************
 MAIN */

// hack to make sure the collection exists
db[collection].createIndex({ "_id" : 1 });

// create query plans
query_plans.forEach(function(obj, i) {
    var response = db.runCommand(obj)
    // printjson(response);
    // print('');
});
