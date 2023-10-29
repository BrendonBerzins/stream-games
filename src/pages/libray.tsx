import { AiOutlineLoading } from'react-icons/ai'
import { useState } from 'react'
import CardGame from '@/components/cardGames/CardGame';
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

export default function Libray(){

    const [responseAllGames, setResponseAllGames] = useState([])
    const [responseRecent, setResponseRecent] = useState([])
    const [option, setOption] = useState([])
    const [color, setColor] = useState('all games');
        async function getDataRecent(){
            const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg';
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
                setResponseRecent(result)
            } catch (error) {
            	console.error(error);
            }
        }
        getDataRecent()
        async function getDataAllGames(){
            const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=release-date';
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
                setResponseAllGames(result)
            } catch (error) {
                console.error(error);
            }
        } 
        getDataAllGames()

    return(
        <>
    <Head>
      <title>Libray</title>
    </Head>
        <main className='h-full overflow-x-hidden'>
        <div className="flex flex-col md:flex-row w-full gap-28 p-10 overflow-x-hidden">
            <div className='flex gap-5 text-[#727071]'>
                <div onClick={() => setOption(responseRecent)} className={`hover:font-bol hover:text-slate-100 cursor-pointer`}><div onClick={() => setColor('recent')}>{color === 'recent' ? <span className='text-cyan-500'>Recent</span> : <span>Recent</span> }</div></div>
                <div onClick={() => setOption(responseAllGames)} className={`hover:font-bol hover:text-slate-100 cursor-pointer`}><div onClick={() => setColor('all games')}>{color === 'all games' ? <span className='text-cyan-500'>All Games</span> : <span>All Games</span> }</div></div>
            </div>
        </div>
        <section className='flex flex-wrap gap-2 w-full justify-center items-center'>
            {option.length > 0 ? option.map((item:ComponentProps, index) => (
            <CardGame index={index} name={item.title} background={item.thumbnail} 
            genre={item.genre} platform={item.platform} id={item.id} />
            )): responseAllGames.map((item:ComponentProps, index) => (
                <CardGame index={index} name={item.title} background={item.thumbnail} 
                genre={item.genre} platform={item.platform} id={item.id} />))}

                {option.length == 0 && <AiOutlineLoading className='animate-spin text-white text-4xl'/>}
        </section>
        </main>
        </>
    )
}