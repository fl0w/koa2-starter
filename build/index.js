'use strict';

var _bluebird = require('bluebird');

const Koa = require('koa');
const app = new Koa();

app.use((() => {
  var _ref = (0, _bluebird.coroutine)(function* (ctx, next) {
    // next is now a callable function
    yield next();
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

app.use((() => {
  var _ref2 = (0, _bluebird.coroutine)(function* (ctx, next) {
    ctx.body = `I'm in your ES6 with babelified async/await`;
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

app.listen(3000, () => {
  console.log('listening on port 3000');
});