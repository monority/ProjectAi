import React from "react";

const aiCard = ({ img, name, price, action }) => {
  return (
    <div className="wrapperAi">
      <img src={img} alt="" />
      <div className="wrapperText">
        <h1>{name}</h1>
        <p>{price} $</p>
        <p onClick={action} className="addLink">
          Add to Cart
        </p>
      </div>
    </div>
  );
};

export default aiCard;
