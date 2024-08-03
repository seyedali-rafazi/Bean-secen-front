import React from "react";
import ModifyInformation from "./ModifyInformation";
import { useNavigate } from "react-router-dom";
import ModifyList from "../../ui/ModifyList";

function OrderSection({ products }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      <div className="hidden md:block w-full">
        <ModifyList products={products} />
      </div>
      <ModifyInformation products={products}>
        <button
          onClick={() => navigate("/shipping")}
          className="flex font-semibold h-12 w-full justify-center items-center text-secondery-50 bg-primary p-2 rounded-md"
        >
          <p>Completing information</p>
        </button>
      </ModifyInformation>
    </div>
  );
}

export default OrderSection;
