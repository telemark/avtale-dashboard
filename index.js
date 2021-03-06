const css = require('sheetify')
const choo = require('choo')
const persist = require('choo-persist')

css('tachyons')

const app = choo()

app.use(persist({ name: 'avtale-dashboard-persist' }))

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/agreements'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
