import React from "react";
import { useSelector } from "react-redux";
import ListOrder from "./ListOrder";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { remove } from "../slices";
import { useDispatch } from "react-redux";

const CurrentOrder = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data.orders);

  const selectedIf = orders.find((item) => item.id);
  console.log(selectedIf);

  const removeTask = (order) => {
    dispatch(remove(order));
  };

  const renderOrderId = () => {
    return orders.map((order) => (

      <tr key={order.id}>
        <td>n°{order.id}</td>
        <td>{order.total}</td>
        <td>{order.state}</td>
        <td>
          <p onClick={() => navigate(`/newOrder/${order.id}`)}>Editer</p>
          <p onClick={() => removeTask(order)}>Supprimer</p>
        </td>
      </tr>

    ));
  };

  return (
    <div className="currentOrder">
      <Header showIcon="true" />

      <div className="container">
        <div className="wrapperOrder">
          <p>Liste des commandes</p>

          <table>
            <thead>
              <th>ID Commande</th>
              <th>Total</th>
              <th>Statut commande</th>
              <th>Actions</th>
            </thead>
            <tbody>{renderOrderId()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrentOrder;
