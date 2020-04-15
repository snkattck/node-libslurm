const node_info_t = require('./node_info_t');
const ref = require('ref-napi');
const StructType = require('ref-struct-napi');

const node_array_t = ref.refType(node_info_t);

const node_info_msg_t = StructType({
    last_update: ref.types.long,
    record_count: ref.types.uint32,
    node_array: node_array_t
});

const node_info_msg_t_ptr = ref.refType(node_info_msg_t);
const node_info_msg_t_pptr = ref.refType(node_info_msg_t_ptr);

module.exports = { node_array_t, node_info_msg_t, node_info_msg_t_ptr, node_info_msg_t_pptr };