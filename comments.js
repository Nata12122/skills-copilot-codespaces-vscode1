// Create web server

// Import required modules
var http = require('http');

// Configure HTTP server to listen on port 8080
var server = http.createServer(function (request, response) {
  // Set the response HTTP header with HTTP status and Content type
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  response.end('Hello World\n');
});

// Listen on port 8080, IP defaults to