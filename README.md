# webpack-tsx-mobx-demo
## built with webpack-typescript-react bolierplate


> Node use CJS(CommonJS) to bundle modules

That's because [node uses CJS module format](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/).

- [x] CJS Module Format 
- [ ] AMD Module Format
- [ ] UMD Module Format
- [X] ESM Module Format

> About [Module Format](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

### CJS Module Format 
- import module synchronously
- import from a lib `node_modules` or local dir
- give you a copy of the imported object
- not work in the browser
- made for backend

### AMD Module Format
- import modules asynchronously
- syntax not intuitive
- made for frontend

### UMD Module Format
- configure several module systems
- used as a fallback module when using bundler lick Rollup/Webpack
- work on front and back end

### ESM Module Format
- work in [many modern browsers](https://caniuse.com/#feat=es6-module)
- CJS-like simple syntax
- AMD-like async
- [Tree-shakeable](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/), due to [ES6`s static module structure](https://exploringjs.com/es6/ch_modules.html#static-module-structure)
- allow bundlers like Rollup to [remove unnecessary code](https://dev.to/bennypowers/you-should-be-using-esm-kn3)
- can be called in HTML

> About tree shaking

A form of dead code elimination. The term was popularized by Rollup.

For example, configure webpack to "shake" off exports from ES6 modules that weren't explicitly imported, making those production builds smaller.

In [`.babelrc`](https://babeljs.io/docs/en/babel-preset-env#modules-auto), setting `module` to false will preserve ES modules. Use this only if you intend to ship native ES Modules to browsers. If you are using a bundler with Babel, the default modules: "auto" is always preferred.






