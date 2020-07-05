const app = require('./app')
const port = port.env.PORT 

app.listen(port, () => {
  console.log("Server is up and running " + port)
})
