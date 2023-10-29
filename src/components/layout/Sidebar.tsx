import Link from "next/link";
import {AiOutlineSearch} from'react-icons/ai'
import {FaHome, FaStoreAlt, FaUsers, FaUserAlt, FaTrophy} from'react-icons/fa'
import {BiLibrary, BiSolidChat} from'react-icons/bi'
import {BsFillCloudArrowDownFill} from'react-icons/bs'
import {IoMdSettings, IoIosArrowBack, IoIosArrowForward} from'react-icons/io'
import { useState } from 'react'
import Image from "next/image";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(true)
    return(
    <section className="flex items-center bg-[#1b1e25] shadow-lg">
            {showSidebar ? 
    <section className="flex items-center"> 
        <aside className="h-screen w-[35vh] overflow-hidden transition-sidebar">
            <nav className="h-full w-[100%] flex flex-col">
            <div className="p-4 pb-2 flex justify-center items-center">
                <div className="flex gap-3">
                <Image className="rounded-full h-12 w-12" src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" alt="profile-icon" />
                <div className="text-white flex flex-col justify-center items-center">
                <h1 className="font-bold text-md">Barlla</h1>
                <p>258,30$</p>
                </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center justify-center gap-2 bg-[#282b32] w-[100%] p-2 rounded-xl mb-5">
            <AiOutlineSearch className='text-white text-xl cursor-pointer'/>
            <input className="w-[100%] bg-transparent outline-none text-[#727071]" type="text" placeholder="Search" />
                </div>
            <h2 className="text-white text-md font-bold mb-5">Stream Games</h2>
            <ul className="text-[#727071] flex flex-col gap-3">
                <Link onClick={() => setShowSidebar(false)} href={'/'} className="navLinkIcons"><FaHome/>Home</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/store'} className="navLinkIcons"><FaStoreAlt/>Store</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/libray'} className="navLinkIcons"><BiLibrary/>Libray</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/community'} className="navLinkIcons"><FaUsers/>Community</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/settings'} className="navLinkIcons"><IoMdSettings/>Settings</Link>
            </ul>
            <h2 className="text-white text-md font-bold my-5">PLAYER</h2>
            <ul className="text-[#727071] flex flex-col gap-3">
                <Link onClick={() => setShowSidebar(false)} href={'/profile'} className="navLinkIcons"><FaUserAlt/>Profile</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/achivements'} className="navLinkIcons"><FaTrophy/>Achivements</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/friends'} className="navLinkIcons"><BiSolidChat/>Friends</Link>
                <Link onClick={() => setShowSidebar(false)} href={'/downloads'} className="navLinkIcons"><BsFillCloudArrowDownFill/>Downloads</Link>
            </ul>
            <h2 className="text-white text-md font-bold my-2">MESSAGES</h2>
            <Link onClick={() => setShowSidebar(false)} href={'/friends'} className="flex gap-2">
                <Image className="rounded-full h-8 w-8 cursor-pointer" src="https://p2.trrsf.com/image/fget/cf/600/600/images.terra.com/2022/10/03/overwatch-2-cover-qhsw1srgxh6h.png" alt="profile-icon" />
                <Image className="rounded-full h-8 w-8 cursor-pointer" src="https://i.pinimg.com/280x280_RS/eb/f2/aa/ebf2aafd74920b9f15b605476814ec7f.jpg" alt="profile-icon" />
                <Image className="rounded-full h-8 w-8 cursor-pointer" src="https://avatarfiles.alphacoders.com/916/91642.jpg" alt="profile-icon" />
                <Image className="rounded-full h-8 w-8 cursor-pointer" src="https://i.pinimg.com/736x/1a/8c/5a/1a8c5adb2405a2e9d4172e8c97d62cc3.jpg" alt="profile-icon" />
            </Link>
            </div>
            </nav>
        </aside>
            <button className="h-10 w-10 bg-[#282b32] p-2 flex items-center justify-center text-white rounded-l-full" onClick={() => setShowSidebar(false)}><IoIosArrowBack /></button>
     </section>
        : <section className="h-screen flex items-center">
            <button className="h-10 w-10 bg-[#282b32] p-2 flex items-center justify-center text-white rounded-r-full " onClick={() => setShowSidebar(true)}><IoIosArrowForward /></button>
        </section>
        }
        </section>
        )
}