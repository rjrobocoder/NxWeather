import React from "react";
import settingsIcon from "../assets/img/setting-icon.svg";
import degreeIcon from "../assets/img/degree-icon.svg";
import sunnyMidRainIcon from "../assets/img/sun-cloud-mid-rain.webp";

const WeatherCard = () => {
  return (
    <div className="bg-[#C5FD38] rounded-bl-[48px] rounded-br-[48px] lg:rounded-[48px] lg:w-[70%] flex flex-col justify-between p-[30px]">
      <div className="flex justify-between items-center">
        <div className="min-w-[72px]">
          <img className="w-[24px] settings-icon cursor-pointer" src={settingsIcon} alt="settings" title="Coming Soon: This feature is currently under development and will be available soon. Stay tuned!"/>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] text-[#000000] font-medium">Munnar</h1>
          <h2 className="text-[16px] text-[#333333] font-normal">Favorable</h2>
        </div>
        <div className="min-w-[72px] flex justify-end">
        {/* TODO: change to °F */}
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-14 h-[32px] bg-[#333333] peer-focus:outline-none rounded-full peer dark:bg-[#333333] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-['°C'] after:font-semibold after:absolute after:top-[4px] after:start-[4px] after:bg-[#C5FD38] after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6  after:transition-all dark:border-gray-600 peer-checked:bg-[#333333]"></div>
          </label>
        </div>
      </div>
      <div className="flex flex-col lg:gap-[10px] items-center justify-center">
        <div className="relative">
          <div className="absolute right-[-17px] top-[0px] lg:top-[-17px]">
            <img className="w-[30px] lg:w-[40px]" src={degreeIcon} alt="°" />
          </div>
          <p className="text-[130px] lg:text-[195px] text-[#000000] font-bold leading-[140px] lg:leading-[180px]">
            22
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <img className="w-[60px]" src={sunnyMidRainIcon} alt="weather" />
          </div>
          <div>
            <p className="text-[20px] text-[#333333] font-medium">
              Mostly Sunny
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px] justify-center text-[22px] text-[#000000] font-medium">
        <p>H: 84°</p>
        <p>L: 14°</p>
      </div>
    </div>
  );
};

export default WeatherCard;
