const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const StudentRoutes = require('./routes/StudentRoutes')


const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.CONNECTION)
.then(()=> console.log('database connected'))
app.listen(process.env.PORT, () => console.log('app running'))
app.use('/', StudentRoutes)


