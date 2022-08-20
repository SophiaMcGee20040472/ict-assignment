# ICT Skills 2 Assignment.

Name: Sophia McGee
Student No. 20040472

## Overview.

I have added many features. I decided on a colour theme firstly that I have used exstensively incorporating a large amount of material ui elements along with styling using css. I have added an actors page with actor bio link. I have added tv series with tv summary and tv review options. I have created a watchlist add button along with the option to add films to my fantasy page. I have used many api calls and have created many pages including top rated movies,similar movies, popular movies, now-playing movies. I have also created the option to sort through different pages with the filter button. This button allows you to be presented with a search bar and depending on which page you are on be it tv series movies or actors you can only search in that specific field. I also created an option to sort using languages and the ability to sort movies alphabetically but only movies. I have used basic authentication and have protected my favourites movies and my watchlist meaning you have to press a button to gain access. I have used an extensive amount of components for my story book support. I selected the elements I thought most important to return. I have used extensive hyperlinking with a mix of static and parameterised urls. I have used full caching on all my api end points.

e.g.

- Discover Movies
- Actors List
- Tv Series
- Top Rated Movies
- Upcoming movies
- Similar Movies
- My Watchlist
- Now-Playing
- Popular Movies
- My Fantasy
- Favorite TV page
- Actors Bio
- Tv Details
- Tv Reviews
- Movie, Actor and tv Search filter.
- Movie Alphabetize option.
- Navigation dropdown
- many more features

## Setup requirements.

Download zip file from github and then create a .env file in your src folder, where you should then place your api key for example
REACT_APP_TMDB_KEY= 11111111111111111111111
FAST_REFRESH=false

you can get this api key when you sign up for one on TMDB site. Then if you command in working directory and use the command npm install then you can run npm start and it should start up locally for you .

## App Design.

For my App design I decided to go for a colour palette of a mixture of purple and pink tones as the development tool has similar colours and didnt want to off set the colour balance. I also used oranges and greens. Basically I decided to design using secondary colours that fell close in the colour spectrum. I used a san-serif font as I find them visually cleaner looking. I resized font into a hierarchy layout. I found the cards sizing to be annoying as some of the film headings were too long and caused the cards to be longer in sections. For my fantasy icon I used a film icon. I used pink heart for movie favourites and a purple heart for tv favourites. I changed my design multiple times from blacks and blues till I decided I was happy with my concept.

### Routing/Navigation.

e.g.

- /reviews/form Add Movie Review Page
- /reviews/:id list Movie Review Page
- /tv/:id Tv Series list
- /movies/upcoming lists movies soon to be shown in cinemas.
- /movies/top-rated lists Top Rated Movies
- /movies/popular lists Popular Movies
- /movies/watchlist Added to watchlist page
- /movies/favourites lists favourites that were added
- /login login to authenticate protected routes page
- /movies/now-playing Movies currently playing
- /actors" Listing of Actors Page
- /actor/:id Actors Biography Page listing there info
- /movies/:id Discover Movie Page
- /tv/reviews/:id Tv Reviews Page
- /tvseries/:id Tv Series Details Page
- /movies/similar Similar Movie Page
- /movies/fantasy Fantasy Movies Page this page is where they can be viewed
- /tvseries/favTv Favourited Tv Series Page

### Views/Pages.

Please see screenshots in public/MoviePics

In Order
e.g.

> Lists Actors info from the people endpoint.
> Lists Actors profile picture and Name.
> Basic Authentication to access protected routes
> List Discover Movies from discovery endpoint.
> Listing favourited tv show added by you.
> Side menu with search filter and sorting options.
> review preview of tv series when review button is pressed.
> Lists full movie Review
> review preview of movies when review button is pressed
> listing added movies to Fantasy list
> Listing Favourited movies
> Listing currently playing movies from endpoint
> List popular movies gotten from the popular movies endpoint.
> Listing similar movies gotten from api endpoint.
> Listing Top rated movies gotten from api endpoint.
> Listing Tv Details
> Listing upcoming movies gotten from api endpoint.
> Listing movies added to watchlist.

### Component catalogue.

please see public/MoviePics/storybook for images of my storybook support.
These are my storybook main support. I have way to many components to do them all. I have created 34 components in total. I have supported 13 of these in storybook.

+ App Header
+ ActorCard
+ Actor Details
+ Actor Header
+ Actor List
+ FilterMoviesCard
+ MovieCard
+ MovieDetails
+ MovieHeader
+ MoviePageHeader
+ TvShowDetails
+ Tv Header



## Caching.

Please see cacheItem image found in public/MoviePics

e.g.

- Discover Movies
- Actors List
- Tv Series
- Top Rated Movies
- Upcoming movies
- Similar Movies
- Now-Playing
- Popular Movies
- Actors Bio
- Tv Details
- Tv Reviews
- etc.

## Authentication (if relevant).

Basic Authentication and protected routes. I chose two routes to protect my Favourite and my watchlist
Please see image AuthPage.png from public/MoviePics to see auth page. Please see snippet of code below where the routes were protected.
e.g.
<Route
path="/movies/watchlist" // path that is protected
element={
<ProtectedRoute>
{" "}
<WatchListPage />{" "}
</ProtectedRoute>
}
/>
<Route
path="/movies/favourites" // path that is protected
element={
<ProtectedRoute>
{" "}
<FavouriteMoviesPage />
</ProtectedRoute>
}
/>

## Server-side persistence (if relevant)

not relevant

## Additional features (if relevant),

I added a drop down menu in the Site Header because I had too many Heading it took me quiet a while to figure it out.

## Independent learning (if relevant),

Researching Material Ui for Icons and different elements. How to create a drop down menu. Using colour palettes for styling. storybook exploration.

https://reactjs.org/docs/getting-started.html
https://www.youtube.com/watch?v=nGMbzFnAnRQ&ab_channel=SamLama
https://www.youtube.com/watch?v=LlvBzyy-558&t=146s&ab_channel=PedroTech
https://www.youtube.com/watch?v=oqJY1L0gnto&t=474s&ab_channel=Domthedev
https://www.freecodecamp.org/news/react-firebase-authentication-and-crud-operations/
https://mui.com/material-ui/getting-started/overview/
https://react-bootstrap.github.io/components/dropdowns/
https://www.npmjs.com/package/react-dropdown
https://htmlcolorcodes.com/

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png
