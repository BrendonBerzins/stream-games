import {BsStars, BsFillTrophyFill} from 'react-icons/bs'
import { FaFireAlt } from 'react-icons/fa'

export default function Achivements(){
    return(
        <main className="w-full h-full">
            <h1 className="text-white text-2xl p-10">My Achievements</h1>
            <section className="flex gap-8 text-white pl-10">
                <div className="flex flex-col justify-center items-center">
                    <p>TOTAL XP EARNED</p>
                    <span className='flex items-center text-4xl'>
                    <BsStars />
                   <p>350 XP</p> 
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>TOTAL XP EARNED</p>
                    <span className='flex items-center text-4xl'>
                    <BsFillTrophyFill />
                   <p>35</p> 
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center text-[#727071]">
                    <p>ACHIEVEMENTS</p>
                    <span className='flex items-center text-4xl'>
                    <FaFireAlt />
                   <p>0</p> 
                    </span>
                </div>
            </section>
            <div className='flex mt-10'>
            <section className='flex flex-col w-[70%] items-center '>
            <section className='w-[95%] bg-[#272526] h-[200px] flex'>
            <img className='h-full' src='https://futeblog.com.br/wp-content/uploads/2020/10/Rocket-League-Keyart-Retang.jpg' alt='rocket_league' />
            <div className='text-white flex flex-col justify-center items-center w-full'>
                
                <section className='flex gap-5'>
                <div>
                <p>ACHIVEMENT PROGRESS</p>
                <div className='flex items-center '>
                <h2>52%</h2>
                <span className=' text-[#424242] mx-2 font-bold'>|</span>
                <h2>48/93 Achievements</h2>
                </div>
                <div className='w-[200px] h-[10px] bg-[#424242] rounded-lg mt-2'>
                <div className='h-full w-[52%] bg-white rounded-xl'></div>
                </div>
                </div>
                <div>
                    <p>TOTAL XP EARNED</p>
                    <h2>520/1000 XP</h2>
                </div>
                </section>
            </div>
            </section>
            </section>
            <aside className='bg-[#1e1e1e] w-[30%] h-screen rounded-xl flex flex-col text-white'>
                <h1 className='my-5 text-2xl pl-5'>Rocket League</h1>
                <div className='p-5'>
                <img className='w-full rounded-md' src='https://rocketleague.media.zestyio.com/rl_home_f2p-launch_cross_10656.jpg?width=1920&fit=bounds' alt=''/>
                </div>
                <div className='p-5 flex flex-col gap-5'>
                <div>
                <p>ACHIVEMENT PROGRESS</p>
                <div className='flex items-center '>
                <h2>52%</h2>
                <span className=' text-[#424242] mx-2 font-bold'>|</span>
                <h2>48/93 Achievements</h2>
                </div>
                <div className='w-full h-[10px] bg-[#424242] rounded-lg mt-2'>
                <div className='h-full w-[52%] bg-white rounded-xl'></div>
                </div>
                </div>
                <div>
                    <p>TOTAL XP EARNED</p>
                    <h2>520/1000 XP</h2>
                </div>
                </div>
            </aside>
            </div>
        </main>
    )
}