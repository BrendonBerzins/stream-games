import { FaDownload, FaPause, FaPlay } from 'react-icons/fa'
import { AiFillDatabase } from 'react-icons/ai'

export default function Downloads(){
    return(
        <main className="w-full h-full">
            <section>
            <div className="w-full h-[200px] bg-[#161920] flex text-white">
            <div className="w-[40%] h-full bg-imageGameDowload"></div>
            <section className="flex flex-col justify-center items-center w-[60%]">
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
                        <span className="font-bold">240 GB</span>
                        <p className="text-[#b4b6bb]">YOUR DISK</p>
                    </div>
                </div>
            </section>
            </div>
            </section>
            <section className={`w-full h-[100px] text-white bg-[#1b1e25]
             flex justify-between border-t-2 border-t-cyan-500`}>
                <div className="flex items-center justify-center ml-5 gap-5">
                    <img className='h-[85px]' src='https://wp-uploads.qualbert.com/2023/03/Resident-Evil-4-Remake-Wallpaper.jpg' alt="r4_remake" />
                    <span className="font-bold">Resident Evil 4 Remake</span>
                </div>
                <section className="flex mr-5 gap-5 items-center">
                <div className="flex flex-col">
                  <span className='text-[#0e7eec]'>DOWNLOADING 42%</span>
                  <div className={`shadow shadow-cyan-500 h-[6px] rounded-lg flex
                   items-center justify-center mt-2 mb-3 animate-pulse`}>
                    <div className='w-full h-[6px] bg-[#3d4450] rounded-lg'>
                       <div className={`h-full w-[42%] bg-gradient-to-r from-cyan-500 to-[#0e7fed] rounded-xl`}></div>
                    </div>
                  </div>

                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <FaDownload />
                            <span>27 GB/ 67GB</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <AiFillDatabase />
                            <span>27 GB/ 240GB</span>
                        </div>
                    </div>
                </div>
                <button className={`bg-gradient-to-r from-cyan-500 to-[#0e7fed] 
                h-8 w-8 rounded-md flex items-center justify-center`}><FaPause /></button>
                </section>
            </section>
                <section className='bg-[#2a2e37] w-full h-full p-5'>
                    <div className='flex items-center justify-center gap-5 text-center'>
                        <div className='flex gap-2'>
                            <h1 className='text-white font-bold'>Completed</h1>
                            <h2 className='text-[#848b94]'>(1)</h2>
                        </div>
                        <hr className='border-[#848b94] w-full' />
                        <span className='text-[#848b94]'>Auto-updates enabled</span>
                    </div>
            <section className='h-[200px] w-full flex justify-between items-center text-white'>
                <img className='h-full' src='https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg' alt='diablo4' />
                <div>
                    <h1 className='font-bold'>Diablo IV</h1>
                    <h1>90 GB <span className='text-[#848b94]'>/ 90 GB</span></h1>
                </div>
                <span className='text-[#848b94]'>COMPLETE: TODAY 9:34 AM</span>
                <div className={`flex gap-2 items-center justify-centergap-3 bg-gradient-to-r
                 from-[#4ec730] to-[#22b549] px-5 py-2 rounded-md hover:from-cyan-500
                  hover:to-[#0e7fed] hover:shadow hover:shadow-cyan-500 cursor-pointer`}>
                    <FaPlay />
                    <span>PLAY</span>
                </div>
            </section>
                </section>
        </main>
    )
}