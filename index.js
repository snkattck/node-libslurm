const ffi = require('ffi-napi');
const ref = require('ref-napi');
const arr = require('ref-array-napi');
const StructType = require('ref-struct-napi');

// typedef struct dynamic_plugin_data {
// 	void *data;
// 	uint32_t plugin_id;
// } dynamic_plugin_data_t;
const dynamic_plugin_data_t = StructType({
    data: ref.refType(ref.types.void),
    plugin_id: ref.types.int32
});

// typedef struct acct_gather_energy {
// 	uint32_t ave_watts;	  /* average power consump of node, in watts */
// 	uint64_t base_consumed_energy;
// 	uint64_t consumed_energy; /* total energy consumed by node, in joules */
// 	uint32_t current_watts;	  /* current power consump of node, in watts */
// 	uint64_t previous_consumed_energy;
// 	time_t poll_time;         /* When information was last retrieved */
// } acct_gather_energy_t;
const acct_gather_energy_t = StructType({
    ave_watts: ref.types.uint32,
    base_consumed_energy: ref.types.uint64,
    consumed_energy: ref.types.uint64,
    current_watts: ref.types.uint32,
    previous_consumed_energy: ref.types.uint64,
    time_t: ref.types.long
});

// typedef struct power_mgmt_data {
// 	uint32_t cap_watts;	/* power consumption limit of node, in watts */
// 	uint32_t current_watts;	/* current power consumption, in watts */
// 	uint64_t joule_counter;	/* total energy consumption by node, in joules */
// 	uint32_t new_cap_watts;	/* new power consumption limit of node, in watts */
// 	uint32_t max_watts;	/* maximum power consumption by node, in watts */
// 	uint32_t min_watts;	/* minimum power consumption by node, in watts */
// 	time_t new_job_time;	/* set when a new job has been scheduled on the
// 				 * node, used to trigger higher cap */
// 	uint16_t state;		/* Power state information */
// 	uint64_t time_usec;	/* Data timestamp in microseconds since start
// 				 * of the day */
// } power_mgmt_data_t;
const power_mgmt_data_t = StructType({
    cap_watts: ref.types.uint32,
    current_watts: ref.types.uint32,
    joule_counter: ref.types.uint64,
    new_cap_watts: ref.types.uint32,
    max_watts: ref.types.uint32,
    min_Watts: ref.types.uint32,
    new_job_time: ref.types.long,
    state: ref.types.uint16,
    time_usec: ref.types.uint64 
});

// typedef struct ext_sensors_data {
// 	uint64_t consumed_energy;    /* total energy consumed, in joules */
// 	uint32_t temperature;	     /* temperature, in celsius */
// 	time_t   energy_update_time; /* last update time for consumed_energy */
// 	uint32_t current_watts;      /* current power consumption, in watts */
// } ext_sensors_data_t;
const ext_sensors_data_t = StructType({
    consumed_energy: ref.types.uint64,
    temperature: ref.types.uint32,
    energy_update_time: ref.types.long,
    current_watts: ref.types.uint32
});

// https://github.com/SchedMD/slurm/blob/master/slurm/slurm.h.in
// typedef struct node_info {
// 	char *arch;		/* computer architecture */
// 	char *bcast_address;	/* BcastAddr (optional) */
// 	uint16_t boards;        /* total number of boards per node  */
// 	time_t boot_time;	/* time of node boot */
// 	char *cluster_name;	/* Cluster name ONLY set in federation */
// 	uint16_t cores;         /* number of cores per socket       */
// 	uint16_t core_spec_cnt; /* number of specialized cores on node */
// 	uint32_t cpu_bind;	/* Default task binding */
// 	uint32_t cpu_load;	/* CPU load * 100 */
// 	uint64_t free_mem;	/* free memory in MiB */
// 	uint16_t cpus;		/* configured count of cpus running on
// 				 * the node */
// 	char *cpu_spec_list;	/* node's specialized cpus */
// 	acct_gather_energy_t *energy;	 /* energy data */
// 	ext_sensors_data_t *ext_sensors; /* external sensor data */
// 	power_mgmt_data_t *power;        /* power management data */
// 	char *features;		/* list of a node's available features */
// 	char *features_act;	/* list of a node's current active features,
// 				 * Same as "features" if NULL */
// 	char *gres;		/* list of a node's generic resources */
// 	char *gres_drain;	/* list of drained GRES */
// 	char *gres_used;	/* list of GRES in current use */
// 	char *mcs_label;	/* mcs label if mcs plugin in use */
// 	uint64_t mem_spec_limit; /* MB memory limit for specialization */
// 	char *name;		/* node name to slurm */
// 	uint32_t next_state;	/* state after reboot (enum node_states) */
// 	char *node_addr;	/* communication name (optional) */
// 	char *node_hostname;	/* node's hostname (optional) */
// 	uint32_t node_state;	/* see enum node_states */
// 	char *os;		/* operating system currently running */
// 	uint32_t owner;		/* User allowed to use this node or NO_VAL */
// 	char *partitions;	/* Comma separated list of partitions containing
// 				 * this node, NOT supplied by slurmctld, but
// 				 * populated by scontrol */
// 	uint16_t port;		/* TCP port number of the slurmd */
// 	uint64_t real_memory;	/* configured MB of real memory on the node */
// 	char *reason;		/* reason for node being DOWN or DRAINING */
// 	time_t reason_time;	/* Time stamp when reason was set, ignore if
// 				 * no reason is set. */
// 	uint32_t reason_uid;   	/* User that set the reason, ignore if
// 				 * no reason is set. */
// 	dynamic_plugin_data_t *select_nodeinfo;  /* opaque data structure,
// 						  * use
// 						  * slurm_get_select_nodeinfo()
// 						  * to access contents */
// 	time_t slurmd_start_time;/* time of slurmd startup */
// 	uint16_t sockets;       /* total number of sockets per node */
// 	uint16_t threads;       /* number of threads per core */
// 	uint32_t tmp_disk;	/* configured MB of total disk in TMP_FS */
// 	uint32_t weight;	/* arbitrary priority of node for scheduling */
// 	char *tres_fmt_str;	/* str representing configured TRES on node */
// 	char *version;		 /* Slurm version number */
// } node_info_t;

const node_info_t = StructType({
    arch: ref.refType(ref.types.char),
    bcast_address: ref.refType(ref.types.char),
    boards: ref.types.uint16,
    boot_time: ref.types.long,
    cluster_name: ref.refType(ref.types.char),
    cores: ref.types.uint16,
    core_spec_cnt: ref.types.uint16,
    cpu_bind: ref.types.uint32,
    cpu_load: ref.types.uint32,
    free_mem: ref.types.uint64,
    cpus: ref.types.uint16,
    cpu_spec_list: ref.refType(ref.types.char),
    energy: ref.refType(acct_gather_energy_t),
    ext_sensors: ref.refType(ext_sensors_data_t),
    power: ref.refType(power_mgmt_data_t),
    features: ref.refType(ref.types.char),
    features_act: ref.refType(ref.types.char),
    gres: ref.refType(ref.types.char),
    gres_drained: ref.refType(ref.types.char),
    gres_used: ref.refType(ref.types.char),
    mcs_label: ref.refType(ref.types.char),
    mem_spec_limit: ref.types.uint64,
    name: ref.refType(ref.types.char),
    next_state: ref.refType(ref.types.uint32),
    node_addr: ref.refType(ref.types.char),
    node_hostname: ref.refType(ref.types.char),
    node_state: ref.types.uint32,
    os: ref.refType(ref.types.char),
    owner: ref.types.uint32,
    partitions: ref.refType(ref.types.char),
    port: ref.types.uint16,
    real_memory: ref.types.uint64,
    reason: ref.refType(ref.types.char),
    reason_time: ref.types.long,
    reason_uid: ref.types.uint32,
    select_nodeinfo: ref.refType(dynamic_plugin_data_t),
    slurmd_start_time: ref.types.long,
    sockets: ref.types.uint16,
    threads: ref.types.uint16,
    tmp_disk: ref.types.uint32,
    weight: ref.types.uint32,
    tres_fmt_str: ref.refType(ref.types.char),
    version: ref.refType(ref.types.char)
});

// https://github.com/SchedMD/slurm/blob/master/slurm/slurm.h.in
// typedef struct node_info_msg {
//	time_t last_update;		    /* time of latest info */
//	uint32_t record_count;		/* number of records */
//	node_info_t *node_array;	/* the node records */
// } node_info_msg_t;

const node_array_t = ref.refType(node_info_t);

const node_info_msg_t = StructType({
    last_update: ref.types.long,
    record_count: ref.types.uint32,
    node_array: node_array_t
});

const node_info_msg_t_ptr = ref.refType(node_info_msg_t);
const node_info_msg_t_pptr = ref.refType(node_info_msg_t_ptr);
const SHOW_ALL = 0x0001;

var slurm = ffi.Library('libslurm', {
  'slurm_api_version': [ 'long', [ ] ],
  'slurm_load_node': [ 'int', [ 'long', node_info_msg_t_pptr, ref.types.uint16 ]]
}); 

var slurm_load_node = function(last_update, flags) 
{
    const buf = ref.alloc(node_info_msg_t_ptr, null);
    const n = slurm.slurm_load_node(0, buf, 0);
    const t = ref.get(buf.deref(), 0, node_info_msg_t);

    c = t.toObject();
    p = c.node_array;
    z = ref.get(p, 0*node_info_t.size, node_info_t);
    console.log(ref.readCString(z.node_hostname, 0));
    console.log(ref.readCString(z.arch));
}   


module.exports = { slurm, slurm_load_node };    