//req = request, res = response
module.exports.helloWorld = (req, res) => {

    alumnos = ["Gerard","Khadija","Alex","Roger","Xavier","Eric","Miquel","Alba","Raul","Marc","Jordi","Marc","Pol","Biel", "Keen", "Alvar", "Pau", "Dani", "Jordi", "Jordi", "Alberto"]
    const responseObj = {alumnes: alumnos , total: alumnos.length};
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}