# UseSearchParams

```
import { useSearchParams } from "react-router";

export function SomeComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  // ...
}
```

## location.search()

- It is very similar to useState().
- It is used to return querying part of a URL.
  `let query = location.search;`;

- ## Description
- The **search** properturn returns the queryString part of a URL, including the question mark(?).
- The search property can also be used to set the querystring.
  **Note**
  `
  The querystring part is the part of the URL after the question mark (?).

The querystring is used for parameter passing.
`
