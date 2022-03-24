const fastify = require('fastify')()
const path = require('path')
const Kinguin = require('kinguin-api-es5');

const prod = false;
var kinguin = new Kinguin(prod);

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
  })

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
});

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
})

fastify.get('/list', function (req, reply) {
    return reply.view('/public/list.ejs')
})

fastify.get('/game/:gfnId', function (req, reply) {
  //kinguin.getProductIdWithSteam('1091500') //CyberPunk2077
  return reply.view('/public/list.ejs', {'gfnId' : req.params.gfnId})
})

// Run the server!
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
  console.log(`server listening on ${fastify.server.address().port}`);
})