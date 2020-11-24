[![Maintainability](https://api.codeclimate.com/v1/badges/62c3fd1b4357e699c74c/maintainability)](https://codeclimate.com/github/effectussoftware/pis-effectus-dashboard/maintainability)

![ESLint](https://github.com/effectussoftware/pis-effectus-dashboard/workflows/ESLint/badge.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## pis-effectus-dashboard

This project uses [react-admin](https://marmelab.com/react-admin). Most of the uses cases are taken directly from examples in the [documentation](https://marmelab.com/react-admin/Readme.html).

### Folder structure (src)

- `components`:
  - `common`: Common components that are generic and reusable.
  - `App`: App component.
  - Folders for the components used in each resource.
- `constants`: Global constants. Mostly auth related.
- `react-admin`: Files directly related to the `react-admin` library. Most notably the `authProvider` and the `dataProvider`
- `styles`: CSS files used in global styles.
- `utils`: Helper functions.
- `index.js`: Entry point.

### Environmental variables:

- `REACT_APP_CLIENT_ID`: Google auth client id, required for the google login.
- `REACT_APP_API_URL`: Backend url, including protocol and no `/` at the end.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

## Deployment

The github repo has continuos deployment to netlify configured.
Master branch deploys to: https://pis-effectus.netlify.app/
Staging branch deploys to https://pis-effectus-staging.netlify.app

## Learn more about create-react-app

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
