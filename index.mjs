// console.log("Hello World");

import express from 'express';
const app = express()
const PORT = process.env.port || 3000

app.get('/', (req, res) => {
    console.log('Hello World!' , new Date())
  res.send('Hello World!' + new Date())
})

app.get('/profile', (req, res) => {
    console.log('this is a profile!' , new Date())
  res.send('this is a profile!' + new Date())
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
