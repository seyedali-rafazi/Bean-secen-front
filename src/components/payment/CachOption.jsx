import React from "react";
import { warning } from "../../icons/PaymentIcon";

function CachOption() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center bg-rose-50 p-5 rounded-lg border border-rose-100">
      <div className="flex text-secondery-800 gap-2 w-full lg:w-1/5 whitespace-nowrap border-b border-secondery-400 py-4 font-semibold lg:border-b-0 lg:py-0">
        <span>{warning}</span>
        <p>Remarkable</p>
      </div>
      <div className="text-justify w-full text-sm text-secondery-600">
        The cost of your order will be received during the delivery of the
        goods. Please have a bank card or cash with you before delivering the
        goods and do not ask for payment at a later time or credit. Thanks for
        your cooperation.
      </div>
    </div>
  );
}

export default CachOption;
