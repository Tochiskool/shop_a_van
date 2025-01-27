# UseParams() 16. 1:08

- Useparams helps us to grab any of the params that we click on, on our url.
- import useParam from our react router dom
- we call it like so on our details app.
  ` const params = useParams()`
- When we console.log it, it returns and object with the a keyvalue pair.
- In this case it will return {id: " Number related to the images clicked"}. {id:"1"}
- if we add another params to vans lets say
  `/vans/:id/:type` params returns an object with 2 properties like so {id:1, type:rugged}.
