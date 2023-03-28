import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, cartHandler] = useState(false)
  const liClass = inCart ? 'in-cart' : ''

  function handleClick() {
    cartHandler((inCart) => !inCart)
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? 'remove' : 'add'} onClick={handleClick}>{inCart ? 'Remove From' : 'Add to'} Cart</button>
    </li>
  );
}

export default Item;
