import express from 'express'
import consola from 'consola'
import { Nuxt, Builder } from 'nuxt'
const app = express()

//路由
import postRouter from './routers/post'
import schoolRouter from './routers/school'
import facultyRouter from './routers/faculty'
// Import and Set Nuxt.js options
import config from '../nuxt.config.js'
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  //注释路由
  app.use('/api/',postRouter)
  app.use('/api/school/',schoolRouter)
  app.use('/api/faculty/',facultyRouter)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
