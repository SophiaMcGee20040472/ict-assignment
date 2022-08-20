# ICT Skills 2 Assignment.

Name: Sophia McGee
Student No. 20040472

## Overview.

I have added many features. I decided on a colour theme firstly that I have used exstensively incorporating a large amount of material ui elements along with styling using css. I have added an actors page with actor bio link which then leads you to bio page. I have added tv series with tv summary and tv review options along with actors accredited to the tv series selected. I have created a watchlist add button along with the option to add films to my fantasy page. I have used many api calls and have created many pages including top rated movies,similar movies, popular movies, now-playing movies plus many more.  I have also created the option to sort through different pages with the filter button. This button allows you to be presented with a search bar and depending on which page you are on be it tv series movies or actors you can only search in that specific field. I also created an option to sort using languages and the ability to sort movies alphabetically but only movies. I have used basic authentication and have protected my favourites movies and my watchlist meaning you have to press a button to gain access. I have used an extensive amount of components for my story book support. I selected the elements I thought most important to return. I have used extensive hyperlinking. I have used full caching on all my api end points. Overall this app has quite a few elements to it Im sure there are a few I have forgotten to mention. I have thoroughly enjoyed creating this app unfortunately I have ran out of time to add any more features.

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
- /movies/:id Movies Detail page wirh actors accredited to movie
- /tv/reviews/:id Tv Reviews Page
- /tvseries/:id Tv Series Details Page and actors accredited to movie
- /movies/similar Similar Movie Page
- /movies/fantasy Fantasy Movies Page this page is where they can be viewed
- /tvseries/favTv Favourited Tv Series Page

### Views/Pages.

Please see screenshots in public/MoviePics

- > Lists Actors info from the people endpoint.
![actor bio](https://user-images.githubusercontent.com/83893260/185766382-f387ad6c-5707-42d4-aedd-2ebe32c75316.png)
- > Lists Actors profile picture and Name.
![actorsList](https://user-images.githubusercontent.com/83893260/185766405-7f92aaa9-cce2-4705-b542-8e63de1533fb.png)
- > Basic Authentication to access protected routes.
![authPage](https://user-images.githubusercontent.com/83893260/185766416-34957fe2-257a-4728-add9-aab7129120b1.png)
- > Cached Items
![cacheItems](https://user-images.githubusercontent.com/83893260/185766474-9eb5b92a-27a3-402d-8804-795cdff04579.png)
- > List Discover Movies from discovery endpoint.
![DiscoveryMovies](https://user-images.githubusercontent.com/83893260/185766478-d9cf125d-3a38-4d89-9948-2f97f153954f.png)
- > Listing favourited tv show added by you.
![FavouriteTV](https://user-images.githubusercontent.com/83893260/185766505-32371edf-faea-4288-8b8d-32c5bcb31a9f.png)
- > Side menu with search filter and sorting options.
![filter_sorting](https://user-images.githubusercontent.com/83893260/185766525-2f5fab0f-c795-4e36-9fe4-ec088fff8191.png)
- > review preview of tv series when review button is pressed.
![firstreview](https://user-images.githubusercontent.com/83893260/185766529-6c3c56b6-9137-4998-babe-9ac99b821f17.png)
- > Lists full movie Review
![fullMovieReview](https://user-images.githubusercontent.com/83893260/185766542-030808e3-8773-4ab0-ab6f-b845ca3805b9.png)
- > Lists Cast for movie
![movieCast](https://user-images.githubusercontent.com/83893260/185766547-3c17f598-77de-4f52-9bba-c3f862823d3b.png)
- > review preview of movies when review button is pressed
![movieReviewPreview](https://user-images.githubusercontent.com/83893260/185766558-bdb91f2d-d0f4-4c41-9b04-e5f8e901712e.png)
- > listing added movies to Fantasy list
![myFantasy](https://user-images.githubusercontent.com/83893260/185766568-6dca5759-a61a-4e9e-b5e4-6a042dadcbb3.png)
- > Listing Favourited movies
![myFavourites](https://user-images.githubusercontent.com/83893260/185766579-459c385a-767f-40e9-984d-a2fbe2ce0cf4.png)
- > Listing currently playing movies from endpoint
![nowplaying ](https://user-images.githubusercontent.com/83893260/185766584-dfd6e24c-fc06-40dd-a4d5-57b1495eeae6.png)
- > List popular movies gotten from the popular movies endpoint.
![popularMovies](https://user-images.githubusercontent.com/83893260/185766589-9d0a8519-19ec-42b0-b5c2-86148552596b.png)
- > Listing similar movies gotten from api endpoint.
![similarmovies](https://user-images.githubusercontent.com/83893260/185766592-4cab926a-7777-4e76-bc2e-727bc24d1e1d.png)
- > Listing Top rated movies gotten from api endpoint.
![topRated](https://user-images.githubusercontent.com/83893260/185766602-b4a720ce-cb0f-4263-ad8a-627a51dfbceb.png)
- > Lists Cast for Tv Series
![TvCredits](https://user-images.githubusercontent.com/83893260/185766612-3c8c4d1d-2f0a-482a-afe4-2c6402958035.png)
- > Listing Tv Details
![tvDetails](https://user-images.githubusercontent.com/83893260/185766616-a83447d7-8688-4b27-80f0-0001ceb62231.png)
- > List Tv Series Page
![TvSeriesPage](https://user-images.githubusercontent.com/83893260/185766672-d77f1785-1879-40b7-85b7-f1148c352899.png)
- > Listing upcoming movies gotten from api endpoint.
![upcoming movies](https://user-images.githubusercontent.com/83893260/185766676-d4bea17e-4e3b-4cc6-b785-c69c525c4c68.png)
- > Listing movies added to watchlist.
![watchlist](https://user-images.githubusercontent.com/83893260/185766686-0cfc7d43-00ff-433a-a398-c612335a4916.png)


### Component catalogue.

please see public/MoviePics/storybook for images of my storybook support.
These are my storybook main support. I have way to many components to do them all. I have created 36 components in total. I have supported 13 of these in storybook.

+ App Header
+ ActorCard
![actorCard](https://user-images.githubusercontent.com/83893260/185767093-a7392a42-9538-4b76-9088-bd2b3b7f4d39.png)
+ Actor Details
![actorDetails](https://user-images.githubusercontent.com/83893260/185767106-acebc0b3-4307-49ec-90f6-be3c68fbfd4f.png)
+ Actor Header
![ActorHeader](https://user-images.githubusercontent.com/83893260/185767110-ac7e8dfe-a71f-41f0-b849-dd0296e6a7f6.png)

+ Actor List
![ActorsList](https://user-images.githubusercontent.com/83893260/185767113-d5bf1a60-da25-4598-ad6c-0d4f7444a28d.png)

+ FilterMoviesCard
![filtersMovieCard](https://user-images.githubusercontent.com/83893260/185767123-ec6fe922-b178-44ff-9a7a-ab25566600a0.png)

+ MovieCard
![movieCard](https://user-images.githubusercontent.com/83893260/185767128-db2db49b-90bb-482f-9c18-c44efb291341.png)

+ MovieDetails
![movieDetails](https://user-images.githubusercontent.com/83893260/185767132-92647009-cbc3-42be-bdc9-f200edc89c65.png)

+ MovieHeader
![MovieHeader](https://user-images.githubusercontent.com/83893260/185767141-f29a1a02-6d91-499d-a9c5-e596d4064db8.png)

+ MoviePageHeader
![movieList](https://user-images.githubusercontent.com/83893260/185767143-cd23d33f-6e80-42f4-a552-24b77f3e3126.png)

+ TvShowDetails
![tvShowDetails](https://user-images.githubusercontent.com/83893260/185767156-a87713fb-6402-4fb1-8c03-aee859c0bcb5.png)

+ Tv Header

![TvHeader](https://user-images.githubusercontent.com/83893260/185767282-8dfdb104-b617-4821-934b-1a85aaa617ba.png)



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
-
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
