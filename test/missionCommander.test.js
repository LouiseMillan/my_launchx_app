/*
describe("Esto es una suite de pruebas", () => {
    test("Caso de prueba 1", () => {
        const result = 1+2;
        expect(result).toBe(3);
    });
});
*/

const MissionCommander = require('../app/missionCommander');

describe("Unit Test for MissionCommander Class", () => {
    test("1) Create a mission commander object", () => {
        const myMissionCommander = new MissionCommander("Woopa");
        expect(myMissionCommander.name).toBe("Woopa");
    });
});