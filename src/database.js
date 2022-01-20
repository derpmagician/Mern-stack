require('dotenv').config();
const mongoose = require('mongoose');

// 'mongodb://localhost/mern-tasks';
MONGO_U = process.env.MONGO_U;
MONGO_P = process.env.MONGO_P;
MONGO_C = process.env.MONGO_C;

const URI = `mongodb+srv://${MONGO_U}:${MONGO_P}@cluster0.upz5h.mongodb.net/${MONGO_C}`;

mongoose.connect(URI)
	.then(db => console.log("Conectado"))
	.catch(err => console.error(err));

module.exports = mongoose;