import React from "react";

const Showcase = () => {
  return (
    <div className='showcase max-w-6xl lg:mx-auto pt-4 lg:relative h-full'>
      <div className='showcase-image '>
        <img
          src='https://images.unsplash.com/photo-1547245324-d777c6f05e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          alt=''
          className='md:w-[80%] rounded md:h-96 md:object-cover md:ml-20'
        />
      </div>

      <div className='show-content md:w-full md:absolute md:top-10 md:left-24'>
        <div className='form-content md:w-80 md:h-64 bg-white  rounded p-8'>
          <h2 className='text-xl text-center text-blue-950'>
            Find your perfect car
          </h2>
          <div className='form-inputs py-4'>
            <div className='flex-container select flex gap-2'>
              <select
                name='cars'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option value='make'>Make</option>
                <option value='volvo'>volvo</option>
                <option value='bmw'>BMW</option>
                <option value='audi'>Audi</option>
                <option value='mercedes'>Mercedes</option>
              </select>

              <select
                name='cars'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option value='model'>Model</option>
                <option value='volvo'>volvo</option>
                <option value='bmw'>BMW</option>
                <option value='audi'>Audi</option>
                <option value='mercedes'>Mercedes</option>
              </select>
            </div>

            <div className='flex-continer buttons flex gap-2 py-2'>
              <button className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                Cash
              </button>
              <button className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                Finance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
