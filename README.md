# Dusk Dawn

Dusk dawn is an application that allowing users to input longitude and latitude. The app then makes a call to [An astronomy API](https://ipgeolocation.io/documentation/astronomy-api.html) to fetch the sunrise and sunset times for that location.

## Requirements

- User is not shown results until 5 locations have been entered
- User can only input a numbers into the latitude and longitude inputs
- User cannot submit until both latitude and longitude have been entered into the given inputs.

## Usage

- Clone the repository
- Go to [The API documentation](https://ipgeolocation.io/documentation/astronomy-api.html) and follow the Sign Up directions to generate an API key
- Once the key has been generated, go to the root of the project and run:

```
touch .env
```

- Go into the .env folder and create the variable:

```
REACT_APP_IPGEOLOCATION_API_KEY=<your_api_key>
```

- Be sure to add your .env file to the .gitignore.

- Run:

```
npm install
```

- Run:

```
npm run start
```

- Now you should be able to access the application on localhost

## Desired Enhancements

#### The following are some enhancements I would add if given more time:

- Create a config that handles how many locations must be entered before showing the results. As it is now, the limit of 5 is hard coded into the project. I would like to see this driven by a configuration file that allows for more Configurability. For example the endpoint we call to fetch data.

- Once results are displayed, the ability to edit a single result to add a different location.

- I had a vision of making more generic components, state management, and data fetching/handling. This opens the door to an application that has a data driven UI and shows whatever it's handed as opposed to being strictly built for taking in a location and displaying sunrise/sunset times. This is something that could be informed by the config file.

- Add more tests. Due to time constraints, I did not get the chance to test as thoroughly as I had hoped.

- Error handling. Again, due to time constraints I did not implement error handling as I had hoped. The application needs an ErrorBoundary component to inform the user of any issues as well as to prevent the app from unmounting in the event of an error. Ideally, this would present the user with an option to either re-renter the failing value, or refresh and start over.
