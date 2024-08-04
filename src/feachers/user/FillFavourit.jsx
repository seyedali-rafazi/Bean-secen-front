import React from "react";
import LikeFood from "../../ui/LikeFood";
import { FaStar } from "react-icons/fa";
import { OrderButton } from "../../ui/Button";

function FillFavourit({ favourits }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {favourits.map((favourit) => (
        <div
          key={favourit._id}
          className="flex flex-col gap-4 border border-rose-100 rounded-lg h-full justify-between"
        >
          <div className="max-h-36">
            <img
              role="presentation"
              onError={(e) => {
                e.currentTarget.src = "/styles/gingerbread-cappuccino.webp";
              }}
              className="w-full h-full object-cover object-center rounded-t-lg"
              src={favourit.imageLink}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 p-4 h-full justify-between">
            <div className="flex justify-between items-center h-full">
              <p className="font-semibold text-lg">{favourit.title}</p>
              <LikeFood id={favourit._id} />
            </div>
            <div className="flex justify-between items-center gap-2">
              <div className="hidden sm:flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="w-full text-left">
                {favourit.offPrice == 0 ? favourit.price : favourit.offPrice}
                &nbsp;$
              </div>
            </div>
            <div className="flex justify-center">
              <OrderButton id={favourit._id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FillFavourit;
