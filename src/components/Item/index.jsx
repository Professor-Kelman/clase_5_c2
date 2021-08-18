import React from "react";
// import "./item.css";

function Item({ type, prefix }) {
  return <li class="li list-item">{`${prefix} ${type}`}</li>;
}

export default Item;
