const express = require('express');
const { PORT, HOST } = require('./config');
const cors = require('cors');
const app = express();
const sse = require('sse-nodejs');
const path = require('path');

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../static/')))
app.get('/sse', (req, res) => {
    var s = sse(res);
    s.sendEvent('time', function () {     
        return (new Date).getTime();
    },1000);

    s.disconnect( () => {
        console.log("disconnected");
    });

});



app.listen(PORT, HOST, () => console.log(`Server runing on port ${PORT}`));
