import { FaStar } from "react-icons/fa";
import { truncateText } from "../../utils/truncateText";
import LikeFood from "../../ui/LikeFood";
import { OrderButton } from "../../ui/Button";
import { Link } from "react-router-dom";

function Section({ foods }) {
  return (
    <div>
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 p-5">
        {foods.map((food) => (
          <div
            key={food._id}
            className="border rounded-lg border-rose-100 flex min-h-36"
          >
            <Link to={`/food-details/${food._id}`} className="rounded-r-lg">
              <div className="relative w-32 h-full bg-cover rounded-lg">
                <img
                  role="presentation"
                  onError={(e) => {
                    e.currentTarget.src = "/styles/gingerbread-cappuccino.webp";
                  }}
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                  src={food.imageLink}
                  alt={food.title}
                />
              </div>
            </Link>
            <div className="flex flex-col justify-between gap-2 p-2 w-full">
              <div className="flex gap-2 justify-between items-center sm:flex-col">
                <div className="flex sm:justify-between sm:items-center w-full h-full">
                  <h3 className="font-semibold text-sm sm:text-lg text-secondery-800">
                    {food.title}
                  </h3>
                  <span className="hidden sm:block">
                    <LikeFood id={food._id} />
                  </span>
                </div>

                <div className="flex justify-end sm:justify-between items-center w-full">
                  <p className="hidden sm:block text-sm text-secondery-600">
                    {truncateText(food.description, 30)}
                  </p>
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-xl text-secondery-600">
                        {food.discount == 0 ? "" : <s>{food.price}</s>}
                      </span>
                      <span
                        className={`${
                          food.discount == 0
                            ? ""
                            : "bg-rose-200 text-rose-500 px-1 py-0.5 rounded-full text-sm"
                        } text-lg`}
                      >
                        {food.discount == 0 ? (
                          ""
                        ) : (
                          <span>{food.discount}%</span>
                        )}
                      </span>
                    </div>
                    <span className="font-bold text-xl">
                      {food.offPrice == 0 ? food.price : food.offPrice}
                      &nbsp;$
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="hidden sm:flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="sm:hidden">
                  <LikeFood id={food._id} />
                </span>
                <OrderButton id={food._id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
