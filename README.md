# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

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
