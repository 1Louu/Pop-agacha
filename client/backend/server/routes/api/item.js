const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Item
router.get('/', async (req, res)=> {
    const posts = await tryConnectItem(); 
    res.send(await posts.find({}).toArray());
});

// Get Item By ID
router.get('/:id', async (req, res)=> {
    const posts = await tryConnectItem();
    res.send(await posts.find({_id: new mongodb.ObjectID(req.params.id)}).toArray())
});

// Add Item
router.post('/', async(req, res) => {
    const posts = await tryConnectItem(); 
    await posts.insertOne({
        name: req.body.name, 
        price: req.body.price,
        category: req.body.category,
        manufacturer: req.body.manufacturer
    });
    res.status(201).send();
});

// Delete Item
router.delete('/:id', async (req, res) => {
    const posts = await tryConnectItem();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function tryConnectItem(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://127.0.0.1:27017/popagacha', {
        useNewUrlParser: true
    });
    
    return client.db('popagacha').collection('items');
}

module.exports = router; 