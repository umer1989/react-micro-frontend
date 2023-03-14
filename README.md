# React micro-frontend example

Example of using React in host-remote micro-frontend pattern with Webpack Module Federation

## How to use

If you are using yarn then run the following commands in the root directory.

```bash
yarn
yarn start
```

If you are using npm then run the following commands.
Go to the respective directory 
below is the example for host module
```bash
cd host
npm install
npm start
```
*Do same step mentioned above for remote module.*



Then navigate to:

- `http://localhost:3001` for the host app
- `http://localhost:4000` for the remote app

## Host App

Pulls `<App/>` and `<Button />` from the remote app and renders them. Example:

```js
const RemoteApp = React.lazy(() => import("Remote/App"));
```

## Remote App

Exposes the modules in a `moduleEntry.js` file at `http://localhost:4000/moduleEntry.js`

`name: 'Remote'`

Exposes:

- `<App />`
- `<Button />`

## Notes

To make this a peer-to-peer pattern you could also expose modules from the Host app and render them in Remote by modifying the host app's webpack config to also expose components and output a `moduleEntry.js` file.
