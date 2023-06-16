import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { BsEye, BsWind, BsWater, BsThermometer } from 'react-icons/bs';
const States = ({ data }) => {
  return (
    <div className='max-w-[378px] mx-auto flex flex-col gap-y-6'>
      {/* row details */}
      <div className='flex justify-between '>
        {/* one item detail*/}
        <div className='flex items-center gap-x-2'>
          {/* icon */}
          <div className='text-[20px]'>
            <BsEye />
          </div>
          <div>
            Visibility <span className='ml-2'>{data.visibility / 1000} km</span>
          </div>
        </div>
        {/* one item detail */}
        <div className='flex items-center gap-x-2'>
          {/* icon */}
          <div className='text-[20px]'>
            <BsThermometer />
          </div>
          <div className='flex'>
            Feels like
            <div className='flex ml-2'>
              {parseInt(data.main.feels_like)}
              <TbTemperatureCelsius />
            </div>
          </div>
        </div>
      </div>
      {/* row details */}
      <div className='flex justify-between '>
        {/* one item detail */}
        <div className='flex items-center gap-x-2'>
          {/* icon */}
          <div className='text-[20px]'>
            <BsWater />
          </div>
          <div>
            Humidity <span className='ml-2'>{data.main.humidity} %</span>
          </div>
        </div>
        {/* one item detail */}
        <div className='flex items-center gap-x-2'>
          {/* icon */}
          <div className='text-[20px]'>
            <BsWind />
          </div>
          <div>
            Wind<span className='ml-2'>{data.wind.speed} m/s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
