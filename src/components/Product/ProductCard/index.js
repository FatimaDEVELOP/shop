import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { addBasket } from "../../../index/action";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const AddToBasket = () => {
    dispatch(addBasket(el));
  };
  let bas = basket.some((some) => some.id === el.id);
  console.log(bas);
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={el.image} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {el.title}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.description}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {el.category}
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {el.price}
        </a>
        {bas === true ? (
          <Link to={"/basket"}>
            <button class="text-white ml-7 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <SlBasket />
            </button>
          </Link>
        ) : (
          <button
            onClick={AddToBasket}
            type="button"
            class="text-white ml-7 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add to Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
