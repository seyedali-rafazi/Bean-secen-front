import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import EmptySection from "../../ui/EmptySection";
import PaymentSection from "./PaymentSection";
import useUser from "../../feachers/authentication/useUser";
import Loading from "../../ui/Loading";

function PaymentStep() {
  const navigate = useNavigate();
  const { user, cart, isLoading } = useUser();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5 w-full">
      <div className=" w-full p-5">

        <div className="flex justify-between md:hidden">
          <button onClick={() => navigate(-1)} className="text-secondery-500">
            <FaChevronRight />
          </button>
          <p className="font-semibold">Shopping cart</p>
          <button className="text-secondery-500">
            <GoTrash />
          </button>
        </div>
      </div>

      <div className=" w-full flex justify-center px-5 md:px-12">
        {cart.productDetail.length == 0 ? (
          <div className="border border-red-100 rounded-lg w-full">
            <EmptySection text="You have not selected a product yet!" />
          </div>
        ) : (
          <PaymentSection user={user} products={cart.productDetail} />
        )}
      </div>
    </div>
  );
}

export default PaymentStep;
