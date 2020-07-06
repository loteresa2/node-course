const socket = io()

socket.on('message', (message) => {
  console.log(message)
})

socket.on('sendMessage', (message) => {
  console.log(message)
})

document.querySelector('#myForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = document.querySelector('#message').value
  socket.emit('sendMessage', text)
})