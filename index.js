const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/X',(req,res)=>{
    res.send('<h1>hello jee</h1>')
})
app.get('/P',(req,res)=>{
    res.send('<h1>chai aur code</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
