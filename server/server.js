require('dotenv').config()

const express = require('express')
const app = express()

let port = process.env.PORT || 3000

app.use(express.json())

app.get('/test', (req, res) => {
    console.log('basic server up running')
    res.json({response: "basic server up"})
})

app.listen(port, () => console.log(`API Server running on port ${port}`))