const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoDBConnection = require('./db/mongoDBConnection.js');
const globalExceptionHandlerMiddleware = require('./middleware/globalExceptionHandlerMiddleware.js');

dotenv.config();

const port = process.env.SERVER_PORT || 8000;

const userRoutes = require('./routes/userRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const subCategoryRoutes = require('./routes/subCategoryRoutes.js');
const productController = require('./routes/productRoutes.js');
const fileRoutes = require('./routes/fileRoutes.js');
const webRoutes = require('./routes/webRoutes.js');

const path = require('path');

app.use('/' + process.env.FILE_PUBLIC_PATH, express.static(__dirname + '/' + process.env.FILE_PATH));

app.use(cors({
  credentials: true,
  origin: `${process.env.CLIENT_HOST_URL}`
}));


app.use(globalExceptionHandlerMiddleware.handleExceptions);
app.use(express.json()); // to parse the incoming requests with JSON
app.use(cookieParser());


//authentication routes
app.use('/api/users', userRoutes);
//category routes
app.use('/api/categories', categoryRoutes);
//Sub category routes
app.use('/api/category', subCategoryRoutes);
// Product Controller Routes
app.use('/api/products', productController);
// Files Controller Routes
app.use('/api/files', fileRoutes);
// Web Routes
app.use(express.static(path.join(__dirname, './web/build')));
app.use(webRoutes);

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../dosweb/build/index.html'));
//   });







app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, async () => {
  await mongoDBConnection.connectToMongoDB();
  console.log(`Example app listening at http://localhost:${port}`);
});