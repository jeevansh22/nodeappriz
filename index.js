const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(bodyParser.json());

connectDB();

app.use('/api', itemRoutes);

const PORT =  5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
