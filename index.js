const express = require('express');
const request = require('request');
const querystring = require('querystring');

const app = express();

app.get(/^\/given-a-possibly-shortened-url-show-a-lengthened-form-of-it\/(.+)/, (req, resp) => {
  const target = req.params[0];
  request(target, (error, response, body) => {
    resp.send(
      req.protocol +
      '://' +
      req.headers.host +
      '/redirect-to/' +
      response.request.uri.href
    );
  });
});

app.get(/^\/redirect-to\/(.+)/, (req, resp) => {
  const base = req.params[0];
  const query = querystring.stringify(req.query);
  const target = [base, query]
    .filter(string => string)
    .join('?');
  resp.redirect(target);
});

app.listen(3000);
