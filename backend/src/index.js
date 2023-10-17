const express = require("express")
const dotenv = require('dotenv')
const { default: mongoose } = require("mongoose")
dotenv.config()


const app = express()
const port = process.env.PORT || 3001


app.get('/', (req, res) => {
    res.send('hello world')
})
mongoose.connect(`${process.env.MONGO_DB}`)
    .then(() => {
        console.log('success connect');
    })
    .catch((err) => {
        console.log(err);
    })
app.listen(port, () => {
    console.log('Server is running in port:', +port);
})