import React, { useState } from "react";
import Modal from "../../../ui/Modal";
import TextField from "../../../ui/TextField";
import { useForm } from "react-hook-form";
import { PiPencilSimpleLine } from "react-icons/pi";

function FullAddress({ user, setOpen, open, onCkickSubmitAddress }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [prevAddress, setPrevAddress] = useState(user.address);
  return (
    <div className="w-full md:w-3/4  border rounded-lg border-primary h-auto bg-red-50 p-10">
      <div className=" ">
        <div className="flex gap-3 items-center justify-between">
          <p className="text-secondery-700">{user.address}</p>
          <button onClick={() => setOpen(true)}>
            <PiPencilSimpleLine className="w-6 h-6 text-secondery-700" />
          </button>
        </div>
        <div></div>
      </div>
      <Modal logo="Address" open={open} onClose={() => setOpen(false)}>
        <form
          className="w-full space-y-4"
          onSubmit={handleSubmit(onCkickSubmitAddress)}
        >
          <TextField
            className="textField"
            placeholder="Address:"
            errors={errors}
            name="address"
            type="text"
            value={prevAddress}
            onChange={(e) => setPrevAddress(e.target.value)}
            register={register}
            validationSchema={{
              required: "Address is required",
            }}
          />
          <button
            type="submit"
            className="w-full font-bold text-slate-50 bg-primary py-2 rounded-md"
          >
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default FullAddress;
