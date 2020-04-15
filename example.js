const slurm = require('./src/interface/cslurm');

console.log(slurm.api_version())
slurm.load_node();