const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const { connection } = mongoose;
connection.once('open', () => {
	console.log('mongoDB database connection established successfully');
});

const memberRouter = require('./routes/member');

app.use('/member', memberRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
