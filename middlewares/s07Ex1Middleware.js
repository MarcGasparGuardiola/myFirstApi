const c = require('../config/constants')

module.exports.checkPhoneParams = (req, res, next) => {
    const paramArr = [];
    paramArr.push(req.body.model);
    paramArr.push(req.body.price);
    paramArr.push(req.body.size);
    paramArr.push(req.body.ram);
    paramArr.push(req.body.cpu);
    
    console.log(paramArr);

    paramArr.forEach((param) => {
        if (!param) {
            const msg = {error: `Param ${param} not defined`};
            res.status(c.status.badRequest).send(msg);
        }
    });
    next();
}; 