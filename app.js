const express = require('express')
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 4000
const app = express()

// Setting public folder
app.use(express.static(path.join(__dirname, 'public')))

// Using Cors Middleware
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/true-api', (req, res) => {
  res.status(200).json({ message: "ok" })
})

app.get('/delay/:time', (req, res) => {
  setTimeout(() => {
    res.status(200).json({ message: "ok" })    
  }, req.params.time);
})

// 404
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' })
})

// Listening to port
app.listen(PORT, () => {
  console.log('serving on localhost:' + PORT)
})