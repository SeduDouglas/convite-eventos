const express = require('express');
const router = express.Router();
const store = require('../Store');
console.log(store);
const loadedStore = new store();

function validate_body(body) {
    if (!body.nome) {
        return 'É necessário informar o nome';
    }
    if (!body.email) {
        return 'É necessário informar o email';
    }
    return null;
}

router.get('/', async (req, res) => {
    res.json(await loadedStore.getItems());
});

router.post('/aceitar', async (req, res) => {
    if(error = validate_body(req.body))
        res.status(400).json({error})
    else{
        let data = req.body;
        data.status = 'confirmado';
        await loadedStore.addItem(data);
        res.status(204).send();
    }
});

router.post('/recusar', async (req, res) => {
    if(error = validate_body(req.body))
        res.status(400).json({error})
    else{
        let data = req.body;
        data.status = 'nao-confirmado';
        await loadedStore.addItem(data);
        res.status(204).send();
    }
});

module.exports = router;