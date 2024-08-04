import React from "react";
import Modal from "./Modal";
import { userLogout } from "../services/userAuthService";

function Exist({ open, onClose }) {
  const handleLogout = async () => {
    await userLogout();
    document.location.href = "/";
  };

  return (
    <Modal logo="Exit" open={open} onClose={onClose}>
      <div className="flex flex-col w-full justify-center items-center gap-8 mt-5">
        <p className="font-semibold">Do you want to exit ?</p>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="bg-primary font-bold  min-w-24 px-3 sm:px-16 py-2 text-secondery-50 rounded-lg"
          >
            Cancell
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 font-bold px-3 min-w-24 sm:px-16 py-2 text-secondery-50 rounded-lg"
          >
            Exit
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Exist;
