import http from 'node:http'

//criar um usuario  (nome, email, senha)

const server = http.createServer((req, res) =>(
  return res.end("Hello Word")
))

server.listen(3333)

//localhost:3333

