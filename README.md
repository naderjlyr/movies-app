# Assignment - simple movie app

I deployed the application on firebase.
[Demo](https://movie-73f83.web.app).

## Data

- [x] The Data is being fetched as requested from themoviedb api.

## Functionality (All the main functionalities are covered)

- [x] A search field and like a table for showing the result.
- [x] It should also have functionality for setting movies as your favourites, maybe with a star symbol in the table.
- [x] A list where you can add movies you want to watch, like the “watch later” functionality on YouTube.
- [x] The App Must Be working on desktop as well as mobile.
- [x] Last but definitely NOT least, please include a Demo for us to see.

### Optional features

- [x] Posters and trailers are always nice, this is however up to you.(Optional)

## Requirements & Instruction

## 1. RTK Query for API calls.

Among so many options for creating services for API calls, I personally use "Redux Toolkit Query" or in some cases, Redux Toolkit with Thunk Actions.
of course native fetch API, as well as Axios, can be used for such goal.

### 2. State Management

the reason that I liked to use RTK is to first I started to make the app, the number of local states was getting out of hand, and I wanted to prevent props from drilling through the app. I also considered using Context API. However, I was thinking about the code readability and future development so I decided to go with RTK.

### 3. CSS and styling.

I used Material UI. I found it a really good library to work with. I managed to make the best out of it and use the components when needed. In addition, for the
skeleton of the app and the layout I wrote a responsive pure CSS. The app works well on Mobile and Tablet, as well as Desktop.
As the main part of the styling, I used the SCSS SASS preprocessor. I always use this technology when I'm thinking about the future of the app, and how scalable it is.
sass giving me the opportunity to write clean and organized and nested properties for styling. In some cases, only CSS can handle toggles and responsive menus without
thinking that much about the javascript behind the scene. Bottom line, I tried to come up with a simple UI and I hope it will be pleasant for you.

### 4. Unit Test

React testing library and jest are two unit test purposes. I provided 1 main test file (for Home Page).
the test is passed and I wrote it somehow to test some simple functionalities of components.

# Features

## Search Movies and make API calls.

Users can use the search input field provided on the Home Page to search for movies they need.
as you may know, themoviedb API has lots of content to deal with, however for keeping it simple the search only returns the first page of the results and it only
searches for movies which have the searched phrase, not tv series or any other content. one amazing feature about RTK Query is that it caches the returned data. so
if you search for one phrase, it will be cached and the next time you search for the same phrase, data will be returned from the cache which prevents making an API
call again. all the API queries are located in "src/features/services/api.ts" there you can customize queries and even create another based on your preferences.

## Favorite&liked movies list.

for providing this functionality, I'm using Redux Toolkit for state management and defining "userSlice" for the states. I have written two actions for such a           purpose. 1) addRemoveWatchList reducer, which has the responsibility to add or remove a movie from the list, whenever a user toggle the watchlist button on the         movie image.
2) addRemoveFavorites, same as the former reducer, has the responsibility to add or remove movies from the "liked list/favourite list".

### Note: for adding movies to your watchlist or favourite list you should hover over images of movies and the related buttons will be appeared.

## The App Must Be working on desktop as well as mobile.

since it's a simple application, I've tested it on different screen devices and didn't face any issues.
of course, there is always room for improvement. I've defined some custom variables in scss files for detecting screen sizes and response accordingly.

## Posters and Trailers

Each movie has the cover image as well as a button for watching a trailer. the trailer will be open in a modal box as soon as you click on the "Watch Trailer" button. you can close the modal button by clicking outside of the modal area.

# Installation

### whether download zip file or clone the "master" branch from the repository

```git
git clone https://github.com/naderjlyr/leovegas-movies-app.git
```

```node
npm install     (install the dependency packages)
npm start       (start the application by default, http://localhost:3000)
npm test        (for running the test units)

```

## Demo

I deployed the application on firebase.
[Demo](https://movie-73f83.web.app).
