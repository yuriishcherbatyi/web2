const path = require('path')

// встановлюємо express
const express = require('express')
const app = express()

// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname))

// налаштовуємо роботу із шаблонізаотором
app.set('views', path.join(__dirname, '/static/views'))
app.set('view engine', 'pug')

// налаштовуємо маршрутизацію
app.get('/', function (request, response) {
  response.render('pages/index', { title: 'Home' })
})
app.get('/stations', function (request, response) {
  response.render('pages/stations', { title: 'Stations' })
})
app.get('/planets', function (request, response) {
  response.render('pages/planets', { title: 'Planets' })
})
app.get('/cargoes', function (request, response) {
  response.render('pages/cargoes', { title: 'Cargoes' })
})

// запускаємо аплікацію
app.listen(process.env.PORT || 8080)