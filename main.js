const path = require('path');
const express = require('express');
const app = express();
const port = 80
const winston = require("winston");
var requestIp = require('request-ip');
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (request, response) => {
  var clientIp = requestIp.getClientIp(request);
  console.log(clientIp);
  response.sendFile(`${__dirname}/public/index.html`);
});
app.listen(port, () => {
    console.log(`Application listening on port ${port}`);
});

