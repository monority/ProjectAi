import React from "react";
import Header from "./Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CardBase from "./aiCard";
import ais from "../array/ai";
import { useDispatch, useSelector } from "react-redux";
import { editAi } from "../slices";
import { addTotal } from "../slices";
import { useEffect } from "react";
import { add } from "../slices";

import { useParams } from "react-router-dom";
library.add(faArrowLeft);

const Order = () => {
  const orders = useSelector((state) => state.data.orders);

  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedOrder = orders.find((order) => order.id == id);
  let total = 0;

  const addAi = (ai) => {
    dispatch(editAi(ai ));
  };

  const calculateTotal = () => {
    if (selectedOrder) {
      selectedOrder.items.forEach((ai) => {
        total += ai.price;
      });
    }
    return total;
  };

  const renderAi = () => {
    const listAi = ais.map((ai) => {
      return (
        <CardBase
          key={ai.id}
          img={ai.img}
          price={ai.price}
          name={ai.name}
          action={() => addAi( ai )}
        />
      );
    });

    return <div className="listAi">{listAi}</div>;
  };

  const renderOrderDetails = () => {
    if (!selectedOrder) {
      return null;
    }

    return (
      <div className="containerOrderWrapper">
        <h2>Détail de la commande numéro {id}</h2>
        <div className="mainOrderWrapper">
          {selectedOrder.items.map((ai) => (
            <div key={ai.id} className="orderWrapper">
              <p>
                {ai.price} - {ai.name} - {ai.quantity}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header showIcon="true" />
      <div className="main">
        <div className="container">
          <div id="order">
            <div className="aiWrap">{renderAi()}</div>
            <div className="list">
              {id ? renderOrderDetails() : null}
              <div className="totalWrapper">
                <h2>Total de la commande : {calculateTotal()}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
