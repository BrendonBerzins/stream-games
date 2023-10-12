import { BsPersonFillAdd } from 'react-icons/bs'
import { RiUserSettingsLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

export default function Friends(){
    const favoriteFriendsList = [
        {
            imageProfile: 'https://p2.trrsf.com/image/fget/cf/600/600/images.terra.com/2022/10/03/overwatch-2-cover-qhsw1srgxh6h.png',
            useName: 'Diana',
            description: 'Love Overwatch ❤️',
        }
    ]
    const friendsList = [
        {
            imageProfile: 'https://i.pinimg.com/280x280_RS/eb/f2/aa/ebf2aafd74920b9f15b605476814ec7f.jpg',
            useName: 'DrDisconnect',
            description: 'Hard work lol',
        },
        {
            imageProfile: 'https://avatarfiles.alphacoders.com/916/91642.jpg',
            useName: 'Thony',
            description: 'dont disturb me...',
        },
        {
            imageProfile: 'https://i.pinimg.com/736x/1a/8c/5a/1a8c5adb2405a2e9d4172e8c97d62cc3.jpg',
            useName: 'Jenny',
            description: '"I just wish I had jumped"',
        },
        {
            imageProfile: 'https://wallpapers-clan.com/wp-content/uploads/2023/04/fortnite-style-2-pfp-01.jpg',
            useName: 'Tbsc Vipperz',
            description: 'Im available',
        },
        {
            imageProfile: 'https://wallpapers-clan.com/wp-content/uploads/2023/04/fortnite-style-2-pfp-02.jpg',
            useName: 'Zabuuzz',
            description: 'Nija player',
        },
        {
            imageProfile: 'https://i.pinimg.com/originals/b8/05/40/b805401bdafa747ed2eab529aef832e4.jpg',
            useName: 'Morgana',
            description: 'Not now 😠',
        }
    ]
    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const namesFilter = friendsList.filter((name) => name.useName.toLowerCase().includes(lowerSearch))
    return(
        <main className="w-full h-screen bg-[#21242d] flex overflow-hidden">
        <section className="h-full w-[70%]"></section>
        <aside className="bg-[#1b1e25] border-l border-l-[#282b34] h-full w-[30%] shadow-lg shadow-black transition duration-200 overflow-auto scroll-smooth">
            <div className="flex w-full p-5 gap-5">
            <div>
            <img className="rounded-full h-12 w-12" src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" alt="profile-icon" />
            <div className="bg-[#1b1e25] w-5 h-5 rounded-full relative bottom-4 left-7 flex items-center justify-center">
            <div className="bg-green-500 w-3 h-3 rounded-full"></div>
            </div>
            </div>
            <div>
                <h1 className="text-[#697c8a] font-bold">barlla#3897</h1>
                <h1 className="text-white">Online</h1>
            </div>
            </div>
            <section className="flex gap-3 items-center justify-center">
            <button className='bg-[#282b32] p-2 rounded-md text-[#b4b6bb] hover:bg-[#1b1e25] transition ease-in-out duration-500'><BsPersonFillAdd /></button>
            <button className='bg-[#282b32] p-2 rounded-md text-[#b4b6bb] hover:bg-[#1b1e25] transition ease-in-out duration-500'><RiUserSettingsLine /></button>
            <div className='flex items-center justify-center p-2 gap-3 bg-[#282b32] rounded-full text-[#b4b6bb]'>
                <input className='bg-transparent outline-none' type='text' placeholder='Search Friends' value={search} onChange={(e)=> setSearch(e.target.value)}/>
                <AiOutlineSearch />
            </div>
            </section>
            <section className='mt-5'>
                <p className='text-[#b4b6bb] ml-3'>Favorites - 1</p>
                {favoriteFriendsList.length > 0 && (
                    <div className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                        <img className="rounded-full h-12 w-12" src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName}/>
                        <div>
                        <p className="text-[#697c8a] font-bold">{favoriteFriendsList[0].useName}</p>
                        <p className='text-[#b4b6bb]'>{favoriteFriendsList[0].description}</p>
                        </div>
                    </div>
                )}
            </section>
            <section className='mt-5'>
                <p className='text-[#b4b6bb] ml-3'>Friends - 6/6</p>
                <section className=''>
                    {
                        namesFilter.map((info, index) => (
                            <div key={index} className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                            <img className="rounded-full h-12 w-12" src={info.imageProfile} alt={info.useName}/>
                            <div>
                            <p className="text-[#697c8a] font-bold">{info.useName}</p>
                            <p className='text-[#b4b6bb]'>{info.description}</p>
                            </div>
                        </div>
                        ))
                    }
                </section>
            </section>
        </aside>
        </main>
    )
}