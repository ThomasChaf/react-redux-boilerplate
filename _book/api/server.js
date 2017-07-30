var express    = require('express')
var app        = express()
var cors       = require('cors');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())

var port = process.env.PORT || 3001

var router = express.Router()

router.get('/action_1', function(req, res) {
  res.json({ message: 'Success' })
})

router.post('/action_2', function(req, res) {
  res.json({ message: 'Success' })
})

app.use('/api', router)
app.listen(port)
console.log('Api running on port ' + port)
