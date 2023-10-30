import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'
import { AiFillDatabase } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'
import Head from 'next/head';
import { gamesCompleted } from '@/components/utils/GamesCompleted';
import Image from 'next/image';

export default function Downloads(){
    return(
    <>
    <Head>
      <title>Downloads</title>
    </Head>
        <main className="w-full h-full">
            <section>
            <div className="w-full h-[500px] sm:fbg-[#161920] flex flex-col md:flex-row md:h-[200px] bg-[#161920] items-center text-white">
            <div className="md:w-[40%] w-full h-[200px] bg-imageGameDowload"></div>
            <section className="flex flex-col justify-center items-center md:w-[60%] w-full p-5">
                <h1 className="text-2xl font-bold mb-5">DOWNLOADING</h1>
                <div className="flex gap-5">
                    <div>
                        <span className="font-bold">52.5 MB/s</span>
                        <p className="text-[#b4b6bb]">CURRENT</p>
                    </div>
                    <div>
                        <span className="font-bold">65.2 MB/s</span>
                        <p className="text-[#b4b6bb]">PEAK</p>
                    </div>
                    <div>
                        <span className="font-bold">67.18 GB</span>
                        <p className="text-[#b4b6bb]">TOTAL</p>
                    </div>
                    <div>
                        <span className="font-bold">1 TB</span>
                        <p className="text-[#b4b6bb]">YOUR DISK</p>
                    </div>
                </div>
            </section>
            </div>
            </section>
            <section className='flex justify-center'>
            <div className={`w-[300px] h-[450px] text-white bg-[#1b1e25]
             flex flex-col md:flex-row md:w-full xl:w-full md:h-[250px] sm:w-full sm:h-[520px] border-t-2 border-t-cyan-500 overflow-hidden`}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                    <Image height={500} width={500} className='md:h-full w-full' src='https://wp-uploads.qualbert.com/2023/03/Resident-Evil-4-Remake-Wallpaper.jpg' alt="r4_remake" />
                </div>
                <section className="flex mr-5 gap-5 items-center">
                <div className="flex flex-col p-5">
                    <span className="font-bold md:hidden xl:flex">Resident Evil 4 Remake</span>
                  <span className='text-[#0e7eec]'>DOWNLOADING 42%</span>
                  <div className={`shadow shadow-cyan-500 h-[6px] rounded-lg flex
                   items-center justify-center mt-2 mb-3 animate-pulse`}>
                    <div className='w-full h-[6px] bg-[#3d4450] rounded-lg'>
                       <div className={`h-full w-[42%] bg-gradient-to-r 
                       from-cyan-500 to-[#0e7fed] rounded-xl`}></div>
                    </div>
                  </div>

                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <FaDownload />
                            <span>27 GB/ 67GB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillDatabase />
                            <span>67 GB/ 1 TB</span>
                        </div>
                    </div>
                </div>
                <button className={`bg-gradient-to-r from-cyan-500 to-[#0e7fed] 
                h-8 w-8 rounded-md flex items-center justify-center`}><FaPause />
                </button>
                </section>
            </div>
            </section>
                <section className='flex flex-col items-start justify-center p-5 '>
            <section>
            <div className='flex items-center justify-center gap-5 md:pb-10'>
                        <div className='sm:flex gap-2 hidden'>
                            <h1 className='text-white font-bold'>Up Next</h1>
                            <h2 className='text-[#848b94]'>(1)</h2>
                        </div>
                        <hr className='border-[#848b94] w-[70%]' />
                        <span className='text-[#848b94] hidden'>Auto-updates enabled</span>
                    </div>
            <section className='w-[300px] h-[400px] md:h-[200px] md:w-full flex flex-col sm:flex-row sm:gap-5 md:justify-between items-center text-white mt-5'>
                <Image width={500} height={500} className='w-full md:w-[35%]' src='https://assetsio.reedpopcdn.com/horizon-call-of-the-mountain-preview.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp' alt='diablo4' />
                <div>
                    <h1 className='font-bold'>Horizon: Call of the Mountain</h1>
                    <h1>32 GB <span className='text-[#848b94]'>/ 100 GB</span></h1>
                </div>
                <section className="flex mr-5 gap-5 items-center p-5">
                <div className="flex flex-col">
                  <span className='text-[#848b94]'>DOWNLOADING 32%</span>
                  <div className={`shadow shadow-[#848b94] h-[6px] rounded-lg flex
                   items-center justify-center mt-2 mb-3 animate-pulse`}>
                    <div className='w-full h-[6px] bg-[#3d4450] rounded-lg'>
                       <div className={`h-full w-[32%] bg-[#848b94] rounded-xl`}></div>
                    </div>
                  </div>

                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <FaDownload />
                            <span>32 GB/ 100GB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillDatabase />
                            <span>100 GB/ 1 TB</span>
                        </div>
                    </div>
                </div>
                <button className={`bg-[#1b1e25] 
                h-8 w-8 rounded-md flex items-center justify-center text-white font-bold`}><BsDownload />
                </button>
                </section>
            </section>
            </section>
                    <div className='flex items-center justify-center gap-5 text-center mt-10'>
                        <div className='sm:flex gap-2 hidden'>
                            <h1 className='text-white font-bold'>Completed</h1>
                            <h2 className='text-[#848b94]'>(1)</h2>
                        </div>
                        <hr className='border-[#848b94] w-full' />
                        <span className='text-[#848b94] hidden'>Auto-updates enabled</span>
                    </div>

            {
                gamesCompleted.map((game, index) => (
                    <section key={index} className='h-[200px] w-full flex flex-col sm:flex-row gap-5 md:justify-between items-center text-white my-20'>
                <Image height={500} width={500} className='w-full sm:w-[30%]' src={game.imageGameComplete}  alt={game.nameGameComplete} />
                <div>
                    <h1 className='font-bold'>{game.nameGameComplete}</h1>
                    <h1>{game.totalGigabyte} GB <span className='text-[#848b94]'>/ {game.totalGigabyte} GB</span></h1>
                </div>
                <span className='text-[#848b94]'>{game.completeIn}</span>
                <div className={`flex gap-2 items-center justify-centergap-3 bg-gradient-to-r
                 from-[#4ec730] to-[#22b549] px-5 py-2 rounded-md hover:from-cyan-500
                 hover:to-[#0e7fed] hover:shadow hover:shadow-cyan-500 cursor-pointer`}>
                    <FaPlay />
                    <span>PLAY</span>
                </div>
            </section>
                ))
            }
                </section>
        </main>
    </>
    )
}