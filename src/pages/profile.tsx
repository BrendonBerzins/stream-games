import styles  from '@/components/layout/profile/Profile.module.css'
import { BsClock, BsShieldFillCheck, BsStars } from 'react-icons/bs'
import { FaFireAlt } from 'react-icons/fa'

import { useState } from 'react'
import Head from 'next/head'
import { games } from '@/components/utils/GamesProfile'
import Image from 'next/image'

export default function Profile(){
    const [cardInfoGame, setCardInfoGame]:any = useState(
        <div className='flex justify-end items-end h-full w-full overflow-hidden'>
        <div style={{backgroundImage: `url(${games[0].bgGame})`, height: '100%', width: '100%',
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }} className='bg-imageGameProfile'>
        <div className='h-full w-full bg-gradientGameProfile flex items-end justify-end'>
    <div className='h-[60%] w-full text-white p-5'>
        <h1 className='text-2xl'>{games[0].nameGame}</h1>
        <div className='flex gap-3 text-white items-center'>
            <h1>Total Hours Played : {games[0].hoursPlayed}H</h1>
            <BsClock />
        </div>
        <section className='flex gap-5'>
    <div className='mt-5'>
        <p>ACHIVEMENT PROGRESS</p>
        <div className='flex items-center '>
             <h2>{games[0].percentage}</h2>
             <span className=' text-[#424242] mx-2 font-bold'>|</span>
             <h2>{games[0].totalAchivements} Achievements</h2>
        </div>
        <div className='w-[200px] h-[10px] bg-[#424242] rounded-lg mt-2'>
            <div style={{backgroundColor: '#fff', width: games[0].percentage, height: '100%', borderRadius: '0.75rem' }}></div>
        </div>
        </div>
 </section>
    <p className='text-five-line text-[#424242]'>{games[0].description}</p>
    </div>
        </div>
        </div>
</div>
    )
        return(
    <>
    <Head>
      <title>Profile</title>
    </Head>
        <main className="h-full w-full flex flex-col">
            <div className={styles.bgImage}>
                <div className='flex items-center gap-5 h-[300px]'>
                    <Image className="rounded-full h-36 w-3h-36 ml-3 bg-white p-1 shadow-xl shadow-black" 
                    src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" 
                    alt="profile-icon" />
                        <section className="flex flex-col text-white">
                            <div className=' flex gap-3 items-center'>
                            <h1 className="font-bold text-3xl">Barlla</h1>
                            <BsShieldFillCheck className='text-cyan-500'/>
                            </div>
                            <p className="text-xl">barlla#3897</p>
                            <div className='flex gap-3'>
                                <div className={`flex items-center
                                 bg-cyan-500 shadow-md shadow-black p-2 rounded-xl justify-center mt-5`}>
                                    <h1 className='font-bold'>2190</h1>
                                    <BsStars />
                                </div>
                                <div className={`flex items-center
                                 bg-cyan-500 shadow-md shadow-black p-2 rounded-xl justify-center mt-5`}>
                                    <h1 className='font-bold'>286</h1>
                                    <FaFireAlt />
                                </div>
                            </div>
                        </section>
                </div>
            </div>
            <section className='w-full p-10'>
                    <h1 className={`text-white text-3xl mb-10`}>Favority Games</h1>
                    <div className='flex gap-10 mb-10'>
                        <div className='text-white'>
                            <h1 className='text-xl'>Total XP Earned</h1>
                            <p className='text-[#b4b6bb] flex items-center font-bold'>2190<span><BsStars /></span></p>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-xl'>Total Achivements</h1>
                            <p className='text-[#b4b6bb] flex items-center font-bold'>286<span><FaFireAlt /></span></p>
                        </div>
                    </div>
                <section className='flex flex-col xl:flex-row gap-5 items-center'>
                    <section className={`flex gap-5 flex-col md:flex-row md:flex-wrap`}>
                        {
                            games.map((game, index) => (
                                <div key={index} onClick= { () => {setCardInfoGame(
                                    <div key={index} className='flex justify-end items-end h-full w-full overflow-hidden'>
                                        <div style={{backgroundImage: `url(${game.bgGame})`, height: '100%', width: '100%',
                                        backgroundSize: 'cover', backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }} className='bg-imageGameProfile'>
                                        <div className='h-full w-full bg-gradientGameProfile flex items-end justify-end'>
                                    <div className='h-[60%] w-full text-white p-5'>
                                        <h1 className='text-2xl'>{game.nameGame}</h1>
                                        <div className='flex gap-3 text-white items-center'>
                                            <h1>Total Hours Played : {game.hoursPlayed}H</h1>
                                            <BsClock />
                                        </div>
                                        <section className='flex gap-5'>
                                    <div className='mt-5'>
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
                                 </section>
                                    <p className='text-five-line text-[#424242]'>{game.description}</p>
                                    </div>
                                        </div>
                                        </div>
                                </div>
                                )}}>
                                    <div className={`h-[250px] w-[220px]
                                    flex items-center justify-center
                                    cursor-pointer bg-[#272526] 
                                    hover:border hover:border-cyan-500 transition ease-in hover:-translate-y-5 
                                    shadow-xl shadow-black hover:shadow-cyan-500 hover:shadow-md`}>
                                        <Image alt='' className='h-full w-full' src={game.imageGame} />
                                    </div>
                                    <div className='flex flex-col gap-2 mt-3'>
                                        <h1 className='text-white'>{game.nameGame}</h1>
                                        <div className='flex gap-5'>
                                            <div className='flex gap-3 text-white items-center justify-center'>
                                                <BsClock />
                                                <h1>Hours Played : {game.hoursPlayed}H</h1>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </section>
                    <section className='h-[400px] sm:h-[500px] w-[300px] sm:w-[400px] bg-[#1e1e1e] shadow-xl shadow-black'>
                        {cardInfoGame}
                    </section>  
                </section>
            </section>
        </main>
    </>
    )
}