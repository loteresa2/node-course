const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
  name: 'Mike',
  email: 'mike@example.com',
  password: 'whatifme'
}
beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Should signup a new user', async() => {
  const response = await request(app).post('/users').send({
    name: 'Nancy',
    email: 'abc@example.com',
    password: 'temporary'
  }).expect(201)
  // assert that the database was changed correctly
  const user = await User.findById(response.body._id)
  expect(user).not.toBeNull()
})

test('Should update valid user fields', async() => {
  const query = { name: 'Mike' }
  const user = await User.findOneAndUpdate(query, { name: 'Tess'}, { new: true })
  expect(user.name).toEqual('Tess')
})