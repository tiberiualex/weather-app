## Weather app

Weather app using the OpenWeather API. To run the app, get an API key from OpenWeather, then create a `.env.local` file with the API key:

```
OPENWEATHER_API_KEY=YOUR_KEY_HERE
```

Then run the app:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000)

For a production build:

```bash
npm run build
# or
yarn build
```

The app is based on a Sitepoint tutorial, but it has some changes over the original:

- Added TypeScript
- Added SWR for making requests
- Added server rendered defaults
- Refactored a few of the components

### Todo

- Add tests
- Improve accessibility
