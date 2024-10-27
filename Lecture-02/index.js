const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  //   if (req.url === "/favicon.ico") return res.end();
  const myurl = url.parse(req.url, true);
  const log = `${Date.now()} : ${myurl} new req received\n`;
  console.log(myurl);
  //   fs.appendFile("./log.txt", log, (err, data) => {
  res.end("hello from server");
  switch (myurl.pathname) {
    case "/":
      res.end("home page");
      break;
    case "/about":
      const username = myurl.query.myname;
      res.end(`hi, ${username}`);
      break;
    default:
      res.end("404 not found");
  }
  //   });
});

server.listen(5000, (req, res) => {
  console.log("server is healthy");
});
