const express = require('express');
//for http req and res
const morgan = require('morgan');
// to use path.join for directory tree compatible for win and linux
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks', require('./routes/task.routes'));

//static files
// console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

const myPort = app.get('port');
app.listen(myPort, () =>{
  console.log(`Puerto ${myPort}`);
})