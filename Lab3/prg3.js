import http from "http";

const server= http.createServer((req,res)=>{

res.end("<h1>Welcome to server</h1>");

});

const PORT= 5000;
server.listen(PORT,()=>{
    console.log("Server is running on http://localhost:"+PORT);
});

