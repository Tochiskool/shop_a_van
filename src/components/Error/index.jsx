import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>
        {error.status
          ? `Error ${error.status}: ${error.statusText}`
          : "Unknown error occurred."}
      </p>
      <p>{error.message}</p>
    </div>
  );
}
