import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from 'react'
import { AiOutlineLoading } from "react-icons/ai"

interface Requirements {
        os: string;
        graphics: string;
        memory: string;   
}

interface Screenshot {
    image: string;
}

type GameData = {
    title: string;
    screenshots: Array<Screenshot>;
    thumbnail: string;
    description: string;
    minimum_system_requirements: Requirements;
    release_date: string;
    genre: string;
    publisher: string;
    game_url: string;
}

export default function Game() {
    const [res, setRes] = useState<GameData>()
    const [screen, setScreen] = useState('')
    const router = useRouter()
    const gameId = router.query.gameId

    async function getData(){
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
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
            setRes(result)
        } catch (error) {
            console.error(error);
        }
    }

    getData()
    return(
    <>
    <Head>
      <title>{res?.title}</title>
    </Head>
        <main className="w-[370px] sm:w-full  h-full flex items-center justify-center overflow-x-hidden">
           {res && res.title.length >  0 &&
                <section className="flex flex-col md:flex-row w-full text-white overflow-hidden rounded-xl h-full md:w-[90%] md:items-center md:justify-center">
                <div className="flex flex-col w-full sm:w-[600px] md:w-[70%]">
                    <div className={`w-full h-[250px] md:h-[400px] overflow-hidden`}>
                    {screen ? <Image height={800} width={800} src={screen} alt={res.title} className={`bg-[#1b1e25]`}/> : <Image height={800} width={800} src={res.screenshots[0].image} alt={res.title} className={`bg-[#1b1e25]`}/>}
                    </div>

                    <div className={`hidden w-[370px] sm:w-full h-[120px] sm:h-[170px] sm:flex gap-3 p-5`}>
                        {res.screenshots.map((img, index) => (
                            <div key={index} onClick={()=>{
                                setScreen(img.image)
                            }} className={`h-full w-full
                             scale-[0.9] hover:scale-[1] transition ease-in-out cursor-pointer`}>
                            <Image height={120} width={370} className={`hover:shadow-md hover:shadow-cyan-500 h-full bg-[#1b1e25]`} 
                            key={index} src={img.image} alt={res.title}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="h-[570px] w-full sm:w-[600px] md:w-[30%] p-5 overflow-y-auto overflow-x-hidden ">
                    <Image height={600} width={600} src={res.thumbnail} alt={res.title} />
                    <h1 className=" text-2xl p-5 sm:p-0">{res.title}</h1>
                    <p className="text-five-line mb-5 p-5 sm:p-0">{res.description}</p>
                    <div className="p-5 sm:p-0">
                        <h1 className="font-bold">SYSTEM REQUIREMENTS</h1>
                        <p><span className="text-cyan-500">Os:</span> {res.minimum_system_requirements.os}</p>
                        <p><span className="text-cyan-500">Memory:</span> {res.minimum_system_requirements.memory}</p>
                        <p><span className="text-cyan-500">Graphics:</span> {res.minimum_system_requirements.graphics}</p>
                        <p><span className="text-cyan-500">Date:</span> {res.release_date}</p>
                    </div>
                    <div className="flex gap-3 text-[#727071] p-5 sm:p-0">
                        <p>Genre: {res.genre}</p>
                        <p>Publisher: {res.publisher}</p>
                    </div>
                    <div className="p-5 sm:p-0">
                        <h1 className="text-white font-bold mb-5 mt-5">Free Download</h1>
                        <Link className={`bg-cyan-500 p-2 rounded-md transition ease-in-out 
                        hover:shadow-md hover:shadow-black`} href={res.game_url}>Download</Link>
                    </div>
                </div>
            </section>
        }
        {!res && <AiOutlineLoading className='text-white text-4xl animate-spin'/>}
        </main>
    </>
    )
}