const status = {
    ok:200,
    notFound: 404,
}

module.exports = {

    getTime: (req, res) => {
        //Peticio a la BBDD
        const time = Date.now(); 
        res.status(status.ok).send(`"time": "${time}"`);
    },

    getDate:(req, res) => {
        const time = new Date();
        const date  = time.getDate()+'-'+(time.getMonth()+1)+'-'+time.getFullYear();
        res.status(status.ok).send(`"date": "${date}"`)
    },

    getHour:(req, res) => {
        const time = new Date();
        const date  = time.getHours()+'-'+time.getMinutes()+'-'+time.getSeconds();
        res.status(status.ok).send(`"hour": "${date}"`)
    },
};