const express = require('express')
const mongoose = require ('mongoose')
const { PORT, mongoUri } = require ('./config')
const cors = require ('cors')
// const morgan = require ('morgan')
const bodyParser = require('body-parser')
const bucketListItemRoutes = require('./routes/api/bucketLIstItems')

const app = express()
app.use(cors())
// app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
     .connect(mongoUri)
     .then(() =>console.log('MongoDB is connected...'))
     .catch((err) =>console.log(err))

app.use('./api/bucketListItems',bucketListItemRoutes )

app.get('/', (req,res) => res.send('Hello World'));

app.listen(PORT, () => console.log(`App listening at port:${PORT}`))
