import React from "react";
import { FaStar } from "react-icons/fa";
import ModifyQuantity from "../components/cart/ModifyQuantity";
import { GoTrash } from "react-icons/go";
import useDeletFromCart from "../feachers/food/deleteFromCart";
import { truncateText } from "../utils/truncateText";

function ModifyList({ products }) {
  const { deleteFood } = useDeletFromCart();
  const handelDelete = (productId) => {
    const data = {
      productId: productId,
    };
    deleteFood(data);
  };

  return (
    <div className="w-full flex flex-col gap-3 border border-secondery-400 rounded-lg p-6 max-h-[60vh] overflow-auto">
      {products?.map((product) => (
        <div
          key={product._id}
          className="border border-secondery-400 rounded-lg"
        >
          <div className="flex gap-2 w-full">
            <div className="hidden md:block">
              <div className="relative w-32 h-full bg-cover rounded-lg">
                <img
                  role="presentation"
                  onError={(e) => {
                    e.currentTarget.src = "/styles/gingerbread-cappuccino.webp";
                  }}
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                  src={product.imageLink}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="w-full flex md:flex-col justify-between gap-2 p-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                <p className="font-semibold text-lg">{product.title}</p>
                <span className="font-normal text-sm text-secondery-600 md:hidden">
                  {product.discount == 0 ? product.price : product.offPrice}
                  &nbsp;$
                </span>
                <button
                  className="hidden md:block"
                  onClick={() => handelDelete(product._id)}
                >
                  <GoTrash className="w-6 h-6" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="hidden md:block">
                  {truncateText(product.description, 20)}
                </p>
                <div className="flex gap-3">
                  {product.discount == 0 ? (
                    ""
                  ) : (
                    <s className="text-sm text-secondery-600 hidden md:block">
                      {product.price}
                    </s>
                  )}
                  {product.discount == 0 ? (
                    ""
                  ) : (
                    <span className="bg-rose-200 text-rose-500 px-1 py-0.5 rounded-full text-sm hidden md:block">
                      %{product.discount}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start md:justify-between">
                  <div className="hidden md:flex gap-1 text-yellow-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <ModifyQuantity
                    id={product._id}
                    quantity={product.quantity.quantity}
                  />
                </div>
                <span className="hidden md:block md:font-semibold md:text-lg md:text-secondery-800">
                  {
                    product.discount == 0 ? product.price : product.offPrice
                  }
                  &nbsp;$
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ModifyList;
