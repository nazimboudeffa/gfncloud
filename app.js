const fastify = require('fastify')()
const path = require('path')
const kinguin = require('kinguin-api-es5');

const prod = true;
var k = new kinguin(prod);

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
  })

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.get('/list', function (req, reply) {
    k.getProductIdWithSteam('1091500') //CyberPunk2077
    return reply.sendFile('list.html')
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})