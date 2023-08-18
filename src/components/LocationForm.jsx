//estructiura donde ususario busca sus dimensiones
import React from 'react'

const LocationForm = ({handleSubmit}) => {
  return (
    
    <form  onSubmit = {handleSubmit }  className=' mx-auto w-[250px] bg-white rounded-full overflow-hidden pl-4 border-4 border-[#893446] flex justify-between font-bold mt-8 min-[500px]:w-[350px]'    >
      
      <input 
        className='text-black max-w-max'
        min={1}
        max={126}
        id="newLocation"
        placeholder = "Type a loation id..."
        type = "number"
        
         
      
      />
      
      <button className="bg-light-yellow p-2 px-6 text-red-wine text-lg rounded-full border-l-4 border-2-[#893446] ">Search</button>
    </form>
  )
}

export default LocationForm