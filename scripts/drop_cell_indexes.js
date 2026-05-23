print("Dropping indexes...");

var collection = '';

/****************************************************************************************
 config */

collection = 'cell';

/****************************************************************************************
 MAIN */

t0 = new Date();
db[collection].dropIndexes();
t1 = new Date();
duration = (t1  - t0)/1000;
print('Done. It took ' + Math.ceil(duration) + ' seconds');
