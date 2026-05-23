print("Dropping indexes except those required for dataloading...");

var collection = '', indexes = [];

/****************************************************************************************
 config */

collection = 'clone';

required_indexes = [
	{ "repertoire_id" : 1},
	{ "ir_annotation_set_metadata_id_clone" : 1}
];

/****************************************************************************************
 MAIN */

t0 = new Date();

// generate names of the required indexes
required_indexes_names = [];
required_indexes.forEach(function(index, i) {
	var str_list = [];
	for (var column_name in index){
		var order = index[column_name];
		str_list.push(column_name + '_' + order);
	}
	var str = str_list.join('_');
	required_indexes_names.push(str);
});


// drop all existing indexes except required ones
indexes = db[collection].getIndexes();
indexes.forEach(function(index, i) {
	if( ! required_indexes_names.includes(index.name)) {
		print('Dropping index: ' + index.name);
		db[collection].dropIndex(index.name);
	}
});
print('');

// build required indexes
// note: they won't be rebuilt if they already exist
required_indexes.forEach(function(obj, i) {
       var index = tojson(obj);
       t0 = new Date();
       
       print('Creating index: ' + index );
       db[collection].createIndex(obj, {background: true});

       t1 = new Date();
       duration = (t1  - t0)/1000;
       print('Done. It took ' + Math.ceil(duration) + ' seconds');
       print('');
});

t1 = new Date();
duration = (t1  - t0)/1000;
print('Done. It took ' + Math.ceil(duration) + ' seconds');
