const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const path = require('path');

require('dotenv').config({ path: './config/.env' });
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//route imports
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));
//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//server start
connectDB();
app.listen(process.env.PORT || 4000, () => {
  console.log('Fridge running');
});
