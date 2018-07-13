const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.options('*', cors())

const dummyUser = [{
  _id: '12321321321',
  name: 'God_Pruek',
  password: 'password'
}, {
  _id: '123213222221',
  name: 'Pro_Pruek',
  password: 'password2'
}]

const dummyTasks = [{
  name: 'asdasd'
}]
app.get('/users', (req, res) => res.send(dummyUser))

app.get('/login', (req, res) => res.send({ success: 'login success'}))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(4000, () => console.log('server listening on port 4000'))
