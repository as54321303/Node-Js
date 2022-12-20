const express=require('express');

const app=express();

app.get('',(req,res)=>{
      res.send('Welcome, This is Home Page!');
})

app.get('/about',(req,res)=>{
      res.send('Welcome, This is About Us Page!');
})

app.get('/help',(req,res)=>{
      res.send('Welcome, This is Help Page!');
})

app.listen(8000)