const express = require('express');
const cors = require('cors');
const app = express();
const username = 'admin';
const password = '123';
const cluster = 'cluster0';
const dbName = 'Products';
const port = 3001;
const client = require('mongodb').MongoClient;
const uri =
    `mongodb+srv://${username}:${password}@${cluster}.lyerf.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const mongoose = require('mongoose');

// Middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(port, function () {
            console.log('Server started at ', port);
        });
    });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('connected')
});

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    price: Number,
    promo: String,
});

const Product = mongoose.model('Product', ProductSchema, 'details');

app.get('/products', async function (req, res) {
    const products = await Product.find({});

    try {
        res.json(products);
    } catch (error) {
        console.error(error);
    }
});

app.post('/product/add', async function (request, response) {

    const newProduct = new Product({
        name: request.body.name,
        desc: request.body.desc,
        price: request.body.price,
        promo: request.body.promo,
    })

    try {
        const result = await newProduct.save();

        response.json(result);
    } catch (error) {
        console.error(error);
    }
});


app.get('/', async (req, res) => {
    res.send('CORS enabled!')
})


//TODO server side POST 
// client.connect(error => {

//     getData(newProduct).then(data => {
//         db.collection('details').insertOne(data)
//     })
// })













