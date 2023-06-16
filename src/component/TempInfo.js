import React from 'react';
import { TbTemperatureCelsius } from 'react-icons/tb';
const TempInfos = ({ data }) => {
  return (
    <div className='my-20 '>
      {/* tempreture */}
      <div className='flex justify-center items-center'>
        <h1 className='text-[144px] leading-none font-light'>
          {parseInt(data.main.temp)}
        </h1>
        {/* celsius icon */}
        <div className='text-4xl'>
          <TbTemperatureCelsius />
        </div>
      </div>
      {/* weather discription */}
      <p className='text-center capitalize'>{data.weather[0].description}</p>
    </div>
  );
};

export default TempInfos;
