import React from "react";
import { totalOffAmount, totalPrice } from "../../utils/Prices";
import { PiWarningOctagon } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import ModifyList from "../../ui/ModifyList";

function ModifyInformation({ products, children }) {
  return (
    products && (
      <div className="w-full lg:w-3/5  flex flex-col h-fit gap-4 border border-secondery-400 rounded-lg p-4">
        <div className="md:hidden">
          <ModifyList products={products} />
        </div>
        <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4">
          <div className="flex items-center gap-2">
            <p>Cart</p> <span className="text-xl">({products?.length})</span>
          </div>
          <button>
            <GoTrash className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center justify-between border-b-2 border-secondery-400 px-2 py-4 ">
          <p>Discount products</p>
          <span className="text-xl">{totalOffAmount(products)}&nbsp;$</span>
        </div>
        <div className="flex flex-col gap-2 border-b-2 border-secondery-400 px-2 py-4">
          <div className="flex justify-between items-center">
            <p>Shipping fee</p> <span>0&nbsp;$</span>
          </div>
          <div className="flex gap-2 items-start text-warning-300">
            <span>
              <PiWarningOctagon className="w-6 h-6" />
            </span>
            <p className="text-sm text-justify">
              The shipping fee will be calculated based on the address, time and
              shipping method you choose and will be added to this amount.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p> Payable amount</p>{" "}
            <span className="text-primary font-semibold text-xl">
              {totalPrice(products)}&nbsp;$
            </span>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default ModifyInformation;
