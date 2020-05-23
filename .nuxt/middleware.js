const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['error_m'] = require('..\\middleware\\error_m.js')
middleware['error_m'] = middleware['error_m'].default || middleware['error_m']

export default middleware
