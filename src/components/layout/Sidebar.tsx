import Link from "next/link";
import {AiOutlineSearch} from'react-icons/ai'
import {FaHome, FaStoreAlt, FaUsers, FaUserAlt, FaTrophy} from'react-icons/fa'
import {BiLibrary, BiSolidChat} from'react-icons/bi'
import {BsFillCloudArrowDownFill} from'react-icons/bs'
import {IoMdSettings} from'react-icons/io'

export default function Sidebar() {
    return(
        <aside className="h-screen w-[35vh]">
            <nav className="h-full w-[100%] flex flex-col bg-[#1b1e25] shadow-lg">
            <div className="p-4 pb-2 flex justify-center items-center">
                <div className="flex gap-3">
                <img className="rounded-full h-12 w-12" src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" alt="profile-icon" />
                <div className="text-white flex flex-col justify-center items-center">
                <h1 className="font-bold text-md">Barlla</h1>
                <p>258,30$</p>
                </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center justify-center gap-2 bg-[#282b32] w-[100%] p-2 rounded-xl mb-5">
            <AiOutlineSearch className='text-white text-xl cursor-pointer'/>
            <input className="w-[100%] bg-transparent outline-none" type="text" placeholder="Search" />
                </div>
            <h2 className="text-white text-md font-bold mb-5">Stream Games</h2>
            <ul className="text-[#727071] flex flex-col gap-3">
                <Link href={'/'} className="navLinkIcons"><FaHome/>Home</Link>
                <Link href={'/store'} className="navLinkIcons"><FaStoreAlt/>Store</Link>
                <Link href={'/libray'} className="navLinkIcons"><BiLibrary/>Libray</Link>
                <Link href={'/community'} className="navLinkIcons"><FaUsers/>Community</Link>
                <Link href={'/settings'} className="navLinkIcons"><IoMdSettings/>Settings</Link>
            </ul>
            <h2 className="text-white text-md font-bold my-5">PLAYER</h2>
            <ul className="text-[#727071] flex flex-col gap-3">
                <Link href={'/profile'} className="navLinkIcons"><FaUserAlt/>Profile</Link>
                <Link href={'/achivements'} className="navLinkIcons"><FaTrophy/>Achivements</Link>
                <Link href={'/friends'} className="navLinkIcons"><BiSolidChat/>Friends</Link>
                <Link href={'/downloads'} className="navLinkIcons"><BsFillCloudArrowDownFill/>Downloads</Link>
            </ul>
            <h2 className="text-white text-md font-bold my-2">MESSAGES</h2>
            <div className="flex gap-2">
                <img className="rounded-full h-8 w-8" src="https://i.redd.it/qaa2lgwkuid31.png" alt="profile-icon" />
                <img className="rounded-full h-8 w-8" src="https://i.redd.it/y1llg2o6gf361.png" alt="profile-icon" />
                <img className="rounded-full h-8 w-8" src="https://i.redd.it/3f2lp4o6gf361.png" alt="profile-icon" />
                <img className="rounded-full h-8 w-8" src="https://wallpapers-clan.com/wp-content/uploads/2023/04/fortnite-style-2-pfp-21.jpg" alt="profile-icon" />
            </div>
            </div>
            </nav>
        </aside>
    )
}