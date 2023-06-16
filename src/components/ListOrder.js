import React from "react";

const ListOrder = ({ id, index }) => {
  return (
    <div>
    <select name="choice" id="selectChoice">
      <option value="" id={index}>
        {id}
      </option>
    </select>
    </div>
  );
};

export default ListOrder;
