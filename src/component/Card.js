import React from 'react';
// all components
import States from './States';
import TempInfos from './TempInfo';
import CountryInfo from './CountryInfo';
import CardLoader from './CardLoader';
// icons
// import { ImSpinner8 } from 'react-icons/im';

const Card = ({ data, loading }) => {
  return (
    <div className='w-full bg-black/20 max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6'>
      {loading ? (
        <div className='w-full h-full flex justify-center items-center'>
          <CardLoader />
        </div>
      ) : (
        <div>
          {/* section CountryInfo */}
          <CountryInfo data={data} />

          {/* card TempInfos */}
          <TempInfos data={data} />

          {/* states card bottom*/}
          <States data={data} />
        </div>
      )}
    </div>
  );
};

export default Card;
