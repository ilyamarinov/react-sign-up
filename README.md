# Simple registration form

This is a simple project which is basically a registration form. The general idea is to see your code structure, code quality, and approach in general.

## Getting started

- Run `npm i && npm i -g json-server`
- Run `npm run dev` to start a client development server. By default available at `0.0.0.0:3001`
- Run `node server/app.js` to start a backend server. By default available at `0.0.0.0:3002`
- [Get a mockup](zpl.io/adzK17p). If you don't have access, please write a mail to artem@24slides.com
- If you want to make a build, run `npm run build`

## Requirements

- Create a markup of the page using SASS
- Create React application that simply registers a user
- The form should have validation. Users should be registered via server through the endpoint **POST 0.0.0.0:3002/register**
- Countries should be grabbed from **GET 0.0.0.0:3002/countries**
- The country code select should work in the following way:
    - Display the primary countries first (Denmark, UK, US)
    - Add shortcuts https://www.ncbi.nlm.nih.gov/books/NBK7249/, but you should not display them, only use for search. If there is a country like Ukraine starting from UK (shortcut for The United Kingdom), then you need to display the shortcut country first, then the country found by its name second
    - If a user enters a country and we don't have any match for it you should display it on droplist like just text "No match found"
    - Users should be able to search for country code by typing numbers
    - If a user types only 1-2 character - filter by first character only, starting only from the beginning of the country name or abbreviation
    - If a user types 3 and more characters - filter by a combination but only from the beginning of a word (So let's say I'm filtering by "Aru" combination and I should see Aruba, but NOT see BelARUs)

That's it. Enjoy :)