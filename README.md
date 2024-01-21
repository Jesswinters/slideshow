# Simple Slideshow

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A simple slideshow using React, TypeScript, and react-slideshow-image.

This slideshow has the following features:
 - Works on desktop, tablets, and mobile (responsive).
 - Displays the images in the images folder.
 - Tracks how many times each slide picture is viewed (and is stored between refreshes in `localStorage` with the `Key`: `slideshowViewCounts`).

 I chose to use the following packages:
 - `react-slideshow-image` package because it's lightweight and easy to use.
 - React because it's easy to get apps up and running with it.
 - And TypeScript to ensure typechecking.

 Personally, I don't recommend slideshows/carousels as they are difficult to make accessible and don't convey useful information most of the time, especially when customers interact with them.
 
 For more information, check out this site: https://shouldiuseacarousel.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
