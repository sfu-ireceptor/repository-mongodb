print("Creating indexes...\n");

var collection = '', l = [];

/****************************************************************************************
 config */

collection = 'sequences';

load("indexes.js");

/****************************************************************************************
 MAIN */

indexes.forEach(function(obj, i) {
       var index = tojson(obj);
       t0 = new Date();
       
       print('Creating index: ' + index );
       db[collection].createIndex(obj, {background: true});

       t1 = new Date();
       duration = (t1  - t0)/1000;
       print('Done. It took ' + Math.ceil(duration) + ' seconds');
       print('');
});
