const status = {
    ok:200,
    notFound: 404,
}

module.exports = {

    mult2: (req, res) => {
       table = [];
       for (let index = 1; index <= 10; index++) {
          table.push(index * 2);
       }
       console.log(table);
       res.status(status.ok).send(`"table": ${table}`)
    },
    mult3: (req, res) => {
        table = [];
        for (let index = 1; index <= 10; index++) {
           table.push(index * 3);
        }
        console.log(table);
        res.status(status.ok).send(`"table": ${table}`)
     },
     mult4: (req, res) => {
        table = [];
        for (let index = 1; index <= 10; index++) {
           table.push(index * 4);
        }
        console.log(table);
        res.status(status.ok).send(`"table": ${table}`)
     },
     mult5: (req, res) => {
        table = [];
        for (let index = 1; index <= 10; index++) {
           table.push(index * 5);
        }
        console.log(table);
        res.status(status.ok).send(`"table": ${table}`)
     },
};