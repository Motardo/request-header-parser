const express = require('express');
const useragent = require('useragent');

const app = express();

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/whoami', (req, res) => {
  'use strict';
  let headers = {};
  let agent = useragent.parse(req.get('user-agent'));
  headers.ip = req.ip;
  headers.language = req.get('accept-language');
  headers.os = agent.os.family;
  res.status(200).send(headers);
});

app.listen(process.env.PORT || process.argv[2]);
