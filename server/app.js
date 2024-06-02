//**建資料夾* */
//mkdir server
//cd server
//-----------
//npm init -y
//node app.js

//取得node.js的http模組
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.write("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000, () => {
  console.log("監聽port 3000");
});

//SERVER 3000
//CILENT 8080
//http://localhost:3000/
//request
//response
