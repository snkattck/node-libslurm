const ref = require('ref-napi');
const StructType = require('ref-struct-napi');

const acct_gather_energy_t = StructType({
    ave_watts: ref.types.uint32,
    base_consumed_energy: ref.types.uint64,
    consumed_energy: ref.types.uint64,
    current_watts: ref.types.uint32,
    previous_consumed_energy: ref.types.uint64,
    time_t: ref.types.long
});

module.exports = acct_gather_energy_t;