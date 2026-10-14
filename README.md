# w3f_web_boilerplate

A minimal starter for a React + Express app in TypeScript with server-side
rendering, set up by hand with webpack (no Next.js, no CRA).

## What's inside

- **Express server** (`backend/server.ts`, port 9000), run through nodemon +
  ts-node so it restarts on changes to `.ts`, `.tsx`, `.js`, `.json` and `.html`.
- **Server-side rendering** — every `GET /*` renders the app with
  `ReactDOMServer.renderToString` inside a `StaticRouter`, collects
  styled-components styles with `ServerStyleSheet` and injects both into
  `frontend/index.html`. On startup the server bundles `backend/ssr_client.ts`
  with webpack, which hydrates the page in the browser (`hydrateRoot`).
- **webpack-dev-server** (port 9001) with hot module replacement for
  client-only development (`frontend/client.ts`, `createRoot`).
- **React 18** function components, **React Router 6** (`/`, `/child`, `/lazy_child`).
- **Redux Toolkit** store with redux-thunk and a sample reducer.
- **styled-components** with SSR style extraction.
- `React.lazy` + `Suspense` sample and vendor chunk splitting in the server
  webpack config.
- `dotenv` is loaded on startup (no variables are used yet — ports are hard-coded).
- `GET /json` — a sample JSON endpoint (`{ "message": "OK" }`).

There is no database, GraphQL, Docker or test setup, and no production build
script yet — everything runs in webpack's development mode.

## Use this template

1. On GitHub, click **Use this template → Create a new repository**, or:

   ```bash
   gh repo create my-app --private --template megarohas/w3f_web_boilerplate --clone
   ```

2. Install and start (Node 16+):

   ```bash
   cd my-app
   yarn install
   yarn start
   ```

   - http://localhost:9000 — Express with server-side rendering
   - http://localhost:9001 — webpack-dev-server with HMR

## Scripts

| Script | What it runs |
| --- | --- |
| `start` | Backend (nodemon) + webpack-dev-server |
| `start_backend` | Backend only, with a 500 ms restart delay |
| `short_start` | Backend only, no delay |
| `start_frontend` | webpack in watch mode (client bundle to `dist/`) |
| `start_backend_frontend` | Backend + webpack in watch mode |
| `start_backend_frontend_webpackdevserver` | Backend + webpack watch + webpack-dev-server |

`./start.sh` kills whatever listens on ports 9000 and 9001, clears `dist/`
and runs `yarn start`.

## Project structure

```
backend/
  server.ts                 Express server, SSR, static files from public/ and dist/
  ssr_client.ts             browser entry that hydrates the SSR markup
frontend/
  index.html                HTML template (root element + styles placeholder)
  client.ts                 browser entry for webpack-dev-server
  app.tsx                   routes, Redux store, layout
  app_child.tsx             sample component reading the store
  app_styles.ts             styled-components
  reducer.ts                sample reducer
webpack.config.js           client / dev-server config
server.webpack.config.js    SSR hydration bundle (app.js + vendors.js)
nodemon.json, tsconfig.json
```

## Context

Built in August 2022 as a personal starting point for new projects.

## License

MIT (as declared in `package.json`).
