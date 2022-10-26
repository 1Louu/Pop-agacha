const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Item
router.get('/', async (req, res)=> {
    const posts = await tryConnectItem(); 
    res.send(await posts.find({}).toArray());
});

// Add Item
router.post('/', async(req, res) => {
    const coll = await tryConnect(); 
    await coll.insertOne({
        text: req.body.text, 
        createdAt: new Date()
    });
    res.status(201).send();
});

// Delete Item
router.delete('/:id', async (req, res) => {
    const coll = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});


async function tryConnectItem(){
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/popagacha', {
        useNewUrlParser: true
    });
    
    return client.db('popagacha').collection('Item');
}

module.exports = router; 