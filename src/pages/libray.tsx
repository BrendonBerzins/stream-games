import { AiOutlineSearch } from'react-icons/ai'
import { useState, useEffect } from 'react'
import CardLibray from '@/components/cardGames/CardLibray'

export default function Libray(){

    const [response, setResponse] = useState()

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=4b1b19528ff942a6bc702c1cad5df5aa&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then((res) => res.json())
        .then((data) => {
            setResponse(()=>{
               return data.results.map((item:any, index:any)=>(
                <CardLibray key={index} name={item.name} background={item.background_image} />
                ))
            })
        })
    },[])
    return(
        <main className='h-full'>
        <div className="flex w-full justify-between p-10">
        <select className='bg-[#121212] text-white p-2 rounded-md'>
            <option>Recent</option>
            <option>All games</option>
        </select>
        <div className='flex bg-[#121212] p-2 rounded-xl w-[30%] text-white items-center'>
        <input className ='bg-transparent w-full outline-none' placeholder='Search game' type='text'/>
        <AiOutlineSearch className='mr-3' />
        </div>
        </div>
        <section className='flex flex-wrap gap-5'>
        {response}
        </section>
        </main>
    )
}