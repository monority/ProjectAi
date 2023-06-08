import React from "react";

const ListOrder = ({ id, index }) => {
  return (
    <select name="choice" id="selectChoice">
      <option value="" id={index}>
        {id}
      </option>
    </select>
  );
};

export default ListOrder;
