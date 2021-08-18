const express = require('express');
const app = express();
const port = 3001;
const client = require('mongodb').MongoClient;
const uri =
"mongodb+srv://admin:123@cluster0.lyerf.mongodb.net/sample_mflix?retryWrites=true&w=majority";
// const Post = require('../models/Post');
const mongoose = require('mongoose');
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true});

const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDB connection error:'));
db.once('open', function() {
    console.log('connected')
});


const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: String,
    description: String,
    price: Number,
});

const Product = mongoose.model('Product', ProductSchema);

Product.find()

app.listen(port, function () {
    console.log('server started at ', port);
});

app.get('/', async (req, res) => res.send('Hello world 1234'))



// app.get('/products', async function (req, res) {
//     // res.send("it works");

//     const connected = await connectDb();

//     const products = await listDatabases(connected);

//     res.json(products);
// });


// async function connectDb() {
//     try {
//         return await client.connect(uri, { useUnifiedTopology: true });
//     } catch (e) {
//         console.error(e)
//     } finally {
//         // client.close();
//     }
// }

// app.get('/adminadd', async function (req, res) {
//     let posts = Post.find({}, function(err, posts){
//         if(err){
//             console.log(err);
//         }
//         else res.json(products);
// });
// localhost:8080
// shopping.com -> axios get -> products through shoppingdb.com // localhost:3000

//function to get data
//frontend use 3000, axios:get /product
//axios in Adminadd component ^, define what to be received 
async function listDatabases(client) {

    console.log('list');
    const db = client.db('Products');
    
    db.collection('details').find().toArray(function(err, result) {
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














