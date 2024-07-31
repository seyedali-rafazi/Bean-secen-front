import React from "react";
import MenuLayout from "../components/menu/MenuLayout";
import BranchBar from "../ui/BranchBar";
import NavbarOption from "../ui/NavbarOption";

function BranchMenu() {
  return (
    <MenuLayout>
      <BranchBar>
        <div className="container xl:max-w-[1640px] flex gap-4 justify-center items-center lg:justify-start">
          <NavbarOption path="hotCoffee">Hot Coffee</NavbarOption>
          <NavbarOption path="cake">Cake</NavbarOption>
          <NavbarOption path="milkShake">Milk Shake</NavbarOption>
          <NavbarOption path="Beverage">Beverage</NavbarOption>
        </div>
      </BranchBar>
    </MenuLayout>
  );
}

export default BranchMenu;
