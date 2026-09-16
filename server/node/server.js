const http=require("http");

http.createServer((req,res)=>{
res.end("server is running");
}).listen(5000);