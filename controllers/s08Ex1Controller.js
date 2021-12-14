const c = require('../config/constants');

module.exports = {
    create:(req, res) => {
        const user = req.body;
        user.id = users.length + 1;
        users.push();
        res.status(c.status.created).send(user);
    },
};