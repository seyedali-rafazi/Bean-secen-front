import React from "react";
import { FaArrowRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchInput from "../../ui/SearchInput";
import EmptySection from "../../ui/EmptySection";
import useUser from "../authentication/useUser";
import FillFavourit from "./FillFavourit";
import PanelSceleton from "../../ui/PanelSceleton";

const categoryGroups = [
  {
    text: "All",
    category: "all",
    url: "",
    id: 1,
  },
  {
    text: "Hot Coffee",
    category: "hotCoffee",
    url: "?category=hotCoffee",
    id: 2,
  },
  {
    text: "Cake",
    category: "cake",
    url: "?category=cake",
    id: 3,
  },
  {
    text: "Milk Shake",
    category: "milkShake",
    url: "?category=milkShake",
    id: 4,
  },
  {
    text: "Beverage",
    category: "beverage",
    url: "?category=beverage",
    id: 5,
  },
];

function FavoutritDashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  const handleClick = (p) => {
    if (p == "all") {
      return setSearchParams("");
    }
    setSearchParams({ category: p });
  };

  return isLoading ? (
    <PanelSceleton />
  ) : (
    <div className="flex flex-col items-center gap-5 border border-secondery-500 rounded-lg p-5">
      <button
        onClick={() => navigate(-1)}
        className="lg:hidden flex justify-start w-full"
      >
        <FaArrowRight />
      </button>
      <p className="flex justify-start w-full font-bold text-lg">Favorites</p>
      <span className="w-full block h-0.5 bg-secondery-500 rounded-full"></span>
      <div className="hidden lg:flex justify-center items-center gap-4 w-full">
        <div className="flex gap-1">
          {categoryGroups.map((categoryGroup) => (
            <div key={categoryGroup.id}>
              <button
                onClick={() => handleClick(categoryGroup.category)}
                className={`bg-rose-100 px-2 py-1.5 rounded-full flex items-center text-xs gap-2 text-secondery-600 ${
                  categoryGroup.url === location.search
                    ? "bg-tint-100 text-primary duration-300"
                    : ""
                }`}
              >
                <span>{categoryGroup.text}</span>
                <FaChevronLeft />
              </button>
            </div>
          ))}
        </div>
        <div>
          <SearchInput />
        </div>
      </div>
      {user.favoriteProduct.length == 0 ? (
        <EmptySection text="You have not registered any favorite foods yet!" />
      ) : (
        <FillFavourit favourits={user.favoriteProduct} />
      )}
    </div>
  );
}

export default FavoutritDashboard;
