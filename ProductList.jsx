```jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  // Keeps track of products that have already been added to the cart
  const [addedItems, setAddedItems] = useState([]);

  // Product data grouped into separate plant categories
  const categories = [
    {
      name: "Indoor Plants",
      products: [
        {
          id: 1,
          name: "Snake Plant",
          price: 15,
          image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 2,
          name: "Peace Lily",
          price: 18,
          image:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 3,
          name: "Spider Plant",
          price: 12,
          image:
            "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 4,
          name: "Rubber Plant",
          price: 20,
          image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 5,
          name: "ZZ Plant",
          price: 22,
          image:
            "https://images.unsplash.com/photo-1597055181300-d9b7f3f7a6b8?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 6,
          name: "Aloe Vera",
          price: 14,
          image:
            "https://images.unsplash.com/photo-1596547609652-9cf5d8d8a8e1?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },

    {
      name: "Outdoor Plants",
      products: [
        {
          id: 7,
          name: "Rose Plant",
          price: 16,
          image:
            "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 8,
          name: "Lavender",
          price: 19,
          image:
            "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 9,
          name: "Jasmine",
          price: 17,
          image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 10,
          name: "Hibiscus",
          price: 21,
          image:
            "https://images.unsplash.com/photo-1597848212624-e19f7c7d8a8f?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 11,
          name: "Marigold",
          price: 13,
          image:
            "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 12,
          name: "Sunflower",
          price: 15,
          image:
            "https://images.unsplash.com/photo-1597848212624-e19f7c7d8a8f?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },

    {
      name: "Succulents",
      products: [
        {
          id: 13,
          name: "Echeveria",
          price: 11,
          image:
            "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 14,
          name: "Haworthia",
          price: 13,
          image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 15,
          name: "Jade Plant",
          price: 16,
          image:
            "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 16,
          name: "Sedum",
          price: 10,
          image:
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 17,
          name: "Zebra Plant",
          price: 14,
          image:
            "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=500&q=80",
        },
        {
          id: 18,
          name: "String of Pearls",
          price: 23,
          image:
            "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=500&q=80",
        },
      ],
    },
  ];

  // Adds the selected plant to Redux cart
  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedItems((previousItems) => [
      ...previousItems,
      product.id,
    ]);
  };

  return (
    <div className="product-list-container">
      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => (
        <section
          className="plant-category"
          key={category.name}
        >
          <h2>{category.name}</h2>

          <div className="product-grid">
            {category.products.map((product) => (
              <div
                className="product-card"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <div className="product-info">
                  <h3>{product.name}</h3>

                  <p className="product-price">
                    ${product.price}
                  </p>

                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(product)}
                    disabled={addedItems.includes(product.id)}
                  >
                    {addedItems.includes(product.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
```
