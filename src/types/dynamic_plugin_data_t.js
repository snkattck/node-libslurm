const ref = require('ref-napi');
const StructType = require('ref-struct-napi');

const dynamic_plugin_data_t = StructType({
    data: ref.refType(ref.types.void),
    plugin_id: ref.types.int32
});

module.exports = dynamic_plugin_data_t;