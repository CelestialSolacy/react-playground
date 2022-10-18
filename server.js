const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('ARE')
  res.send('Hi')
})

console.log('Holis')