import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../index/Reducer/reducer";

const Product = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.main);
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap m-10 ">
      {product.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
};

export default Product;
