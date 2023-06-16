import React from 'react';

// all icons
import {
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdSunny,
  IoMdThunderstorm,
} from 'react-icons/io';
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from 'react-icons/bs';

const CountryInfo = ({ data }) => {
  // handle time and year and month
  const date = new Date();

  // handle icons weather
  let icon;
  console.log(data.weather[0].main);
  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;
    case 'Haze':
      icon = <BsCloudHaze2Fill />;
      break;
    case 'Rain':
      icon = <IoMdRainy className='text-[#31cafb]' />;
      break;
    case 'Clear':
      icon = <IoMdSunny className='text-[#ffde33]' />;
      break;
    case 'Drizzle':
      icon = <BsCloudDrizzleFill className='text-[#31cafb]' />;
      break;
    case 'Snow':
      icon = <IoMdSnow className='text-[#31cafb]' />;
      break;
    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
    default:
  }

  return (
    <div className='flex items-center gap-x-5'>
      <div className='text-[87px]'>{icon}</div>
      {/* country name */}
      <div>
        <h1 className='text-2xl font-semibold'>
          {data.name} ,{data.sys.country}
        </h1>
        {/* date */}
        <div>
          {date.getUTCDate()} / {date.getUTCMonth() + 1} /{' '}
          {date.getUTCFullYear()}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
