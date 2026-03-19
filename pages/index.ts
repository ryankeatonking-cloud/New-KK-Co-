import React from "react";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Keaton King & Co</h1>
      <p>Your site is now live.</p>
    </div>
  );
}
git add .
git commit -m "fix homepage"
git push
export default function Home() {
  return <h1>Keaton King & Co is LIVE</h1>;
}
import KeatonKingSite from "../components/KeatonKingSite";

export default function Home() {
  return <KeatonKingSite />;
}
