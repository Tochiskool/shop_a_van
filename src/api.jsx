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

export async function getVans() {
  try {
    const res = await fetch("/api/vans");

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
