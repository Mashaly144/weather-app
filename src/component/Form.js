import React from 'react';
// icons
import { IoMdSearch } from 'react-icons/io';

const Form = ({ animate, handleInput, handleSubmit }) => {
  return (
    <form
      className={`${
        animate ? 'animate-shake' : 'animate-none'
      } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
    >
      <div className='h-full relative flex items-center justify-between p-2'>
        <input
          onChange={(e) => handleInput(e)}
          type='text'
          placeholder='Search by city or country'
          className='flex-1 bg-transparent outline-none placeholder:text-white text-white font-light text-[15px] pl-6 h-full'
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className='bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex items-center transition justify-center'
        >
          <IoMdSearch className='text-2xl text-white' />
        </button>
      </div>
    </form>
  );
};

export default Form;
