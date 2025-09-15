// app/page.jsx (Server Component by default)

import { use } from "react";

async function getDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  return res.json();
}

export default function UseHook() {
  const dog = use(getDog()); // Suspense data fetching
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Random Dog</h2>
      <img
        src={dog.message}
        alt="Random Dog"
        style={{ width: "300px", borderRadius: "10px" }}
      />
    </div>
  );
}
