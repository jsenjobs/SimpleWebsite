
var express = require('express')

var PORT = 8888

var app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello jsen\n')
})

app.listen(PORT)

console.log('Server running on http://localhost:' + PORT)