import http from 'node:http'

//criar um usuario  (nome, email, senha)


const server = http.createServer((req, res) => {
    const {method,url} = req

    if(url == "/user" && method == "GET" ){
        return res.end("Buscar usuarios")
    }
    if (url == "/user" && method == "POST"){
        return res.end("Criar usuario")
    }
  return res.end("Hello Wolds")
}
)

server.listen(3333)

//localhost:3333

