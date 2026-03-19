import React from "react";

const products = [
  {
    id: 1,
    title: "Camo Field Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 2,
    title: "Classic Polo",
    price: 65,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 3,
    title: "Hunting Cap",
    price: 35,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  },
  {
    id: 4,
    title: "Waxed Vest",
    price: 140,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  }
];

export default function KeatonKingSite() {
  return (
    <div style={{ background: "#f5efe6", color: "#2b2118", fontFamily: "serif" }}>

      {/* HEADER */}
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20, background: "#fdf8f3" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="42" height="42" viewBox="0 0 100 100">
            <path d="M50 60 C40 40, 20 40, 15 20 M50 60 C60 40, 80 40, 85 20" stroke="#2b2118" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="50" cy="70" r="6" fill="#2b2118" />
          </svg>
          <div>
            <h1 style={{ margin: 0 }}>Keaton King</h1>
            <span>& Co</span>
          </div>
        </div>

        <nav>
          <a href="#">Home</a> | <a href="#products">Shop</a>
        </nav>

        <a href="#">Cart</a>
      </header>

      {/* HERO */}
      <section style={{
        height: "75vh",
        backgroundImage: "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470)",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}>
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
        <div style={{ position: "relative", textAlign: "center" }}>
          <h2>Field to Fairway</h2>
          <p>Premium Southern apparel built for the outdoors and refined for everyday wear.</p>
          <a href="#products" style={{ background: "#6b4f2a", color: "white", padding: "10px 20px" }}>Shop Now</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: 40 }}>
        <h2>Best Sellers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {products.map((p) => (
            <div key={p.id} style={{ background: "white", padding: 15 }}>
              <img src={p.image} alt={p.title} style={{ width: "100%" }} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div style={{
          height: 400,
          backgroundImage: "url(https://images.unsplash.com/photo-1516826957135-700dedea698c)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 24
        }}>Field Wear</div>

        <div style={{
          height: 400,
          backgroundImage: "url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d)",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 24
        }}>Club Classics</div>
      </section>

      {/* BRAND */}
      <section style={{ background: "#2b2118", color: "white", padding: 60, textAlign: "center" }}>
        <h2>Built for the Blind. Ready for the Clubhouse.</h2>
        <p>Durability meets refinement. Designed for hunters and modern southern style.</p>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>What Customers Say</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          <div>"Best gear I own."</div>
          <div>"Perfect blend of classy and rugged."</div>
          <div>"Feels like country club meets hunting camp."</div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{ padding: 40, textAlign: "center" }}>
        <h2>Join the Family</h2>
        <input type="email" placeholder="Email" />
        <button>Join</button>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#2b2118", color: "white", textAlign: "center", padding: 20 }}>
        <p>© {new Date().getFullYear()} Keaton King & Co</p>
      </footer>

    </div>
  );
}
