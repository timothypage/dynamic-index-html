'use strict';

module.exports.hello = async event => {
  const input = JSON.stringify(
    {
      message: 'Go Serverless v3.0! Your function executed successfully!',
      input: event
    },
    null,
    2
  );

  const body = `<!doctype html><html><!-- ${input} --><body><h1>Hello World!</h1><p>from AWS Lambda</p><p>Your path was ${event.rawPath}</p><p>Your query string was ${event.rawQueryString}</html>`;

  const headers = {
    'Cache-Control': 'max-age=0',
    'Content-Type': 'text/html'
  };

  return {
    statusCode: 200,
    headers,
    body
  };
};
