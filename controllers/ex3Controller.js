const status = {
    ok:200,
    notFound: 404,
}

module.exports = {

    factorial: (req, res) => {
        //Peticio a la BBDD
        console.log(req.query);
        const number = Number(req.query.factorial);
        if (number) {

            let total = 1;
            for (let index = 1; index <= number; index++) {
                total *= index;
            }
            res.status(status.ok).send(`"factorial": "${total}"`);
        } else {
            const msg = {error: 'Param not a number'};
            res.status(status.notFound).send(msg);
        }
    },
};