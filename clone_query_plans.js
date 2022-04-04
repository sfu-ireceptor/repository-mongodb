query_plans = [
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4
        },
        indexes: [{
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "junction_aa_length": 8
        },
        indexes: [{
            junction_aa_length: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_substring": "CASSQVGTGVY"
        },
        indexes: [{
            ir_substring: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_vgene_gene": "TRBV20-1"
        },
        indexes: [{
            ir_vgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_vgene_family": "TRBV20"
        },
        indexes: [{
            ir_vgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "v_call": "TRBV20-1*01"
        },
        indexes: [{
            v_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_jgene_gene": "TRBJ2-01"
        },
        indexes: [{
            ir_jgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_jgene_family": "TRBJ2"
        },
        indexes: [{
            ir_jgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "j_call": "TRBJ2-1*01"
        },
        indexes: [{
            j_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_dgene_gene": "TRBD2-01"
        },
        indexes: [{
            ir_dgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_dgene_family": "TRBD2"
        },
        indexes: [{
            ir_dgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "d_call": "TRBD2-1*01"
        },
        indexes: [{
            d_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "productive": 1
        },
        indexes: [{
            productive: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "junction_aa_length": 8
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            junction_aa_length: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_substring": "CASSQVGTGVY"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_substring: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "junction_aa": "CASSQVGTGVY"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            junction_aa: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_vgene_gene": "TRBV20-1"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_vgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_vgene_family": "TRBV20"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_vgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "v_call": "TRBV20-1*01"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            v_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_jgene_gene": "TRBJ2-01"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_jgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_jgene_family": "TRBJ2"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_jgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "j_call": "TRBJ2-1*01"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            j_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_dgene_gene": "TRBD2-01"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_dgene_gene: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "ir_dgene_family": "TRBD2"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            ir_dgene_family: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "d_call": "TRBD2-1*01"
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            d_call: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    },
    {
        planCacheSetFilter: collection,
        query: {
            "ir_annotation_set_metadata_id_clone": 4,
            "productive": 1
        },
        "projection": {
            "sequence": 1,
            "sequence_id": 1,
            "rev_comp": 1,
            "v_call": 1,
            "j_call": 1,
            "d_call": 1,
            "v_score": 1,
            "junction": 1,
            "junction_length": 1,
            "cdr1region_sequence_aa": 1,
            "cdr2region_sequence_aa": 1,
            "cdr3region_sequence_aa": 1,
            "junction_aa": 1,
            "junction_aa_length": 1,
            "functional": 1,
            "subject_id": 1,
            "sex": 1,
            "organism": 1,
            "ethnicity": 1,
            "study_title": 1,
            "study_id": 1,
            "study_description": 1,
            "lab_name": 1,
            "disease_state_sample": 1,
            "study_group_description": 1,
            "sample_id": 1,
            "template_class": 1,
            "tissue": 1,
            "cell_subset": 1,
            "sequencing_platform": 1,
            "cell_phenotype": 1,
            "repertoire_id": 1
        },
        indexes: [{
            productive: 1,
            ir_annotation_set_metadata_id_clone: 1
        }]
    }
];
