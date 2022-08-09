import React from 'react'
import * as Unicons from "@iconscout/react-unicons";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p>Cloudy or whatever</p>
      </div>
      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img className='w-28' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        <p className='ml-4 text-4xl font-semibold'>34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
          <Unicons.UilTemperature size={18} className="mr-1"/>
          Real feel:
          <span className='font-medium ml-1'>32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
          <Unicons.UilTear size={18} className="mr-1"/>
          Humidity:
          <span className='font-medium ml-1'>65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
          <Unicons.UilWind size={18} className="mr-1"/>
          Wind:
          <span className='font-medium ml-1'>11 km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <Unicons.UilSun size={18} className="mr-1"/>
        <p className='font-light'>Rise: <span className='font-medium ml-1'>06:45 AM</span></p>
        
        <p className='font-light'>|</p>

        <Unicons.UilSunset size={18} className="mr-1" />
        <p className="font-light">
          Set: <span className="font-medium ml-1">07:45 PM</span>
        </p>
        
        <p className="font-light">|</p>

        <Unicons.UilArrowUp size={18} className="mr-1" />
        <p className="font-light">
          High: <span className="font-medium ml-1">38°</span>
        </p>
        
        <p className="font-light">|</p>
        
        <Unicons.UilArrowDown size={18} className="mr-1" />
        <p className="font-light">
          Low: <span className="font-medium ml-1">19°</span>
        </p>
      </div>
    </div>
  )
}

export default TemperatureAndDetails