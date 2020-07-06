const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

// L7-8 is already done internally by express but we explicitly declare server as that is expected by socket.io
const app = express()
const server = http.createServer(app)

const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
  console.log('New web socket connection')

  // emit the updated count to any new connection/join
  socket.emit('message', 'Welcome!')
  socket.broadcast.emit('message', 'A new user has joined!')

  socket.on('message', (message) => {
    io.emit('message', message)
  })

  socket.on('sendLocation', (coords) => {
    // emit update to every single connection
    const locationLink = `https://google.com/maps?q=${coords.lat},${coords.lng}`
    io.emit('sendLocation', locationLink)
  })

  socket.on('disconnect', () => {
    io.emit('message', 'A user has left')
  })
})

server.listen(port, () => {
  console.log("Server is up and running " + port)
})
