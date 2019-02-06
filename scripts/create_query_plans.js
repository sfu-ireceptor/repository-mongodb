print("Creating query plans...");

var collection = '', l = [];

/****************************************************************************************
 config */

collection = 'sequence';

load("query_plans.js");

/****************************************************************************************
 MAIN */

query_plans.forEach(function(obj, i) {
    var response = db.runCommand(obj)
    printjson(response);
    print('');
});
