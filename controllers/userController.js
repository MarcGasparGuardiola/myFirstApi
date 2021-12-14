const users = [{id:1, name:'john'}, {id:2, name:'david'}, {id:3, name:'maria'}];

const status = {
    ok:200,
    created: 201,
    notFound: 404,
}

module.exports = {

    list: (req, res) => {
        //console.log(req.query)
        console.log(req.body);
        //Peticio a la BBDD
        res.status(status.ok).send(users);
    },

    profile:(req, res) => {
        //Peticio a la BBDD per obtenir dades user
        //console.log(req.params);
        const user = users.find((user) => user.id == req.params.userid);

        if (user) {
            res.status(status.ok).send(user);
        } else {
            const msg = {error: 'User ID not found'};
            res.status(status.notFound).send(msg);
        }  
    },

    create:(req, res) => {
        const user = req.body;
        user.id = users.length + 1;
        users.push();
        res.status(status.created).send(user);
    },
};