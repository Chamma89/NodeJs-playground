var http = require('http')
var fs = require('fs')
var app = require('./app')

// function onRquest(request, response){
//   response.writeHead(200, {'Content-Type': 'text/html'})
//   fs.readFile('./index.html', null, function(error, data){
//     if(error){
//       response.writeHead(404)
//       response.write('File Not Found')
//     }

//     else {
//       response.write(data)
//     }
//     response.end()
//   })
// }

http.createServer(app.handleRequest).listen(2000)