import React from "react";
import sunnyMidRainIcon from "../assets/img/sun-cloud-mid-rain.webp";
import degreeIcon from "../assets/img/degree-icon.svg";
import heartIcon from "../assets/img/heart-icon.svg";

const YourCity = () => {
  return (
    <div className="mt-[24px]">
      <h2 className="text-[20px] text-[#FFFFFF] font-medium mb-[10px]">
        Your City
      </h2>
      <div className="bg-[#FFFFFF] py-[16px] pl-[10px] pr-[50px] rounded-[20px]">
        <div className=" flex justify-between items-center ">
          <div className="flex flex-col justify-between gap-[16px]">
            <div className="flex items-center gap-x-[10px]">
              <div>
                <img
                  className="w-[70px]"
                  src={sunnyMidRainIcon}
                  alt="weather"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[26px] text-[#333333] font-semibold leading-[24px]">
                  Munnar
                </h3>
                <p className="text-[14px] text-[#A8A8A8] font-normal">6:00AM</p>
              </div>
            </div>
            <div>
              <p className="text-[20px] text-[#575757] font-semibold pl-[14px]">
                Light rain forcasted
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute right-[-12px] top-[12px]">
              <img className="w-[16px]" src={degreeIcon} alt="degree" />
            </div>
            <span className="text-[64px] text-[#000000] font-bold">24</span>
          </div>
        </div>
        <div className="pl-[14px] pt-[10px]">
          <div>
            <img src={heartIcon} alt="favorite" />
          </div>
        </div>
      </div>
      {/* 5-days forcast */}
      <div className="mt-[16px]">
        <div className="grid grid-cols-5 gap-[8px] lg:gap-[16px]">
          <div className="bg-[#FFFFFF] p-2 lg:p-4 rounded-[12px] lg:rounded-[20px] flex flex-col justify-between items-center">
            <div>
              <p className="text-[16px] lg:text-[20px] text-[#000000] font-semibold">
                MON
              </p>
            </div>
            <div>
              <img src={sunnyMidRainIcon} alt="weather" />
            </div>
            <div>
              <p className="text-[16px] lg:text-[18px] text-[#000000] font-semibold">
                24°
              </p>
            </div>
          </div>
          {/*  */}
          <div className="bg-[#FFFFFF] p-2 lg:p-4 rounded-[12px] lg:rounded-[20px] flex flex-col justify-between items-center">
            <div>
              <p className="text-[16px] lg:text-[20px] text-[#000000] font-semibold">
                MON
              </p>
            </div>
            <div>
              <img src={sunnyMidRainIcon} alt="weather" />
            </div>
            <div>
              <p className="text-[16px] lg:text-[18px] text-[#000000] font-semibold">
                24°
              </p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-2 lg:p-4 rounded-[12px] lg:rounded-[20px] flex flex-col justify-between items-center">
            <div>
              <p className="text-[16px] lg:text-[20px] text-[#000000] font-semibold">
                MON
              </p>
            </div>
            <div>
              <img src={sunnyMidRainIcon} alt="weather" />
            </div>
            <div>
              <p className="text-[16px] lg:text-[18px] text-[#000000] font-semibold">
                24°
              </p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-2 lg:p-4 rounded-[12px] lg:rounded-[20px] flex flex-col justify-between items-center">
            <div>
              <p className="text-[16px] lg:text-[20px] text-[#000000] font-semibold">
                MON
              </p>
            </div>
            <div>
              <img src={sunnyMidRainIcon} alt="weather" />
            </div>
            <div>
              <p className="text-[16px] lg:text-[18px] text-[#000000] font-semibold">
                24°
              </p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] p-2 lg:p-4 rounded-[12px] lg:rounded-[20px] flex flex-col justify-between items-center">
            <div>
              <p className="text-[16px] lg:text-[20px] text-[#000000] font-semibold">
                MON
              </p>
            </div>
            <div>
              <img src={sunnyMidRainIcon} alt="weather" />
            </div>
            <div>
              <p className="text-[16px] lg:text-[18px] text-[#000000] font-semibold">
                24°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCity;
