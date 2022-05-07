const MissionCommander = require('./app/missionCommander');

const sara = new MissionCommander("Sara");
const pedro = new MissionCommander("Pedro");
const jesica = new MissionCommander("Jesica");

console.log(sara.name);
console.log(pedro.name);
console.log(jesica.name);