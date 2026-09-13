import { useState } from "react";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>

          <p>
            Welcome to Paradise Nursery, your online destination for
            beautiful and healthy plants.
          </p>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <h2>Our Plants</h2>
          {/* Product list yahan show hoga */}
        </div>
      )}
    </div>
  );
}

export default App;
