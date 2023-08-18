
import { useEffect, useState } from 'react'
import './App.css'
import {getRandomDimension} from "./utils/random"
import axios from 'axios'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'

function App() {
  const [currentLocation, setCurrentLocation] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newLocation = (event.target.newLocation.value)

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`
    axios
      .get(URL)
      .then(({data})=> setCurrentLocation(data))
      .catch((err)=> console.log(err))

  }



  useEffect(() => {
    
    const randomDimension = getRandomDimension(126)
    const URL = `https://rickandmortyapi.com/api/location/${randomDimension}`
    axios
      .get(URL)
      .then(({data})=> setCurrentLocation(data))
      .catch((err)=> console.log(err))
  }, [])
  
  

  return (
    
    <main className='bg-[url("./images/fondo.png")]  min-h-screen bg-cover px-4 font-Nunito text-black grid grid-rows-[repeat(4,auto)] gap-8 place-items-center relative bg-bottom overflow-hidden'>

      {/* trate de colocar aqui la imagen del logo
      <figure>
      <img src='./images/logos.png' alt='' />

      </figure>

       <section >
        <img class="w-[260px] pt-8 min-[500px]:w-[350px]" src='./image/logo.png' alt='' />
      </section> */}
      

      
      <LocationForm handleSubmit = {handleSubmit}/>  
      
     
      <LocationInfo currentLocation =  {currentLocation}/>
      <ResidentList residents = {currentLocation?.residents ?? []}/>          
       
       
    </main>
  )
}

export default App
