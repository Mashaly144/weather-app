/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Form from './component/Form';
import States from './component/States';
import Card from './component/Card';
import Loader from './component/Loader';
import axios from 'axios';
import {
  IoMdSearch,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdSunny,
  IoMdThunderstorm,
} from 'react-icons/io';
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWind,
  BsWater,
  BsThermometer,
} from 'react-icons/bs';

import { TbTemperatureCelsius } from 'react-icons/tb';
import { ImSpinner8 } from 'react-icons/im';

// api key
const APIkey = '75fdd7c106bc378e549eddf71d689287';

const App = () => {
  // // state
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('egypt');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  // handle user input
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  // handle search button
  const handleSubmit = (e) => {
    if (inputValue !== '') {
      setLocation(inputValue);
    }
    const input = document.querySelector('input');
    if (input.value === '') {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    input.value = '';
    // prevent
    e.preventDefault();
  };

  // // fetch data
  useEffect(() => {
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}
    `;

    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setData(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
  }, [location]);

  // error message
  useEffect(() => {
    return () => {
      const timer = setTimeout(() => {
        setErrorMsg('');
      }, 1500);
      return () => clearTimeout(timer);
    };
    // clear
  }, [errorMsg]);

  // if data is false
  if (!data) {
    return (
      <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
        <div>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full bg-gradientBg h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0'>
      {errorMsg && (
        <div className='w-full max-w-[90vw] lg:max-w-[450px] bg-[#ff208c] text-white absolute top-2 lg:top-10 p-4 capitalize rounded-md'>{`${errorMsg.response.data.message}`}</div>
      )}
      {/* form */}
      <Form
        animate={animate}
        handleSubmit={handleSubmit}
        handleInput={handleInput}
      />

      {/* card */}
      <Card data={data} loading={loading} />
      <footer className='text-white font-light text-[15px] mt-4'>
        Made By Abdallah Mashaly
      </footer>
    </div>
  );
};

export default App;
