import React from "react";
import sunnyMidRainIcon from "../assets/img/sun-cloud-mid-rain.webp";
import degreeIcon from "../assets/img/degree-icon.svg";
import heartIcon from "../assets/img/heart-icon.svg";

const FavoriteCity = () => {
  return (
    <div className="mt-[24px]">
      <h2 className="text-[20px] text-[#FFFFFF] font-medium mb-[10px]">
        Favorite City
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {/* card 1 */}
        <div className="bg-[#FFFFFF] py-[16px] pl-[10px] pr-[50px] rounded-[20px]">
          <div className=" flex justify-between items-center ">
            <div className="flex flex-col justify-between gap-[16px]">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <img
                    className="w-[60px]"
                    src={sunnyMidRainIcon}
                    alt="weather"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] text-[#333333] font-semibold leading-[24px]">
                    Munnar
                  </h3>
                  <p className="text-[14px] text-[#A8A8A8] font-normal">
                    6:00AM
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-[#575757] font-semibold pl-[14px]">
                  Light rain forcasted
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-[-12px] top-[10px]">
                <img className="w-[12px]" src={degreeIcon} alt="degree" />
              </div>
              <span className="text-[50px] text-[#000000] font-bold">24</span>
            </div>
          </div>
          <div className="pl-[14px] pt-[10px]">
            <div>
              <img src={heartIcon} alt="favorite" />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-[#FFFFFF] py-[16px] pl-[10px] pr-[50px] rounded-[20px]">
          <div className=" flex justify-between items-center ">
            <div className="flex flex-col justify-between gap-[16px]">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <img
                    className="w-[60px]"
                    src={sunnyMidRainIcon}
                    alt="weather"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] text-[#333333] font-semibold leading-[24px]">
                    Munnar
                  </h3>
                  <p className="text-[14px] text-[#A8A8A8] font-normal">
                    6:00AM
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-[#575757] font-semibold pl-[14px]">
                  Light rain forcasted
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-[-12px] top-[10px]">
                <img className="w-[12px]" src={degreeIcon} alt="degree" />
              </div>
              <span className="text-[50px] text-[#000000] font-bold">24</span>
            </div>
          </div>
          <div className="pl-[14px] pt-[10px]">
            <div>
              <img src={heartIcon} alt="favorite" />
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="bg-[#FFFFFF] py-[16px] pl-[10px] pr-[50px] rounded-[20px]">
          <div className=" flex justify-between items-center ">
            <div className="flex flex-col justify-between gap-[16px]">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <img
                    className="w-[60px]"
                    src={sunnyMidRainIcon}
                    alt="weather"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] text-[#333333] font-semibold leading-[24px]">
                    Munnar
                  </h3>
                  <p className="text-[14px] text-[#A8A8A8] font-normal">
                    6:00AM
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] text-[#575757] font-semibold pl-[14px]">
                  Light rain forcasted
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute right-[-12px] top-[10px]">
                <img className="w-[12px]" src={degreeIcon} alt="degree" />
              </div>
              <span className="text-[50px] text-[#000000] font-bold">24</span>
            </div>
          </div>
          <div className="pl-[14px] pt-[10px]">
            <div>
              <img src={heartIcon} alt="favorite" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCity;
