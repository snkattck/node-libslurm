const { slurm, slurm_load_node } = require("./index");
console.log(slurm.slurm_api_version());

slurm_load_node();