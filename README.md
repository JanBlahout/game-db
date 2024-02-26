# GAME Databse project


# Make this work

- Go to https://rawg.io/ and create a new account
- Get the API key.
- Create .env file in the root directory.
- Enter following line VITE_API_KEY=your_api_key

```
npm install
npm run dev
```

# What I learned

This project was quite handful and there is still many thigns to do.

I learned how to use infiniteQuery to fetch data on scroll. Create responsive grid design and navigation bar (working on mobile too).

Search Bar is now working, it is displaying 20 top results. The input is debounced and needs atleast 3 characters to be triggered. Clicking outside of the result container will close the container and reset the search string.


# LIVE PAGE

https://soft-zabaione-0ef98f.netlify.app

## Improvement ideas

- refactor the code
- create folder for types
- delete unused code
- Provide links in the navigation
- Improve overall styling with tailwind
- Simplify some components - GamesByTag and GamesByGenre are almost identical except the function it is using.
