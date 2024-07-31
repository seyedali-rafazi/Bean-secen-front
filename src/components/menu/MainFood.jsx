import React from "react";
import Filter from "./Filter";
import Section from "./Section";
import useMainFood from "./useMainfood";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const mainFoodGroup = [
  {
    text: "All",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "Americanos",
    foodGroup: "americanos",
    url: "?foodGroup=americanos",
    id: 2,
  },
  {
    text: "Brewed Coffees",
    foodGroup: "brewedCoffees",
    url: "?foodGroup=brewedCoffees",
    id: 3,
  },
  {
    text: "Cappuccinos",
    foodGroup: "cappuccinos",
    url: "?foodGroup=cappuccinos",
    id: 4,
  },
];

function MainFood() {
  const { mainFood, isLoading } = useMainFood();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={mainFoodGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={mainFood} />
      )}
    </div>
  );
}

export default MainFood;
