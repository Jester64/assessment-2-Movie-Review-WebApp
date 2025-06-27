<h1/>🍃 Minty Yard – Movie Web App</h1>

This is a responsive React web application designed with a multi-page layout using React Router. It communicates with a QUT-hosted movie database API to allow user registration, login, token refresh, and data retrieval for movies and actors.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<h2/>📦 Setup Instructions</h2>

<h3/>1. Install PHP (Optional – for backend API testing)</h3>

This project communicates with a pre-hosted backend at:

http://sefdb02.qut.edu.au:3000

No local PHP setup is required unless mocking the backend.
<h3/>2. Install Laravel (Optional)</h3>

Only needed if you intend to recreate or modify the backend. This project consumes the API but does not include a Laravel backend.
<h3/>3. Add API Keys / Environment Variables</h3>

Currently, the app uses a hardcoded API endpoint. If using a .env file in future versions:

REACT_APP_API_URL=http://sefdb02.qut.edu.au:3000

<h3/>4. Install Dependencies</h3>

Ensure Node.js is installed, then run:

npm install

<h3/>5. Run the Web Server</h3>

Use the following command to start the development server:

npm run dev

Or if using react-scripts:

npm start

<h3/>6. View in Browser</h3>

Visit the local server URL (usually):

http://127.0.0.1:5173/

or

http://localhost:3000/

<h2/>🧭 Project Structure</h2>

public/
  
  img/
  
  favicon.ico
  
  index.html
  
  ...

src/
  
  components/
  
  Footer.jsx      # Footer with copyright
  
  Header.jsx      # Includes logo and Nav
  
  Nav.jsx         # Nav links with React Router

  pages/
    
  Home.jsx        # Main functionality: Register, Login, Token Refresh, Movie search
    
  Menu.jsx        # Placeholder
    
  Book.jsx        # Placeholder
    
  About.jsx       # Placeholder

  App.js            # Router and layout structure
  
  App.css           # Main styling file
  
  index.js          # ReactDOM render point

<h2/>🎨 Design Choices</h2>

  Routing: React Router is used for navigation (BrowserRouter, Route, Link).

  Component-Based UI: Clear separation between UI components (Header, Footer, Nav) and page content (Home, Menu, etc.).

  API Integration: Uses fetch() to interact with QUT movie API for login, registration, token refresh, actor/movie search.

  Tokens in localStorage: JWTs are stored for authentication and authorization.

  Styling:

  Responsive layout using CSS media queries.

  Sticky nav aligned right; visually appealing header/footer.

  Clean font and layout reset for cross-browser consistency.

<h2/>🧪 Testing</h2>

Basic unit test in App.test.js using @testing-library/react.

Run tests with:

npm test

<h2/>🚀 Future Improvements</h2>

Add proper user input fields (email/password) instead of hardcoding.

Display fetched data (e.g., movie results, actor info) in components.

Improve accessibility and responsive layout.

Form validation for login/register.

Authentication-aware navigation (e.g., show "Logout" only when logged in).

<h2/>📄 License</h2>

This project is for educational purposes (QUT assignment/project) and not licensed for production use.

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
