import { FaMedal } from 'react-icons/fa'
import styles  from '@/components/layout/profile/Profile.module.css'
import { GiFlamingArrow, GiArrowhead } from'react-icons/gi'
import { useState, useEffect } from 'react'

export default function Profile(){
    const[response, setResponse] = useState()

    useEffect(()=>{
        fetch('https://api.rawg.io/api/games?key=4b1b19528ff942a6bc702c1cad5df5aa&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then((res) => res.json())
    .then((data) => {
        console.log(data)
            setResponse(()=> {
                return  data.results.map((item:any) => (
                    <div className='w-[300px] rounded-xl bg-[#414141] m-5 overflow-auto'>
                    <img src={item.background_image} />
                    <div className='p-5 gap-2 flex flex-col'>
                    <div className='flex gap-5 items-center'>
                        <div className='flex gap-2 justify-center items-center'>
                        {item.playtime >=10 ?<GiFlamingArrow className='text-red-500'/>:<GiArrowhead className='text-sky-500'/>}
                        <h1 className='text-white font-bold'>{item.playtime}H</h1>
                        </div>
                        <span className='border border-green-500 p-2 rounded-lg text-green-500'>{item.rating}</span>
                    </div>
                    <h1 className='text-white font-bold text-2xl'>{item.name}</h1>
                    <div className='flex gap-5 pb-5'>
                    <button className='bg-sky-500 p-3 rounded-xl text-white'>See More</button>
                    <button className='bg-green-500 p-3 rounded-xl text-white'>{item.ratings_count}</button>
                    </div>
                    </div>
                    </div>
                ))
            })
        })
    },[])
        return(
        <main className="h-full w-full bg-[#2f2d2e] flex flex-col">
        <div className={styles.bgImage}>
        <div className='flex items-center gap-5 h-[300px]'>
        <img className="rounded-full h-36 w-3h-36 ml-3 bg-white p-2" src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" alt="profile-icon" />
        <section className="flex flex-col text-white ">
        <h1 className="font-bold text-3xl">Barlla</h1>
        <p className="text-xl">barlla#3897</p>
        <div className="flex items-center text-yellow-500 bg-white p-2 rounded-xl justify-center mt-5">
        <FaMedal />
        <h1 className='font-bold'>324</h1>
        </div>
        </section>
        </div>
        </div>
        <section className='flex flex-wrap'>
        {response}
        </section>
        </main>
    )
}