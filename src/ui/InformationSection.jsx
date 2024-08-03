import React from "react";
import { GoTrash } from "react-icons/go";
import { totalOffAmount, totalPrice } from "../utils/Prices";
import ListLocation from "../components/shipping/ListLocation";

function InformationSection({ products, children, shippingPrice }) {
  return (
    <div className="w-full lg:w-3/5 flex flex-col h-fit gap-4 border border-secondery-400 rounded-lg p-4">
      <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4">
        <div className="flex items-center gap-2">
          <p>Cart</p> <span>({products.length})</span>
        </div>
        <button>
          <GoTrash className="w-6 h-6" />
        </button>
      </div>
      <div>
        <ListLocation products={products} />
      </div>
      <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4 ">
        <p>Discount products</p>
        <span>{totalOffAmount(products)}&nbsp;$</span>
      </div>
      <div className="flex flex-col gap-2 border-b-2 border-secondery-400 px-2 py-4">
        <div className="flex justify-between items-center">
          <p>Shipping fee</p>
          <span>{shippingPrice}&nbsp;$</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <p> Payable amount</p>
          <span className="text-primary font-semibold">
            {totalPrice(products)}
            &nbsp;$
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default InformationSection;
