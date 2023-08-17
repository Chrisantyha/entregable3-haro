//renderiza la lista de residentes

import ResidentCard from './ResidentCard'

const ResidentList = ({residents}) => {
  return (
    <section className='grid sm:grid-cols-2 md:grid-cols-3 p-2 gap-5 py-5 text-[#893446] '>
        {
            residents.map((resident) => <ResidentCard key={resident} residentUrl={resident}/>)
        }
    </section>
  )
} 

export default ResidentList