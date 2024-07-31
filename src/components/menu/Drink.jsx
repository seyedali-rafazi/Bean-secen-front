import React from "react";
import Filter from "./Filter";
import Section from "./Section";
import useDrink from "./useDrink";
import FoodLoadingSkeleton from "../../ui/FoodLoadingSkeleton";

const drinkGroup = [
  {
    text: "All",
    foodGroup: "all",
    url: "",
    id: 1,
  },
  {
    text: "Iced Tea",
    foodGroup: "icedTea",
    url: "?foodGroup=icedTea",
    id: 2,
  },
  {
    text: "Iced Energy",
    foodGroup: "icedEnergy",
    url: "?foodGroup=icedEnergy",
    id: 3,
  },
];

function Drink() {
  const { drink, isLoading } = useDrink();
  return (
    <div className="container max-w-6xl space-y-6">
      <Filter products={drinkGroup} />
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <FoodLoadingSkeleton key={index} />
          ))}
        </div>
      ) : (
        <Section foods={drink} />
      )}
    </div>
  );
}

export default Drink;
