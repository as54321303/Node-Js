const fs=require('fs');
// const http=require('http');
// const data=require('./data');
// http.createServer((req,res)=>{
//      res.writeHead(200,{'Content-Type':'application/json'});
//      res.write(JSON.stringify(data));
//      res.end();
// }).listen(8000); 

const input=process.argv;

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove')
{
    fs.unlinkSync(input[3]);
}

else
{
    console.log('Invalid Input');
}
