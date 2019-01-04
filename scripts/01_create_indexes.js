print("Creating indexes...");

var collection = '', l = [];

/****************************************************************************************
 config */

collection = 'sequences';

l = [
	{ "_id" : 1 },
	{ "ir_project_sample_id" : 1 },

	{ "v_call" : 1, "ir_project_sample_id" : 1 },
	{ "j_call" : 1, "ir_project_sample_id" : 1 },
	{ "d_call" : 1, "ir_project_sample_id" : 1 },

	{ "junction_aa_length" : 1, "ir_project_sample_id" : 1 },

	{ "jgene_gene" : 1, "ir_project_sample_id" : 1 },
	{ "jgene_family" : 1, "ir_project_sample_id" : 1 },
	{ "vgene_gene" : 1, "ir_project_sample_id" : 1 },
	{ "vgene_family" : 1, "ir_project_sample_id" : 1 },
	{ "dgene_gene" : 1, "ir_project_sample_id" : 1 },
	{ "dgene_family" : 1, "ir_project_sample_id" : 1 },

	{ "functional" : 1, "ir_project_sample_id" : 1 },
	{ "ir_annotation_tool" : 1, "ir_project_sample_id" : 1 },

	{ "substring" : 1, "ir_project_sample_id" : 1 }


];

/****************************************************************************************
 MAIN */

l.forEach(function(obj, i) {
       var index = tojson(obj);
       t0 = new Date();
       
       print('Creating index: ' + index );
       db[collection].createIndex(obj);

       t1 = new Date();
       duration = (t1  - t0)/1000;
       print('Done. It took ' + Math.ceil(duration) + ' seconds');
       print('');
});
