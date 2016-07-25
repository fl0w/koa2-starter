'use strict'

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  // next is now a callable function
  await next()
})

app.use(async (ctx, next) => {
  ctx.body = `I'm in your ES6 with babelified async/await`
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
