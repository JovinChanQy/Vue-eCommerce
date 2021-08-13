const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
 "mongodb+srv://admin:123@cluster0.lyerf.mongodb.net/sample_airbnb?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    const database = client.db('listingsAndReviews');
    const movies = database.collection('listingsAndReviews');

    // Query for a movie that has the title 'Back to the Future'
    //const query = { title: 'Back to the Future' };
    //const movie = await movies.findOne(query);

    //create data schema
const productSchema = {
  name: String,
  desc: Varchar,
  price: Int32Array,
  promo: Int16Array
  
}

    console.log(product);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





