import styles from '@/components/layout/home/Home.module.css'
import { BsFillCloudArrowDownFill, BsFillStarFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    <section className="flex bg-glass w-[90%] items-center rounded-xl overflow-auto">
    <img className='w-[610px]' src="https://c4.wallpaperflare.com/wallpaper/1004/347/682/gta-5-4k-download-images-for-pc-wallpaper-preview.jpg"/>
    <section className="flex flex-col justify-center items-center w-full p-5">
    <h1 className='text-white font-bold text-2xl'>Grand Theft Auto V</h1>
    <p className='text-[#adacaf] p-5'>Grand Theft Auto V is an action-adventure game played from either
     a third-person or first-person perspective.
     Players complete missions linear scenarios with set objectives to progress through the story. 
     Outside of the missions, players may freely roam the open world.</p>
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
