import styles from '@/components/layout/home/Home.module.css'
import { useState, useEffect } from 'react'
import CardGame from '@/components/cardGames/CardGame'
export default function Home() {

  const platformApi:string = 'https://api.rawg.io/api/platforms?key=4b1b19528ff942a6bc702c1cad5df5aa'
  const gamesApi:string = 'https://api.rawg.io/api/games?key=4b1b19528ff942a6bc702c1cad5df5aa&dates=2019-09-01,2019-09-30&platforms=18,1,7'

  const [response, setResponse] = useState()

  
  useEffect(()=>{
    
    fetch(gamesApi)
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data.results)
        setResponse(()=>{
          return data.results.map((item:any) =>(
        <CardGame id={item.id} name={item.name} background={item.background_image} rating={item.rating} />
        ))
      })    
    })
    .catch((err)=> console.log(err))
  },[])


  return (
    <main className="h-screen w-full">
   <section className="p-10 ">
    <h1 className="text-white text-2xl font-bold mb-10">Popular Games</h1>
    <section className="flex bg-glass w-[90%] h-[300px] items-center rounded-xl overflow-hidden">
    <img className='h-full' src="https://assetsio.reedpopcdn.com/Resi-Review-Site.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"/>
    <section className="flex flex-col justify-center items-center w-full p-5">
    <h1 className='text-white font-bold text-2xl'>Resident Evil 4 remake</h1>
    <p className='text-[#adacaf] p-5'>Reimagined for 2023 to bring state-of-the-art survival horror.
    Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay,
    a reimagined storyline, and vividly detailed graphics to make this the latest survival 
    horror game where life and death, terror and catharsis intersect.</p>
     <button className="bg-[#71b620] text-white p-2">Up to -25%</button>
    </section>
    </section>
   </section>
   <section className="p-10">
    <h1 className="text-white text-2xl font-bold mb-10">News</h1>
    <section className="h-[500px] w-[90%] rounded-xl overflow-auto">
      <div className={styles.bgNewsSection}>
      <div className='bg-transparent h-[60%]'></div>
      <section className={styles.bgGLassWhite}>
        <p className='text-white px-10 text-xl'>One of the most unexpected reveals for Fortnite was the crossover event with The Witcher.
          During Chapter 3 Season 4's finale live event, fans could see Roach and Geralt swimming through space.
          Now that Chapter 4 has officially launched, fans can purchase the battle pass and do Geralt's quests 
          in order to unlock him as a playable skin.</p>
      </section>
      </div>
    </section>
   </section>
   <section className='p-10'>
    <h1 className="text-white text-2xl font-bold mb-10">Top 10 most played</h1>
    <section className='flex flex-wrap'>
    {response}
    </section>
   </section>
    </main>
  )
}
