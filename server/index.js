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
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useFindAndModify: false,
    useUnifiedTopology:true
});

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
    promo: String,
});

const Product = mongoose.model('Product', ProductSchema, 'details');

app.get('/products', async function(req, res) {
    const products = await Product.find({}, function(err, collection) {
        // console.log(collection);
    }).limit(5);

    try {
        res.json(products);
    } catch (error) {
        console.error(error);
    }
});


app.listen(port, function () {
    console.log('server started at ', port);
});

app.get('/', async (req, res, next) => {
    res.send('CORS enabled!')
})


//TODO server side POST 














 