const c = require('../config/constants');

let phones = [
    {
        id: 1,
        model: 'mi note 6',
        price: 240,
        size: 11,
        ram: 6000,
        cpu: 'intel i7'
    },
    {
        id: 2,
        model: 'mi a litle 4',
        price: 120,
        size: 9,
        ram: 3000,
        cpu: 'amd 5'
    },
]

function getAvaliableLastId() {
    const lastPhone = phones[phones.length - 1]
    return lastPhone.id + 1;
}

module.exports = {

    add: (req, res,) => {
        const idAvaliable = getAvaliableLastId();
        phones.push( { 
            id: idAvaliable,
            model: req.body.model,
            price: req.body.price,
            size: req.body.size,
            ram: req.body.ram,
            cpu: req.body.cpu
        } )
        console.log(phones);
        res.status(c.status.ok).send(`{'msg': 'Phone created correctly'}`);
    },

    view: (req, res,) => {
        res.status(c.status.ok).send(phones);
    }, 
    update: (req, res,) => {
        const id = Number(req.params.id)
        phones.forEach((phone) => {
            if (phone.id === id) {
                phone.model = req.body.model;
                phone.size = req.body.size;
                phone.ram = req.body.ram;
                phone.cpu = req.body.cpu;
                res.status(c.status.ok).send(`{'msg': 'Phone updated correctly'}`);
            }
        });
        
        const msg = {error: `Phone ID ${id} not defined`};
        res.status(c.status.badRequest).send(msg);
    },

    delete: (req, res,) => {
        console.log(req.params)
        const id = Number(req.params.id)

        phones.forEach((phone) => {
            if (phone.id === id) {
                phones = phones.filter((el) => el.id !== id); 
                res.status(c.status.ok).send(`{'msg': 'Phone deleted correctly'}`);
            }
        });

        const msg = {error: `Phone ID ${id} not defined`};
        res.status(c.status.badRequest).send(msg);
    },
};