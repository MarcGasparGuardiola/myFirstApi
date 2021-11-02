const c = require('../config/constants')

module.exports.checkStringInBody = (req, res, next) => {
    console.log(req.body);
    const string = req.body.string;
    
    if (string === 'mi-caja-fuerte') {
        next();
    } else {
        const msg = {error: 'You need "mi caja-fuerte" password'};
        res.status(c.status.badRequest).send(msg);
    }
}; 