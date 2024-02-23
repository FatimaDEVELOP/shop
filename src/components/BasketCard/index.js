import React from "react";
import { useDispatch } from "react-redux";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  const deleteBasket = () => {
    dispatch({ type: "DELETE_BASKET", payload: el });
  };
  const AddToBasket = () => {
    {
      dispatch({ type: "ADD_TO_BASKET", payload: el });
    }
  };
  const decrementBasket = () => {
    dispatch({ type: "DECREMENT_BASKET", payload: el });
  };
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img src={el.image} width={100} alt="" />
      </th>
      <td class="px-6 py-4">{el.title}</td>
      <td class="px-6 flex items-center py-4">
        <button
          onClick={AddToBasket}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5
           py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +
        </button>

        <p className="mx-5">{el.count}</p>
        <button
          onClick={decrementBasket}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none 
          focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 
          py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          -
        </button>
      </td>
      <td class="px-6 py-4">{el.category}</td>
      <td class="px-6 py-4">{Math.round(el.price * el.count)}$</td>
      <td class="px-6 py-4"></td>
      <button
        onClick={() => deleteBasket()}
        type="button"
        class="text-white mt-[55px] bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Delete
      </button>
    </tr>
  );
};

export default BasketCard;
