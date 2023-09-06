const express = require('express');
const { MongoClient } = require('mongodb');
var cors = require('cors');

const uri = 'mongodb+srv://kardzUser:SimonSays@cluster0.0fbvclj.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

const server = express();
const PORT = 8000;

server.use(cors());

server.get('/cards', async function (req, res) {
  try {
    await client.connect();
    const dbCollection = client.db('kardz').collection('MainPool');
    let cardData = [];
    
    if(dbCollection && Object.keys(dbCollection).length > 0){
    cardData = await dbCollection.find().toArray();
    }

    res.send(cardData);
    
  } catch (e) {
    console.error(e);
    res.status(500).send('Error fetching cards');
  } finally {
    await client.close();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
