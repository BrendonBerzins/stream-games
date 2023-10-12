import { FaMedal } from 'react-icons/fa'
import styles  from '@/components/layout/profile/Profile.module.css'
import { useState, useEffect } from 'react'
import CardProfile from '@/components/cardGames/CardProfile'

export default function Profile(){
    const[response, setResponse] = useState()

    useEffect(()=>{
        fetch('https://api.rawg.io/api/games?key=4b1b19528ff942a6bc702c1cad5df5aa&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then((res) => res.json())
    .then((data) => {
        console.log(data)
            setResponse(()=> {
                return  data.results.map((item:any) => (
                    <CardProfile id={item.id} name={item.name} background={item.background_image}/>
                ))
            })
        })
    },[])
        return(
        <main className="h-full w-full flex flex-col">
            <div className={styles.bgImage}>
                <div className='flex items-center gap-5 h-[300px]'>
                    <img className="rounded-full h-36 w-3h-36 ml-3 bg-white p-2" 
                    src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" 
                    alt="profile-icon" />
                        <section className="flex flex-col text-white ">
                            <h1 className="font-bold text-3xl">Barlla</h1>
                            <p className="text-xl">barlla#3897</p>
                            <div className={`flex items-center text-yellow-500
                             bg-white p-2 rounded-xl justify-center mt-5`}>
                                <FaMedal />
                                <h1 className='font-bold'>324</h1>
                            </div>
                        </section>
                </div>
            </div>
            <section className='flex flex-wrap w-full justify-center items-center'>
                {response}
            </section>
        </main>
    )
}