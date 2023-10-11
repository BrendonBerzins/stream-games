import { useState, useEffect } from 'react'
import CardGame from '@/components/cardGames/CardGame'
import { AiOutlineSearch } from'react-icons/ai'
export default function Store(){

    const [search, setSearch] = useState('')
    const [response, setResponse] = useState([])

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=4b1b19528ff942a6bc702c1cad5df5aa&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then((res) => res.json())
        .then((data) => {
            setResponse(()=>{
               return data.results.map((item:any, index:any)=>(
                    <CardGame key={index} name={item.name} background={item.background_image} rating={item.rating} />
                ))
            })
        })
    },[])
    return(
        <main className="h-full w-full flex">
        <section className="w-full">
        <section className="h-[100px] w-full bg-[#2e2c2d]">
        <h1>Discover</h1>
        </section>
        <section className="h-[350vh] w-full bg-glass ">
        <h1 className='p-10 text-white font-bold text-2xl w-full flex justify-center'>Choose your game to download</h1> 
        <section className='w-full flex justify-center pb-10'>
        <div className='flex bg-[#121212] p-2 rounded-xl w-[50%] text-white items-center'>
        <input className ='bg-transparent w-full outline-none' placeholder='Search game' type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <AiOutlineSearch />
        </div>
        </section>
        <div className='flex flex-wrap items-center justify-center'>            
        {response}
        </div>
        </section>
        </section>
        <aside className="flex flex-col h-[365vh] w-[30%] bg-[#121212]">
        <h1>hello hello</h1>
        </aside>
        </main>
    )
}