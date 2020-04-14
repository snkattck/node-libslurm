var ffi = require('ffi-napi');

var slurm = ffi.Library('libslurm', {
  'slurm_api_version': [ 'long', [ ] ]
});

module.exports = slurm;