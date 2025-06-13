require("dotenv").config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
   const coffeeCollection = client.db("coffee-store").collection("coffees")
   app.get("/coffees", async(req,res) =>{
    const allCoffee = await coffeeCollection.find().toArray()
    res.send(allCoffee)
   })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Coffee Card!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})