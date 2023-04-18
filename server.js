var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(port, () =>{
   console.log(`server is running on ${port}`)
})

app.get('/class', function (req, res) {
   res.send('Hello Class');
})
