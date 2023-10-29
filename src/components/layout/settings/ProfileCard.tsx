import {BsStars, BsFillTrophyFill} from 'react-icons/bs'
import { FaFireAlt } from 'react-icons/fa'

export default function ProfileCard({ name}:any){
    return(
        <section style={{backgroundImage: `url('https://e0.pxfuel.com/wallpapers/786/398/desktop-wallpaper-diablo-iv-in.jpg')`, 
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}className="flex flex-col gap-5 text-white w-[300px] h-[250px] items-center justify-center rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[300px] h-full">
            <div className="h-[65%] w-[300px] flex items-center justify-center">
                <img className="mb-3 rounded-full h-24 w-24 p-1 bg-white" src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" alt="profile-icon" />
            </div>
        <div className="flex p-5 items-center justify-center gap-5 w-[300px] bg-[#1b1e25] h-[35%]">
        <section className="flex w-[300px] justify-between">
            <div>
        <h1 className="font-bold text-xl settingsName">{name.length == 0 ? 'Barlla' : name}</h1>
        <p className="font-bold settingsName">{name.length == 0 ? 'Barlla' : name}#3897</p>
            </div>
            <div>
            <span className='flex items-center'>
                    <BsStars />
                   <p>2190 XP</p> 
                    </span>
                    <span className='flex items-center'>
                    <BsFillTrophyFill />
                   <p>115</p> 
                   </span>
                   <span className='flex items-center'>
                    <FaFireAlt />
                   <p>286</p> 
                    </span>
            </div>
        </section>

        </div>
        </div>
        </section>
    )
}