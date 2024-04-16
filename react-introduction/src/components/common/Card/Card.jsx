import { useEffect, useState } from "react";
import "./Card.css";

export default function Card({ name, price, image, quantity }) {
  const [quantityInStock, setQuantityInStock] = useState(quantity);
  const [hasTenPercentOff, setPercentOff] = useState(10);

  function buyProduct() {
    if (quantityInStock) {
      setQuantityInStock(quantityInStock - 1);
    }
  }

  useEffect(() => {
    console.log("useEffect");
  });

  return (
    <div className="product-card">
      <img className="product-image" src={image} />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <p className="product-stock">Stoc: {quantityInStock}</p>
      {quantityInStock ? (
        <>
          <button className="product-button" onClick={buyProduct}>
            Cumpara
          </button>
        </>
      ) : (
        <p>Indisponibil!</p>
      )}
    </div>
  );
}
