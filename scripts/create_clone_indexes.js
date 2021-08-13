print("Creating indexes...\n");

var collection = '';

/****************************************************************************************
 config */

collection = 'clone';

load("clone_indexes.js");

/****************************************************************************************
 MAIN */

indexes.forEach(function(obj, i) {
       var index = tojson(obj);
       t0 = new Date();
       
       print('Creating index: ' + index );
       db[collection].createIndex(obj);

       t1 = new Date();
       duration = (t1  - t0)/1000;
       print('Done. It took ' + Math.ceil(duration) + ' seconds');
       print('');
});
