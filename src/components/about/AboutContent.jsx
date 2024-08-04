import React from "react";

function AboutContent() {
  return (
    <div className="space-y-4 p-5">
      <h2 className="font-bold text-xl md:text-3xl text-secondery-800">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center content-center gap-8 w-full">
        <div className="order-2 md:order-1">
          <p className="text-secondery-600 text-justify text-sm md:text-lg leading-8">
            Bean Scene chain restaurants were opened in 2000 and during these
            years they have always been trying to satisfy their customers by
            providing high quality food and fast and timely service. During
            these years, customer satisfaction has been the priority.
            <br />
            In this regard, Bean Scene has always tried to keep the quality of
            its food in the best condition during these times and has kept its
            price stable even with the fluctuations in the prices of raw
            materials in the market. Bean Scene has opened its branches, which
            are very stylish and modern, and for holding small and big
            celebrations, dear customers, they have the ability to serve high
            quality food. Shaabat reception hall on two separate floors with
            modern staircase and elevator for disabled and elderly people are
            ready to provide service to you dear ones.
            <br />
            Vision: In the near future, the reception hall of the branches will
            be set up and will be ready to hold your big celebrations and
            events. Hoping that day that all Iranians will be safe and sound.
          </p>
        </div>
        <div className="md:order-2 flex justify-center">
          <img
            className="object-cover object-center"
            src="/styles/about-content.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
