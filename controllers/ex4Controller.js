const { param } = require("../routes/exercici4Routes");
var bodyParser = require('body-parser')

const status = {
    ok:200,
    notFound: 404,
}

module.exports = {

    operar: (req, res) => {
        //Peticio a la BBDD
        const op = req.params.op
        console.log(req.body);
        const x = Number(req.body.x);
        const y = Number(req.body.y);
        const result = 0;
        switch (op) {
            case 'sum':
                result = x + y;
                break;
            case 'rest':
                result = x - y;
                break;
            case 'div':
                   if (y == 0) {
                        const msg = {error: "y can't be 0"};
                        res.status(status.notFound).send(msg);
                   }
                   result = x / y;
                break;
            case 'mult':
                    result = x * y;
                break;
        }
        res.status(status.ok).send(`"resultat": "${result}"`);
    },
};