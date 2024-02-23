import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "../BasketCard";

const Basket = () => {
  const { basket } = useSelector((state) => state.basket);
  let total = basket.reduce((acc, el) => {
    return acc + el.price * el.count;
  }, 0);
  return basket.length > 0 ? (
    <div class="relative left-[20%] overflow-x-auto mt-[150px]">
      <table class="w-[1000px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Image
            </th>
            <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {basket.map((el) => (
            <BasketCard el={el} />
          ))}
        </tbody>
      </table>
      <h2>Total price: {total}$</h2>
    </div>
  ) : (
    <div
      class="flex items-center pt-[100px] p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <svg
        class="flex-shrink-0 inline w-4 h-4 me-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Info alert!</span> Change a few things up and
        try submitting again.
      </div>
    </div>
  );
};

export default Basket;
