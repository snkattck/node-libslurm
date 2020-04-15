const ref = require('ref-napi');
const StructType = require('ref-struct-napi');

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

module.exports = power_mgmt_data_t;