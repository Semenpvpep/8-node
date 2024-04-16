#!/usr/bin/env node

const { createServer } = require('node:http');

const port = 8080;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Server running`);
});
