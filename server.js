const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')

const app=express()




// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(__dirname + '/Images'))


// routers
const userdaak = require('./routes/daakRoutes.js')

app.use('/daak',userdaak)






// testing
app.get('/',(req,res)=>{
    res.json({ message:'Success'})
})


const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})