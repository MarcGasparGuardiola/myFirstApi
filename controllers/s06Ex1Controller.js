const c = require('../config/constants')

module.exports = {

    aleatori: (req, res) => {
        //Peticio a la BBDD
        const aleatori = Math.floor(Math.random() * (req.query.limit - 1 + 1) + 1)
        console.log(c.status.ok);
        res.status(c.status.ok).send({aleatori});
    },
};