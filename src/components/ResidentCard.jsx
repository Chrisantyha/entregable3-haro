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
    // aqui trato de fusionar las dos cajas
    <article className='  w-[285px] h-80           grid grid-rows-[auto_auto] place-items-center select-none  '>
        <header className='   text-center relative z-10'>
            {/* aqui abajo hago redonda la image */}
            <img className='  h-[150px] aspect-square border-solid border-[5px] border-[#893446] rounded-full' src={residentInfo?.image} alt='' />
            
           
                <div className='h-[10px] aspect-square bg-green-500 rounded-full  text-base font-nunito '> </div>
                    {
                     residentInfo?.status
                    }
              
        </header>



        
        <section className='border-solid border-[8px] border-[#893446]'>
            <h3 className='bg-[#FEEF66] h-[130px] text-2xl text-center font-nunito text-red-wine pb-5 flex items-center justify-center pt-[60px] w-full scaleCard transition-all '> Name:{residentInfo?.name} </h3>
            <ul>
                <li className='text-2xl grid grid-cols-2'>Species:<span className='text-white'> {residentInfo?.species} </span></li>
                <li className='text-2xl grid grid-cols-2'> Origin:<span className='text-white'>{residentInfo?.origin.name}</span> </li>
                <li className='text-2xl grid grid-cols-2'>Times appear:<span className='text-white'>{residentInfo?.episode.length}</span> </li>
            </ul>
        </section>


        
    </article>
  )
}

export default ResidentCard