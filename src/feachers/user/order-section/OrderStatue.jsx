import React from "react";
import { calender, tinyLocationIcon } from "../../../icons/dashboard-icon";
import { totalOffAmount, totalPrice } from "../../../utils/Prices";
import UserOrderStatue from "./UserOrderStatue";

function OrderStatue({ payments }) {
  return payments.map((payment) => (
    <div
      className="border w-full border-red-100 p-5 rounded-lg  space-y-3"
      key={payment._id}
    >
      <div className="flex justify-between items-center ">
        <h2 className="text-secondery-600">Milan branch</h2>
        <p className="text-sm p-2 rounded-md bg-rose-100 text-primary md:text-lg">
          {payment.status == "COMPLETED"
            ? "Successful payment"
            : "payment failed"}
        </p>
      </div>
      <div className="flex flex-col gap-2 justify-start items-start w-full">
        <div className="flex flex-col gap-2 text-xs text-secondery-600">
          <div className="flex gap-1">
            <span>{calender}</span>
          </div>
          <div>
            <span>Amount:</span>
            <span className="text-xl">
              {totalPrice(payment.cart.productDetail)}
              &nbsp;$
            </span>
          </div>
          <div>
            <span>Discount: </span>
            <span className="text-xl">
              {totalOffAmount(payment.cart.productDetail)}
              &nbsp;$
            </span>
          </div>
        </div>
        <p className="text-xs text-secondery-600 flex gap-1">
          <span>{tinyLocationIcon}</span>
          <span>Milan, Shemiranat, Shemiran meeting</span>
        </p>
      </div>
      <div>
        <UserOrderStatue orders={payment.cart.productDetail} />
      </div>
    </div>
  ));
}

export default OrderStatue;
