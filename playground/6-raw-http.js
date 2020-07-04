const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=XXX3&query=37.8267,-122.4233&units=f"
const request = http.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
    console.log(chunk)
  })

  response.on('end', () => {
    console.log(JSON.parse(data))
  })
})

request.end()