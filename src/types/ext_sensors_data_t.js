const ref = require('ref-napi');
const StructType = require('ref-struct-napi');

const ext_sensors_data_t = StructType({
    consumed_energy: ref.types.uint64,
    temperature: ref.types.uint32,
    energy_update_time: ref.types.long,
    current_watts: ref.types.uint32
});

module.exports = ext_sensors_data_t;