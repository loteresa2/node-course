const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
// set views path if its not the default
app.set('views', viewsPath)
// set the partials path
hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Teresa'
  })
})

// Setup static directory to serve
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Teresa'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Need help',
    name: 'Teresa'
  })
})

app.use(express.static(publicDir))

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide an address'
    })
  } else {
    res.send( {
      address: req.query.address,
      temparature: (Math.random() * 100).toFixed(2)
    })
  }
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  } else {
    res.send( {
      product: []
    })
  }
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Teresa',
    errorMessage: 'Help article not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Teresa',
    errorMessage: 'Page not found'
  })
})

app.listen(port, () => {
  console.log('Server is up on port '+ port)
})
