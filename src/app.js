const path = require('path')
const express = require('express')
const hbs = require('hbs')

const publicDirectory = path.join(__dirname,'../public')    
const viewsPath = path.join(__dirname, '../templates/views')    
const partialviewsPath = path.join(__dirname,'../templates/partialviews')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(publicDirectory));   
app.set('view engine', 'hbs');             
app.set('views',viewsPath);
hbs.registerPartials(partialviewsPath)


app.get('',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(port,()=>{
    console.log('server instantiated on port '+port)
})

