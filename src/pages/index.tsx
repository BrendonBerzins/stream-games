import styles from '@/components/layout/home/Home.module.css'
import { useState } from 'react'
import CardGame from '@/components/cardGames/CardGame'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

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

export default function Home() {

  const [responseGame, setResponseGame] = useState([])
  const [responseEspecificGame, setResponseEspecificGame] = useState({release_date: '',minimum_system_requirements:{os:'', processor: '', memory: '', graphics: ''},game_url:'', thumbnail: '', short_description: '', title: ''})
  async function getDataGames(){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date';
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
      setResponseGame(result)
    } catch (error) {
    	console.error(error);
    }
  }
  getDataGames()
  async function getDataEspecificGame(){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=475';
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
      setResponseEspecificGame(result)
    } catch (error) {
    	console.error(error);
    }
  }
  getDataEspecificGame()
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
    <main className="h-screen w-full overflow-x-hidden">
  <section className='flex flex-col items-center justify-center md:flex-row'> 
  <section className=' w-[320px] sm:w-[90%] md:w-[80%]'> 
    <section className="p-5 ">
       <h1 className="text-white text-2xl font-bold mb-10">Popular Games</h1>
       <section className="flex bg-glass w-full h-[270px] items-center rounded-xl overflow-hidden">
        <div className='h-full md:w-[60%]'>
         <Image alt='' className='hidden md:block h-full' 
         src="https://assetsio.reedpopcdn.com/Resi-Review-Site.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"/>
        </div>
         <section className="flex flex-col justify-center items-center md:w-[40%] p-5">
           <h1 className='text-white font-bold text-xl'>Resident Evil 4 remake</h1>
           <p className='text-[#adacaf] p-5 text-five-line'>Reimagined for 2023 to bring state-of-the-art survival horror.
           Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay,
           a reimagined storyline, and vividly detailed graphics to make this the latest survival 
           horror game where life and death, terror and catharsis intersect.</p>
           <Link href={'https://www.residentevil.com/re4/pt-br/'} className="bg-[#71b620] text-white p-2 mt-2">Up to -25%</Link>
       </section>
       </section>
    </section>
    <section className="p-5">
     <h1 className="text-white text-2xl font-bold mb-10">News</h1>
     <section className="h-[500px] md:h-[500px] w-full rounded-xl overflow-hidden">
       <div className={styles.bgNewsSection}>
        <div className='h-[25%] sm:h-[40%]'></div>
        <div className='h-[75%] sm:h-[60%] bg-[#282b32] flex text-center items-center justify-center'>
       <section>
         <p className='text-white px-5 md:px-10 text-xl text-news-home blur-none mb-5'>One of the most unexpected reveals for Fortnite was the crossover event with The Witcher.
           During Chapter 3 Season 4s finale live event, fans could see Roach and Geralt swimming through space.
           Now that Chapter 4 has officially launched, fans can purchase the battle pass and do Geralts quests 
           in order to unlock him as a playable skin.</p>
           <Link href='https://www.fortnite.com/?lang=en-US' className='sm:hidden text-white front-bold bg-cyan-500 p-2 rounded-xl'>View More</Link>
       </section>
        </div>
       </div>
     </section>
    </section>
   </section>
   <aside className='bg-white w-[90%] md:w-[30%] h-auto p-5 m-5 rounded-xl'>
      <section className='w-full h-full flex flex-col gap-5 items-center justify-center md:items-start md:justify-start'>
        <h1 className='text-2xl pb-5'>Most played</h1>
        <Image src={responseEspecificGame.thumbnail} alt={responseEspecificGame.title} className='bg-slate-300 w-[250px] h-[150px] rounded-md'/>
        <h2 className='font-bold'>Free Download</h2>
        <p>{responseEspecificGame.short_description}</p>
        <Link href={responseEspecificGame.game_url.length == 0 ? '' : responseEspecificGame.game_url } className={`flex justify-center bg-cyan-500 p-2 rounded-md scale-[0.9] transition ease-in 
        hover:scale-[1] font-bold text-white`}>DOWNLOAD</Link>
        <div>
        <h1 className="font-bold">SYSTEM REQUIREMENTS</h1>
        <p><span className="text-cyan-500">Os:</span> {responseEspecificGame.minimum_system_requirements.os}</p>
        <p><span className="text-cyan-500">Processor:</span> {responseEspecificGame.minimum_system_requirements.processor}</p>
        <p><span className="text-cyan-500">Memory:</span> {responseEspecificGame.minimum_system_requirements.memory}</p>
        <p><span className="text-cyan-500">Graphics:</span> {responseEspecificGame.minimum_system_requirements.graphics}</p>
        <p><span className="text-cyan-500">Date:</span> {responseEspecificGame.release_date}</p>
    </div>
      </section>
   </aside>
   </section>
   <section className='p-10'>
    <h1 className="text-white text-2xl font-bold mb-10">Top most played</h1>
    <section className='flex flex-wrap items-center justify-center'>
    {responseGame.map((game:ComponentProps, index:number)=> (
      <CardGame key={index} id={game.id} name={game.title} 
      background={game.thumbnail} genre={game.genre} 
      platform={game.platform} index={index} />
    ))}
    </section>
   </section>
    </main>
      </>
  )
}
