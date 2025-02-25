// export async function getVans() {
//   const res = await fetch("/api/vans");
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : `/api/vans`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return data.vans;
  } catch (error) {
    console.error("Fetching vans failed:", error);
    throw error; //  Make sure errors bubble up
  }
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : `/api/host/vans`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    const data = await res.json();
    // If it's an array of vans, filter based on id
    return id ? data.vans.find((van) => van.id === id) : data.vans;
  } catch (error) {
    console.error("Fetching vans failed:", error);
    return (
      <div className='error'>
        Oops! Something went wrong. Please try again later.
      </div>
    );
  }
}
