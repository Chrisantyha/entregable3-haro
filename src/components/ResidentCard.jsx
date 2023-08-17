//renderiza cada una de las tarejteas donde se presenta residente
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({residentUrl}) => {
    // console.log(residentUrl)
    const [residentInfo, setResidentInfo] = useState(null)


    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data})=> setResidentInfo(data))
            .catch((err)=> console.log(err))  
    }, [])
    
  return (
    <article className=' w-[260px] h-80 grid grid-rows-[auto_auto] place-items-center select-none  '>
        <header className=' text-center relative z-10'>
            <img className='h-[150px] aspect-square border-solid border-[8px] border-red-400 rounded-full' src={residentInfo?.image} alt='' />
            <div className='bg-dark-gray/70 flex gap-2 justify-center items-center text-white w-[90px] p-[2px] rounded-full absolute bottom-1 right-1/2 translate-x-1/2 text-sm'>
                <div className='h-[10px] aspect-square bg-green-500 rounded-full  text-base font-nunito '> </div>
                    {
                     residentInfo?.status
                    }
                </div>
        </header>
        <section className='border-solid border-[8px] border-red-400'>
            <h3 className='bg-[#FEEF66] h-[130px] text-2xl text-center font-nunito text-red-wine pb-4 flex items-center justify-center pt-[60px] w-full scaleCard transition-all '> Name:{residentInfo?.name} </h3>
            <ul>
                <li className='text-2xl'>Species:<span className='text-white'> {residentInfo?.species} </span></li>
                <li className='text-2xl'> Origin:<span className='text-white'>{residentInfo?.origin.name}</span> </li>
                <li className='text-2xl'>Times appear:<span className='text-white'>{residentInfo?.episode.length}</span> </li>
            </ul>
        </section>


        
    </article>
  )
}

export default ResidentCard