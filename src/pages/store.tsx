import { useState, useEffect } from 'react'
import CardGame from '@/components/cardGames/CardGame'
import { AiOutlineSearch } from'react-icons/ai'
import Head from 'next/head';

type ComponentProps = {
    id?: string;
    name?: string;
    background?: string;
    genre?: string;
    platform?: string;
    index?: number;
    title: string;
    thumbnail: string;
  }

export default function Store(){

    const [gameData, setGameData] = useState([])
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        const gameData = async () => {
                const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';
                const options = {
                	method: 'GET',
                	headers: {
                		'X-RapidAPI-Key': '561da1ad6dmsh623755776073aedp11208djsn538f4fb8b33f',
                		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                	}
                };
                try {
                	const response = await fetch(url, options);
                	const result = await response.json();
                    setGameData(result)
                    setFilter(result)
                } catch (error) {
                	console.error(error);
                }
        }
        gameData()
    },[])

    const handleInput = (e:any) => {
        setSearch(e.target.value)
        const result = gameData.filter((item:any) =>{
            return item.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilter(result)
    }
    return(
        <>
    <Head>
      <title>Store</title>
    </Head>
        <main className="h-full w-full flex overflow-x-hidden">
        <section className="w-full">
        <section className="h-[350vh] w-full">
        <h1 className='p-10 text-white font-bold text-2xl w-full flex justify-center'>Choose your game to download</h1> 
        <section className='w-full flex justify-center pb-10'>
        <div className='flex bg-[#121212] p-2 rounded-xl w-[300px] md:w-[500px] text-white items-center'>
        <input className ='bg-transparent w-[300px] md:w-[500px] outline-none' 
        placeholder='Search game' type='text' value={search} onChange={handleInput}/>
        <AiOutlineSearch />
        </div>
        </section>
        <div className='flex flex-wrap items-center justify-center'>            
        {search.length > 0 ?(
            
            filter.map((item:ComponentProps, index) => (
                <CardGame key={item.thumbnail} index={index} name={item.title} background={item.thumbnail} 
                genre={item.genre} platform={item.platform} id={item.id} />
                ))
                ) : (
                    gameData.map((item:ComponentProps, index) => (
                        <CardGame key={item.thumbnail} index={index} name={item.title} background={item.thumbnail} 
                        genre={item.genre} platform={item.platform} id={item.id} />
                        ))
                )
        }
        </div>
        </section>
        </section>
        </main>
            </>
    )
}