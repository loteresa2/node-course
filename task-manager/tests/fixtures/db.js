const User = require('../../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@example.com',
  password: 'whatifme'
}

const setupDatabase = async ()  => {
  await User.deleteMany()
  await new User(userOne).save()
}

module.exports = {
  userOne,
  setupDatabase
}