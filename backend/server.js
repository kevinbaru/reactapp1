const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const dbRoutes = require('./routes/databaseAccess.js');
const bodyParser=require('body-parser');
const connect = process.env.MONGODB_URI;
const mongoose=require ('mongoose');
mongoose.connect(connect);

// This line makes the build folder publicly available.
app.use(express.static('build'));
app.use(bodyParser.json());
app.use('/db', dbRoutes);

app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
