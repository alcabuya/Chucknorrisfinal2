const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
//we are configuring dist to serve site files
app.use(express.static('public'))
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, './public', 'Apr29Home.html'))
})
const port = process.env.PORT || 8080
app.listen(port)
console.log(`site is listening on port: ${port}`)
