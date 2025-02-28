const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoDBConnection = require('./db/mongoDBConnection.js');

dotenv.config();

const port = process.env.SERVER_PORT || 8000;

const userRoutes = require('./routes/userRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const subCategoryRoutes = require('./routes/subCategoryRoutes.js');

const path = require('path');

app.use(cors({
  credentials: true,
  origin: `${process.env.CLIENT_HOST_URL}`
}));


app.use(express.json()); // to parse the incoming requests with JSON
app.use(cookieParser());


//authentication routes
app.use('/api/users', userRoutes);


//category routes
app.use('/api/categories', categoryRoutes);


//Sub category routes
app.use('/api/category', subCategoryRoutes);





app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  await mongoDBConnection.connectToMongoDB();
  console.log(`Example app listening at http://localhost:${port}`);
});