const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=XXX&query=37.8267,-122.4233&units=f"
request({url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service')
    return
  }
  console.log(response.body.current)
  const current = response.body.current
  console.log(response.body.current.weather_descriptions[0] + `. It is currently ${current.temperature} but it feels like ${current.feelslike}`)
})