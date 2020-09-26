//Creating our first server

const http = require('http');

http
  .createServer(function (req, res) {
    res.write('<h1>Welcome to my server 5</h1>'); //sending this response to the user
    res.end(); //End the res
  })
  .listen(5000);
