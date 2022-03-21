const express = require('express')
const app = express()
const http = require('http') 
const port = 3000

app.listen(port, () => {
    console.log(`mvp-backend listening at http://localhost:${port}`)
  })

app.get('/', (req, res) => {
    res.send('Hello World from MVP backend!')
  })


