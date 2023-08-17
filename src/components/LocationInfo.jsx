//renderiza la informacion de la dimension
import React from 'react'

const LocationInfo = ({currentLocation}) => {
    // console.log(currentLocation)
  return (
    <section className='bg-[#893446] '>
        <h2 className='text-[#e7ccd2] text-center '>{currentLocation?.name}</h2>
        <ul className='text-[#e7ccd2] grid grid-rows-3 place-items-center text-center gap-1 sm:grid-rows-none sm:grid-cols-3 sm:gap-12'>
            <li>Type:{currentLocation?.type}</li>
            <li>Dimension:{currentLocation?.dimension}</li>
            <li>Population:{currentLocation?.residents.length}</li>
        </ul>
    </section>
  )
}

export default LocationInfo