import React from "react";
const AdvatagesOptions = [
  {
    text: "Using the well-known Bean Scene brand",
    id: 1,
  },
  {
    text: "Consulting in legal, financial and tax matters",
    id: 2,
  },
  {
    text: "Minimizing investment risk",
    id: 3,
  },
  {
    text: "Marketing and Human Resources Support",
    id: 4,
  },
  {
    text: "Accelerating the investment return process",
    id: 5,
  },
  {
    text: "Getting advice for supplying raw materials and equipment",
    id: 6,
  },
  {
    text: "Expert advice for restaurant management",
    id: 7,
  },
  {
    text: "Incentive schemes to promote sales",
    id: 8,
  },
];
function Advatages() {
  return (
    <div className="space-y-4">
      <h2 className="w-full text-center font-bold text-xl">
        The advantage of getting representation
      </h2>
      <div className="flex w-full md:justify-center items-center justify-start px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AdvatagesOptions.map((AdvatagesOption) => (
            <div
              className="flex justify-center items-center gap-5"
              key={AdvatagesOption.id}
            >
              <span className="h-4 w-4 rotate-45 rounded-sm border-2 border-primary"></span>
              <p className="w-full">{AdvatagesOption.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advatages;
