const express = require('express');
const { PORT, HOST } = require('./config');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../static/')))

app.get('/env', (req, res) => res.json(process.env));
app.listen(PORT, HOST, () => console.log(`Server runing on port ${PORT}`));
