const express = require('express');
const app = express();
const port = 3001;
const client = require('mongodb').MongoClient;
const uri =
    "mongodb+srv://admin:123@cluster0.lyerf.mongodb.net/sample_mflix?retryWrites=true&w=majority";

app.listen(port, function () {
    console.log('server started at ', port);
});

app.get('/products', async function (req, res) {
    // res.send("it works");

    const connected = await connectDb();

    const products = await listDatabases(connected);

    res.json(products);
});


async function connectDb() {
    try {
        return await client.connect(uri, { useUnifiedTopology: true });
    } catch (e) {
        console.error(e)
    } finally {
        // client.close();
    }
}
// localhost:8080
// shopping.com -> axios get -> products through shoppingdb.com // localhost:3000

//function to get data
//frontend use 3000, axios:get /product
//do axios in one of the page ^, define what to be received 
async function listDatabases(client) {

    console.log('list');
    const db = client.db('Products');
    
    db.collection('Products').find().toArray(function(err, result) {
        if(err) throw err;

        console.log(result);
    });

    // TODO: function to insert data in db


    // const collection = db.collection('sample_mflix');

    // console.log(collection);

    // const dbList = await client.db().admin().listDatabases();

    // console.log('Database: ');
    // dbList.databases.forEach(db => console.log(` - ${db.name}`));
}

    // MongoClient.connect(url, function(err, db) {
//         MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//   })
//   .catch(error => console.error(error))




    //     var collection = db.collection('sample_mflix');
    //     var cursor = collection.find({});
    //     str = "";
    //     cursor.forEach(function(item) {
    //         if (item != null) {
    //                 str = str + "    users  " + item.users + "</br>";
    //         }
    //     }, function(err) {
    //         res.send(err);
    //         db.close();
    //        }
    //     );
     //});














