const api = require('../types/capi');
const ref = require('ref-napi');
const StructType = require('ref-struct-napi');
const { node_info_msg_t_ptr, node_info_msg_t } = require('../types/node_info_msg_t');
const node_info_t = require('../types/node_info_t');

class CSlurm {
    constructor() {

    }

    static api_version() {
        return api.slurm_api_version();
    }

    static load_node(last_update, flags) {
        const buf = ref.alloc(node_info_msg_t_ptr, null);
        const n = api.slurm_load_node(0, buf, 0);
        const t = ref.get(buf.deref(), 0, node_info_msg_t);
        var c = t.toObject();
        var p = c.node_array;
        var z = ref.get(p, 0 * node_info_t.size, node_info_t);
        console.log(ref.readCString(z.node_hostname, 0));
        console.log(ref.readCString(z.arch));
    }

}

module.exports = CSlurm;