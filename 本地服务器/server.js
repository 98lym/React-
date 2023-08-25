const express = require('express')
const app = express()

app.use((request, response, next) => {
  console.log(request.get('Host')) // 服务器拿到的请求端口
  console.log(request.url); // 服务器拿到的网址
  next()
})

app.get('/books', (request, response, next) => {
  const books = [
    { id: '1', name: '三体' },
    { id: '2', name: '龙族' },
    { id: '3', name: '哈利波特' },
  ]
  response.send(books)
})

// 监听端口
const port = 7777
app.listen(port, (err) => {
  if (!err) console.log(`Server is running at http://localhost:${port}`)
})
