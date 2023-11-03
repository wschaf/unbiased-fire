# Unbiased Fire - A User Interface built on React

## Summary

This project contains the code that makes up the Unbiased Fire project. Unbiased Fire is a codename since I don't really know what I'm going to use this for.

## Development

### Style

This project conforms to the standards in the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).

TODO: Add ESLint and style checking.

### Setup
1. Install [NodeJS](https://nodejs.org/en) and [NPM](https://www.npmjs.com/):
```
sudo apt-get install nodejs npm
```
2. Install [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) - this is so that we can use multiple versions of Node in the same environment:
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
3. Set NVM's active Node version:
```
nvm install v20.9.0
nvm alias default v20.9.0
```
3. The app was bootstrapped using [Create React App](https://github.com/facebook/create-react-app):
```
npx create-react-app unbiased-fire
```

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)