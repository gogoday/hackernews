# AI Helper

Hacker News clone built with [Nuxt](https://nuxt.com).

<p align="center">
  <a href="https://hn.nuxt.dev" target="_blank">
    <img width="1090" src="https://github.com/nuxt/hackernews/assets/904724/9aa478bf-a43d-4222-8adf-a7a715d71e38">
    <br>
    Live Demo
  </a>


## Demo

https://hn.nuxt.dev

> Hosted on Cloudflare Pages with [NuxtHub](https://hub.nuxt.com): `npm run build`

## Performance

- Lighthouse [100/100](https://pagespeed.web.dev/report?url=https%3A%2F%2Fhn.nuxt.dev%2Fnews%2F1) (Slow 4G / Mobile Moto G4)

## Features

- Server Side Rendering
- Vite-based hot module replacement (HMR) dev environment
- Deploys anywhere with zero config (Vercel, Netlify, Cloudflare, etc.) powered by [Nitro](https://nitro.unjs.io)
- Code Splitting
- Prefetch/Preload JS + DNS + Data

## Build Setup

**Requires Node.js 14+**

``` bash
# install dependencies
npm install # or yarn

# serve in dev mode, with hot reload at localhost:3000
npm run dev

# build for production (server-side rendering)
npm run build

# serve in production mode (server-side rendering)
npm start

# validate and fix with ESLint (with Prettier)
npm run lintfix
```

## Links

For the Nuxt 2 version, check out the [`nuxt2` branch](https://github.com/nuxt/hackernews/tree/nuxt2)

## License

MIT

## Credits

This repository is originally ported from [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## Mysql
[node-mysql2 文档](https://sidorares.github.io/node-mysql2/docs)   
[mysqljs 文档](https://github.com/mysqljs/mysql?tab=readme-ov-file#connection-options)

## Server
[Nitro 文档](https://nitro.unjs.io/guide)   
[h3 文档](https://h3.unjs.io/guide/app)

## Degug
Run and Debug 面板运行：server: nuxt   
[debug 文档](https://nuxt.com/docs/guide/going-further/debugging#debugging-with-node-inspector)