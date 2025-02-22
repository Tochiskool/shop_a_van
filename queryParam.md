# Query Parameter

- Can represent a change in the UI.

  - Good for sorting, filtering, paginationwhen we have a ton of results.
  - pagination usually occur inside a query parameter.
  - Used as a **Single source of truth** for certain application state.
  - Ask yourself: Should a use be able to revisit or share this page just like it is ?. if yes, then you might consider reaising that state up to the URL in a query parameter.

  ## What about State?

  - What happens to state when you refresh the page?.
  - Can you share the current state of your app with a friend?

### How to use Query Parameters

- Key/value pairs in the URL.
- Begin with **?**.
  - /vans?type=rugged.
- Seperated by **&**
  -/vans?type=rugged&filterBy=price. search for vans starting with type equeal to rugged fillterBy price. We can add more key value pairs to create more filter on the data we require.
