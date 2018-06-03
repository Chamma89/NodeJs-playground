var http = require('http')

function onRquest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Hello World!')
  response.end()
}

http.createServer(onRquest).listen(2000)