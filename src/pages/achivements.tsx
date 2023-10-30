import {BsStars, BsFillTrophyFill} from 'react-icons/bs'
import { FaFireAlt } from 'react-icons/fa'
import { useState } from 'react'
import Head from 'next/head';

import { games } from '@/components/utils/GamesAchivements';
import Image from 'next/image';

export default function Achivements(){
    const [infoAchivements, setInfoAchivements] = useState(
        <div>
            <h1 className='my-5 text-2xl pl-5'>{games[2].nameGame}</h1>
            <div className='p-5'>
                <Image width={800} height={800} className='w-full rounded-md' src={games[2].imageGame} alt={games[2].nameGame}/>
            </div>
            <div className='p-5 flex flex-col gap-5'>
                <div>
                    <p>ACHIVEMENT PROGRESS</p>
                    <div className='flex items-center '>
                        <h2>{games[2].percentage}</h2>
                        <span className=' text-[#424242] mx-2 font-bold'>|</span>
                        <h2>{games[2].totalAchivements} Achievements</h2>
                    </div>
                    <div className='w-full h-[10px] bg-[#424242] rounded-lg mt-2'>
                        <div style={{backgroundColor: '#fff', width: games[2].percentage, height: '100%', borderRadius: '0.75rem' }}></div>
                    </div>
                </div>
                <div>
                    <p>TOTAL XP EARNED</p>
                    <h2>{games[2].totalXpEarned} XP</h2>
                    <p className='text-five-line text-[#424242]'>{games[2].description}</p>
                </div>
            </div>
        </div>
    )
    return(
    <>
    <Head>
      <title>Achivements</title>
    </Head>
        <main className="w-full h-full">
            <h1 className="text-white text-2xl p-10">My Achievements</h1>
            <section className="flex flex-col sm:flex-row gap-8 text-white pl-10">
                <div className="flex flex-col justify-center items-center">
                    <p>TOTAL XP EARNED</p>
                    <span className='flex items-center text-4xl'>
                    <BsStars />
                   <p>2190 XP</p> 
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>TOTAL TROPHIES</p>
                    <span className='flex items-center text-4xl'>
                    <BsFillTrophyFill />
                   <p>115</p> 
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>ACHIEVEMENTS</p>
                    <span className='flex items-center text-4xl'>
                    <FaFireAlt />
                   <p>286</p> 
                    </span>
                </div>
            </section>
            <div className='flex flex-col items-center md:flex-row mt-10'>
                <section className='flex flex-col gap-5 w-[300px] md:w-[500px] xl:w-full justify-center items-center'>
                {
                    games.map((game, index) => (
                <section key={index} onClick={() => {
                    
                    setInfoAchivements(
                        <div>
                        <h1 className='my-5 text-2xl pl-5'>{game.nameGame}</h1>
                        <div className='p-5'>
                        <Image height={500} width={500} className='w-full rounded-md' src={game.imageGame} alt={game.nameGame}/>
                        </div>
                        <div className='p-5 flex flex-col gap-5'>
                        <div>
                        <p>ACHIVEMENT PROGRESS</p>
                        <div className='flex items-center '>
                        <h2>{game.percentage}</h2>
                        <span className=' text-[#424242] mx-2 font-bold'>|</span>
                        <h2>{game.totalAchivements} Achievements</h2>
                        </div>
                        <div className='w-full h-[10px] bg-[#424242] rounded-lg mt-2'>
                        <div style={{backgroundColor: '#fff', width: game.percentage, height: '100%', borderRadius: '0.75rem' }}></div>
                        </div>
                        </div>
                        <div>
                            <p>TOTAL XP EARNED</p>
                            <h2>{game.totalXpEarned} XP</h2>
                            <p className='text-five-line text-[#424242]'>{game.description}</p>
                        </div>
                        </div>
                        </div>
                    )
                }} className={`cursor-pointer w-[300px] md:w-[500px] bg-[#272526] h-[400px] md:h-[450px] xl:h-[200px] flex flex-col xl:flex-row xl:w-[800px]
                hover:border hover:border-cyan-500 transition ease-in scale-[0.9] hover:scale-[1] 
        shadow-xl shadow-black hover:shadow-cyan-500 hover:shadow-md`}>
                    <Image height={500} width={500} className='w-[100%] xl:w-[40%]' src={game.imageGame} alt={game.nameGame} />
                    <div className='text-white flex flex-col justify-center items-center w-full p-10'>
                         <section className='flex flex-col sm:flex-row gap-5'>
                            <div>
                                <p>ACHIVEMENT PROGRESS</p>
                                <div className='flex items-center '>
                                     <h2>{game.percentage}</h2>
                                     <span className=' text-[#424242] mx-2 font-bold'>|</span>
                                     <h2>{game.totalAchivements} Achievements</h2>
                                </div>
                                <div className='w-[200px] h-[10px] bg-[#424242] rounded-lg mt-2'>
                                    <div style={{backgroundColor: '#fff', width: game.percentage, height: '100%', borderRadius: '0.75rem' }}></div>
                                </div>
                            </div>
                            <div>
                                <p>TOTAL XP EARNED</p>
                                <h2>{game.totalXpEarned} XP</h2>
                            </div>
                         </section>
                    </div>
                </section>
                    ))
                }
                </section>
            <aside className='bg-[#1e1e1e] w-[300px] md:w-[500px] xl:w-[500px] h-screen rounded-xl flex flex-col text-white m-5'>
                {infoAchivements}
            </aside>
            </div>
        </main>
    </>
    )
}