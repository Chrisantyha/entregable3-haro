
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
    <main className=' grid  text-base min-h-full bg-[url("./images/fondo.png")] max-w-[1200px] bg-cover '>
         <LocationForm handleSubmit = {handleSubmit}/>  
      
          <LocationInfo currentLocation =  {currentLocation}/>
          <ResidentList residents = {currentLocation?.residents ?? []}/>         

      
    </main>
  )
}

export default App
