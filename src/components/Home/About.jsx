import { CgArrowRight } from "react-icons/cg";
import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import img1 from "../../assets/about/about-1.png";

import icon1 from "../../assets/about/icon-1.png";
import icon2 from "../../assets/about/icon-2.png";
import icon3 from "../../assets/about/icon-3.png";
import callicon from "../../assets/icon/call.svg";
import bgpattern from "../../assets/about/shape-1.png";

const About = () => {
  const data = [
    {
      img: icon1,
      heading: "Business Services",
      para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
    },
    {
      img: icon2,
      heading: "Education And Training",
      para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
    },
    {
      img: icon3,
      heading: "Artificial Intelligence",
      para: "As far as we might be concerned making an extraordinary advanc ed experience is a blend bet",
    },
  ];

  return (
    <section className=" h-screen flex font-robo ">
      <div className="absolute z-[-1]  w-[500px]">
        <img src={bgpattern} alt="loading..." />
      </div>
      <div className="w-[90%] m-auto gap-10  flex">
        <div>
          <img className="" src={img1} alt="loading.." />
        </div>
        <div className="w-[60%]  py-16">
          <h1 className="text-xl px-8  wavyUnderline italic  ">best  <span className="text-[#6ee6d9]">it service </span>  </h1>
          <h2 className="text-4xl mt-4 font-bold px-8 font-rele">
            It Industries W're offering
          </h2>
          <div className="grid grid-cols-3  mt-12 ">
            {data.map((val, i) => {
              return (
                <div key={i} className="flex group ">
                  <div className=" px-8" >
                    <img
                      className="group-hover:scale-x-[-1] transition-all duration-500"
                      src={val.img}
                      alt="loading"
                    />
                    <h3 className="text-2xl font-semibold font-rele  mt-6">{val.heading}</h3>
                    <p className="mt-4 leading-[25px] text-gray-500">
                      {val.para}
                    </p>

                    <button className=" mt-8 w-[50px] h-[50px] flex border rounded-full">
                      <BiRightArrowAlt className="m-auto text-xl" />
                    </button>
                  </div>
                  <div className="border h-[75%]  border-dashed"></div>
                </div>
              );
            })}
          </div>
          <div className="flex border mx-auto mt-10 py-2 pl-4 pr-12 rounded-3xl w-fit">
            <img className="w-[23px] mr-2" src={callicon} alt="loading.." />
            Provide IT services to hundreds customers{"  "}
            <span className="underline ml-3">+88 01310-069824</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
