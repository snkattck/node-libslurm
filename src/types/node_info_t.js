const ref = require('ref-napi');
const StructType = require('ref-struct-napi');
const dynamic_plugin_data_t = require('./dynamic_plugin_data_t');
const ext_sensors_data_t = require('./ext_sensors_data_t'); 
const power_mgmt_data_t = require('./power_mgmt_data_t');
const acct_gather_energy_t = require('./acct_gather_energy_t');

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

module.exports = node_info_t;