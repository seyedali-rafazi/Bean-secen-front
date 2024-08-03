import React, { useState } from "react";
import { cartBank } from "../../icons/PaymentIcon";

const bankImages = [
  {
    image: "/styles/saman.jpg",
    id: "1",
  },
  {
    image: "/styles/melat.jpg",
    id: "2",
  },
  {
    image: "/styles/parsian.jpg",
    id: "3",
  },
];

function BankOptions() {
  const [activeImageId, setActiveImageId] = useState("1");

  const handleImageClick = (id) => {
    setActiveImageId(activeImageId === id ? null : id);
  };
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 whitespace-nowrap justify-start border border-secondery-400 rounded-lg p-10">
      <div className="flex border-b py-3 border-secondery-400 lg:border-b-0  lg:py-0 gap-2">
        <span>{cartBank}</span>
        <p>Payment Gateway</p>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="flex gap-2">
          {bankImages.map((bankImage) => (
            <button
              key={bankImage.id}
              onClick={() => handleImageClick(bankImage.id)}
            >
              <img
                className={`border-2 rounded-lg duration-300 ${
                  activeImageId === bankImage.id
                    ? "grayscale-0 border-primary shadow-sm"
                    : "grayscale"
                }`}
                src={bankImage.image}
                alt=""
              />
            </button>
          ))}
        </div>
        <p className="text-center text-xs md:text-sm whitespace-normal text-secondery-500">
          Payment is possible through all Shatab member cards <br />
          <span className="text-xs">
            (Please turn off your blocker before paying.)
          </span>
        </p>
      </div>
    </div>
  );
}

export default BankOptions;
