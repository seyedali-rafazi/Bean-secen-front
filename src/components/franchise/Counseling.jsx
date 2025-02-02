import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextField from "../../ui/TextField";
import DatePickerField from "../../ui/DatePickerField";

function Counseling() {
  const [name, setName] = useState("");
  const [nationalNumber, setNationalNumber] = useState("");
  const [date, setDate] = useState(new Date(""));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onCkickSubmit = () => {
    toast.success("Submitted successfully");
  };
  return (
    <div>
      <h2 className="w-full font-bold text-xl text-center">Get advice</h2>
      <div>
        <form
          className="flex flex-col gap-10 items-center justify-center h-full w-full px-4"
          onSubmit={handleSubmit(onCkickSubmit)}
        >
          <div className="flex flex-col justify-center items-center lg:flex-row gap-8 p-3 w-full ">
            <TextField
              className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
              placeholder="Name and Last Name"
              errors={errors}
              name="name"
              type="text"
              value={name}
              onChange={(v) => setName(v.target.value)}
              register={register}
              validationSchema={{
                required: "Name and Last Name are necessary",
              }}
            />
            <TextField
              className="border border-secondery-400 p-2 rounded-sm w-full h-[44px]"
              placeholder="National Code"
              errors={errors}
              name="nationalNumber"
              type="number"
              value={nationalNumber}
              onChange={(v) => setNationalNumber(v.target.value)}
              register={register}
              validationSchema={{
                required: "The national code is essential",
              }}
            />
            <DatePickerField
              date={date}
              setDate={setDate}
              label="Consultation History"
            />
          </div>
          <button
            type="submit"
            className="col-start-1 mx-auto  font-bold text-secondery-50 bg-primary py-2 rounded-md w-auto px-5"
          >
            Consultation request
          </button>
        </form>
      </div>
    </div>
  );
}

export default Counseling;
