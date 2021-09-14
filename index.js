const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

require('dotenv').config({ path: './config/.env' });
//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//route imports
app.use('/api', require('./routes/api'));
app.use('/auth', require('./routes/auth'));
//server start
connectDB();
app.listen(process.env.PORT || 4000, () => {
  console.log('Fridge running');
});
