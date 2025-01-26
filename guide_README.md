# Guide on on this page.

### useFetch hook

- It is a custom hook used to fetch data from any outside external service api.
- it simply outputs the data it fetches and all you need to do is to import import the external services link route.

### CSS

- The index css has the base css that affects the entire lpage.
- Every Page contains a folder that modularizes the the components in the pages.
- Every folder has the css that species styles that affect the content on that component including its media query implementation.
- A normalise.css file is import so that we can start with a base css `import normalize.css` and the normalize css is in the root of the src folder.

### Server

- A mirage server is used to implement serverside rendering capabilities on this page.

## Link to the hosted page at [VanLife](https://splendorous-stardust-a3550d.netlify.app/)

## Routing Explained

- We wrap our content first with `<BrowserRouter>.`

- Then we define our `<Routes>`. An application can have multiple `<Routes>`. Our basic example only uses one.

`<Route>`s can be nested. The first `<Route>` has a path of / and renders the Layout component.

The nested `<Route>`s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.

Setting the path to \* will act as a catch-all for any undefined URLs. This is great for a 404 error page.
