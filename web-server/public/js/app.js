let fetchWeather = ((location) => {
  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageTwo.textContent = data.error
        messageOne.textContent = ''
      } else {
        messageOne.textContent = data.address + ' temparature is ' + data.temparature
        messageTwo.textContent = ''
      }
    })
  })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) =>  {
  event.preventDefault()
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  const location = search.value
  fetchWeather(location)
})