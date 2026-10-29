import { MongoClient } from 'mongodb';
import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = 5000


const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

connectToMongoDB()


app.get('/', (req, res) =>{
    res.send({message: ' Server is Running Now'})
})
app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`);
})