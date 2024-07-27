import React from "react";
import { baseLogoWH } from "../icons/Base-icons";
import { instagram, telegram, twitter } from "../icons/SocialMedia-icon";

const FooterConDownDatas = [
  {
    id: 1,
    header: "About",
    contents: [
      { id: 1, muli: "Menu" },
      { id: 2, muli: "Features" },
      { id: 3, muli: "News & Blogs" },
      { id: 4, muli: "Help & Supports" },
    ],
  },
  {
    id: 2,
    header: "Company",
    contents: [
      { id: 1, muli: "How we work" },
      { id: 2, muli: "Terms of service" },
      { id: 3, muli: "Pricing" },
      { id: 4, muli: "FAQ" },
    ],
  },
  {
    id: 3,
    header: "Contact Us",
    contents: [
      {
        id: 1,
        muli: "61 9th Avenue, New York, NY 10011, USA",
      },
      { id: 2, muli: "seyedalirafazi80@mail.com" },
    ],
  },
];

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-cover bg-home-footer bg-center w-full  mt-14 justify-center content-center gap-12 bottom-0 p-8 md:p-16 ">
      <div className="flex flex-col gap-5 md:w-2/5">
        <div>{baseLogoWH}</div>
        <p className="text-white text-justify">
          At Bean Scene, coffee isn't just a beverage—it's an art form. The
          passionate baristas are true coffee artisans, expertly crafting each
          drink with precision and care. From single-origin pour-overs to
          innovative signature lattes, every cup is a testament to their
          dedication to quality and flavor.
        </p>
        <ul className="flex gap-2 text-white">
          <li>{instagram}</li>
          <li>{telegram}</li>
          <li>{twitter}</li>
        </ul>
      </div>
      <div className="flex text-white gap-6 flex-wrap md:w-3/5">
        {FooterConDownDatas.map((FooterConDownData) => (
          <div className="flex flex-col  gap-5" key={FooterConDownData.id}>
            <h2 className="font-semibold">{FooterConDownData.header}</h2>
            <div className="flex flex-col">
              {FooterConDownData.contents.map((content) => (
                <span key={content.id}>{content.muli}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
