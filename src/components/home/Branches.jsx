import React from "react";

const branches = [
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-1 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "Seattle",
    address: "1912 Pike Place, Seattle, WA 983101, USA",
    id: 1,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-2 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "Tokyo",
    address: "2-19-23 Aobadai, Meguro City, Tokyo 153-03042, Japan",
    id: 2,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-3 w-full  h-full min-h-[112px] md:h-[230px]",
    nameBranch: "Beijing",
    address: "43 Jingshan Front St, Dongcheng, Beijing, China",
    id: 3,
  },
  {
    imgstyle:
      "bg-cover bg-center bg-home-branch-4 w-full h-full min-h-[112px] md:h-[230px]",
    nameBranch: "Milano",
    address: "Piazza Cordusio, 3, 203123 Milano MI, Italy",
    id: 4,
  },
];

function Branches() {
  return (
    <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mx-auto px-3 py-3 lg:px-12">
      {branches.map((branche) => (
        <div
          className="grid grid-rows-1 grid-cols-2 lg:grid-cols-1 gap-3 rounded-lg overflow-hidden  border border-secondery-500 z-30 hover:border-primary hover:shadow-lg duration-300"
          key={branche.id}
        >
          <div className={`${branche.imgstyle}`}></div>
          <div className="flex flex-col justify-center items-center gap-1 px-2 py-3">
            <p className="font-bold md:text-lg text-sm text-secondery-800 text-justify">
               {branche.nameBranch}
            </p>
            <p className="text-[10px] md:text-sm  text-secondery-600 leading-4 text-center">
              {branche.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Branches;
