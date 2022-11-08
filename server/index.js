const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const cors = require('./middleware/cors.middleware');
const PORT = process.env.port || 5000;
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.shveeu7.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => console.log(`server strted on port ${PORT}`));
  } catch(e) {
    console.log(e);
  }
}

start();