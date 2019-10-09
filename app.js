const Koa = require('koa')
const Router = require('koa-router')
const render = require('koa-ejs')
const path = require('path')

const app = new Koa()
const router = new Router()

const port = 5000

// 洋葱模型
// First
// Second
// Second Done
// First Done


// app.use(async(ctx, next) => {
//   console.log('First')
//   await next()
//   console.log('First Done')
// })

// app.use(async(ctx, next) => {
//   console.log('Second')
//   await next()
//   console.log('Second Done')
// })

// app.use(async(ctx) => (ctx.body = 'Hello Zhang!'))

render(app, {
  root: path.join(__dirname, "views"),
  layout: "template",
  viewExt: "html",
  cache: false,
  debug: false,
  async: true,
})

const users = [
  'zhangsan',
  'lisi',
  'wanger',
  'mazi',
]

router.get('/users', async (ctx) => {
  await ctx.render('index', {
    users: users,
  })
})

router.get('/zhang', (ctx) => {
  ctx.body = {
    name: 'zhangsan',
  }
})

router.get('/zhang/:id', (ctx) => {
  ctx.body = ctx.params
})

router.post('/zhang/:id', (ctx) => {
  ctx.body = ctx.request.req
  return (ctx.status = 201)
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () => {
  console.log(`app running port ${port}`)
})