const socket = io()

socket.on('message', (message) => {
  console.log(message)
})

socket.on('sendMessage', (message) => {
  console.log(message)
})

socket.on('sendLocation', (message) => {
  console.log(message)
})

document.querySelector('#myForm').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = document.querySelector('#message').value
  socket.emit('sendMessage', text)
})

document.querySelector('#send-location').addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser')
  }
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('sendLocation', { lng: position.coords.longitude, lat: position.coords.latitude })
  })
  
})