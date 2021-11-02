const c = require('../config/constants');


module.exports = {

    operar: (req, res,) => {
        let array = [2,4,8,9,7,3,5,6];

        const mult = Number(req.body.mult);

        console.log(mult);
        array = array.map((val) => mult*val);

        res.status(c.status.badRequest).send({array});
    },
};