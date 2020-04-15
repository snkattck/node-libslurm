const ref = require('ref-napi');
const { node_info_msg_t_pptr } = require('./node_info_msg_t');
const ffi = require('ffi-napi');

const slurm = ffi.Library('libslurm', {
    'slurm_api_version': [ 'long', [ ] ],
    'slurm_load_node': [ 'int', [ 'long', node_info_msg_t_pptr, ref.types.uint16 ]]
});

module.exports = slurm;