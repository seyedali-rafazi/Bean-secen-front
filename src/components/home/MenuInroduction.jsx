import React from "react";
import { Link } from "react-router-dom";

function MenuInroduction() {
  return (
    <div className="flex justify-between items-center p-6 max-w-[1100px] mx-auto gap-4">
      <div className="w-full md:w-3/5  space-y-10">
        <h2 className="text-prBrown font-bold text-3xl">
          Discover the best coffee
        </h2>
        <p className="text-justify">
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <div>
          <Link
            to="/branch-menu/mainfood"
            className="bg-primary px-3 py-2 rounded-2xl font-medium"
          >
            Reach more
          </Link>
        </div>
      </div>
      <div className=" md:w-2/5 hidden md:block">
        <img src="/styles/cup-of-coffee.png" alt="" />
      </div>
    </div>
  );
}

export default MenuInroduction;
