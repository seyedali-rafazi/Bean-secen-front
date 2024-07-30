import React from "react";

const branches = [
  {
    image: "/styles/ekbatan.jpg",
    branchetitle: "New York Branch",
    brancheAdrress: "Address: 123 Broadway, New York, NY 10006",
    brancheNumber: "Contact Number: +1 212-555-1234",
    brancheWorkTime: "Working Hours: Daily from 12 PM to 11 PM except holidays",
    id: 1,
  },
  {
    image: "/styles/chalos.jpg",
    branchetitle: "Paris Branch",
    brancheAdrress:
      "Address: 45 Avenue de la Grande Armée, 75116 Paris, France",
    brancheNumber: "Contact Number: +33 1 45 67 89 10",
    brancheWorkTime: "Working Hours: Daily from 12 PM to 11 PM except holidays",
    id: 2,
  },
  {
    image: "/styles/aghdasieh.jpg",
    branchetitle: "Tokyo Branch",
    brancheAdrress:
      "Address: 2-1-1 Nihonbashi, Chuo City, Tokyo 103-0027, Japan",
    brancheNumber: "Contact Number: +81 3-1234-5678",
    brancheWorkTime: "Working Hours: Daily from 12 PM to 11 PM except holidays",
    id: 3,
  },
  {
    image: "/styles/vanak.jpg",
    branchetitle: "London Branch",
    brancheAdrress: "Address: 221B Baker Street, London NW1 6XE, UK",
    brancheNumber: "Contact Number: +44 20 7946 0958",
    brancheWorkTime: "Working Hours: Daily from 12 PM to 11 PM except holidays",
    id: 4,
  },
];

function CallFrenchies() {
  return (
    <div className="flex flex-col px-3 md:px-10 gap-8">
      {branches.map((branche) => (
        <div
          key={branche.id}
          className="w-full h-fit border border-secondery-400 rounded-lg grid grid-cols-1 md:grid-cols-2 hover:shadow-lg hover:border hover:border-primary duration-300"
        >
          <div className="w-full h-32 md:h-72 rounded-lg">
            <img
              className="object-center object-cover w-full h-full rounded-t-lg md:rounded-r-lg md:rounded-tl-none"
              src={branche.image}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center p-4">
            <h2 className="text-lg mb-4">{branche.branchetitle}</h2>
            <div className="flex flex-col justify-center items-center text-secondery-500 text-xs md:text-sm text-center">
              <span>{branche.brancheAdrress}</span>
              <span>{branche.brancheNumber}</span>
              <span>{branche.brancheWorkTime}</span>
            </div>
            <div className="flex gap-3">
              <button className="text-primary bg-secondery-50 border border-primary rounded-md px-4 py-1 text-xs md:text-sm">
                Branch page
              </button>
              <button className="text-secondery-50 bg-primary rounded-md px-4 py-1 text-xs md:text-sm">
                See on the map
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CallFrenchies;
