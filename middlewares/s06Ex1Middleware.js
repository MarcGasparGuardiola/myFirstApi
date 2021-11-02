const c = require('../config/constants')

module.exports.checkGreaterThanOne = (req, res, next) => {
    const responseStatus = 400;
    const number = Number(req.query.limit);
    console.log(req.query.limit);
    console.log(number)
    if (number) {
        req.query.limit = Number(req.query.limit);
        if (req.query.limit > 1) {
            next();
        } else {
            const msg = {error: 'Param "limit" not grater than 0'};
            res.status(c.status.badRequest).send(msg);
        }
    } else {
        const msg = {error: 'Param "limit" not a number'};
        res.status(c.status.badRequest).send(msg);
    }
}; 