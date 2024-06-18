import React from "react";
import WeatherCard from "../components/WeatherCard";
import searchIcon from "../assets/img/search-icon.svg";
import YourCity from "../components/YourCity";
import FavoriteCity from "../components/FavoriteCity";

const WeatherDashboard = () => {
  
  return (
    <div className="w-full lg:h-screen flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] pb-[24px] lg:p-[72px] overflow-y-hidden">
      <WeatherCard />
      {/* list */}
      <div
        className={`w-[100%] lg:overflow-y-scroll custom-scrollbar px-[30px] lg:pl-[8px] lg:pr-[30px]`}
      >
        <div>
          <h1 className="text-[32px] text-[#FFFFFF] font-bold">City List</h1>
          <p className="text-[16px] text-[#FFFFFF] font-normal">
            Heavy rain for the next hour
          </p>
          <div className="flex items-center gap-[12px] px-[12px] py-[8px] rounded-[8px] border border-[#E0E0E0] bg-[#FFFFFF] w-fit mt-[20px]">
            <div>
              <img src={searchIcon} alt="search" />
            </div>
            <div>
              <input
                type="search"
                className="w-full max-w-[310px] text-[18px] outline-none"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <YourCity />
        <FavoriteCity />
      </div>
    </div>
  );
};

export default WeatherDashboard;
