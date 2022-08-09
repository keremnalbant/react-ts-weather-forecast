import React from 'react'

const Forecast = ({title}) => {
  return (
    <div>
        <div className="flex items-center justify-start my-6">
            <p className='text-white font-medium uppercase -mb-5'>
                {title}
            </p>
        </div>
        <hr className='my-2 rounded-full border-2' />
        <div className='flex flex-row items-center justify-between text-white'>
            <div className="flex flex-col items-center justify-center">
                <p className='font-medium text-sm'>
                    04:30 PM
                </p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-medium text-sm'>
                    04:30 PM
                </p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-medium text-sm'>
                    04:30 PM
                </p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-medium text-sm'>
                    04:30 PM
                </p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className='font-medium'>22°</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className='font-medium text-sm'>
                    04:30 PM
                </p>
                <img className='w-12 my-1' src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
                <p className='font-medium'>22°</p>
            </div>
            
        </div>
    </div>
  )
}

export default Forecast