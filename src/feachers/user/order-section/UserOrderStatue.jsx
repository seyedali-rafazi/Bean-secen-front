import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";

function UserOrderStatue({ orders }) {
  return (
    <div className="h-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          450: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {orders.map((userOrder) => (
          <div className="w-full h-full" key={userOrder._id}>
            <SwiperSlide className="flex flex-col border-2 border-secondery-200 rounded-xl h-full ">
              <div className="relative w-full">
                <div className="relative w-full h-32 bg-cover rounded-lg">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    src={userOrder.imageLink}
                    alt=""
                  />
                </div>
                <span className="absolute left-2 bottom-2 rounded-md px-2 bg-secondery-50 text-primary">
                  <span className="text-xs">x</span>
                  {userOrder.quantity.quantity}
                </span>
              </div>
              <div className="flex flex-col justify-center items-center text-sm text-secondery-700 h-full">
                <p>{userOrder.title}</p>
                <p>{userOrder.offPrice}&nbsp;$</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default UserOrderStatue;
