# React testing problem

Tasks completed:

- Created a story in the Storybook for the App component.
- Added a button to the default page in App.js, labeled "click me".
- Added a handler that changes the text in the button to "thanks" when clicked once, and back to "click me" if clicked again.
- Imported the Storybook story to create a test of the button in App.test.js.
  - Wrote a test to check that the button initially displays "click me".
  - Wrote a test to check that clicking the button changes its text to "thanks".
  
## Installing packages
`npm install`


## Available Scripts

In the project directory, you can run:

### `npm run storybook`
Starts the storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in your browser.


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Note: if you're using the provided docker containers above, you should run your tests in the `test-problem-storybook` container.
