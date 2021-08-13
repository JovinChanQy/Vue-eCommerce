const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:123@cluster0.mongodb.net/Pro?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");

         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }

         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

run().catch(console.dir);

// const { MongoClient } = require("mongodb");

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




