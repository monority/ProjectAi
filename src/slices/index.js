import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addId: (state, action) => {
      state.orders.push({
        id: action.payload,
        total: 0,
        state: "en attente",
        items: [],
      });
    },
    add: (state, action) => {
      const { id, name, price, x } = action.payload;
      const orderIndex = state.orders.findIndex((order) => order.id === x.id);
      const pizzaIndex = state.orders[orderIndex].pizzas.findIndex(
        (pizza) => pizza.id == id
      );

      if (pizzaIndex != -1) {
        state.orders[orderIndex].pizzas[pizzaIndex].quantity++;
      } else {
        state.orders[orderIndex].pizzas.push({
          id,
          name,
          price,
          quantity: 1,
        });
      }
      state.orders[orderIndex].total =
        Math.round((state.orders[orderIndex].total + price) * 100) / 100;
    },
    editAi: (state, action) => {
      const arrayLocation = state.orders.length - 1;
      state.orders[arrayLocation].items.push(action.payload);
    },
    addTotal: (state, action) => {
      const arrayLocation = state.orders.length - 1;
      state.orders[arrayLocation].items.push(action.payload);
    },
    remove: (state, { payload }) => {
      state.orders.splice(payload, 1);
    },
  },
});

export const { addId, editAi, addTotal, remove, add } = dataSlice.actions;

export default dataSlice.reducer;
