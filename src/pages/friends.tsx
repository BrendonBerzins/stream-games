import { BsPersonFillAdd, BsFillTelephoneFill, BsCameraVideoFill } from 'react-icons/bs'
import { RiUserSettingsLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMicrophone, FaPaperclip, FaCamera} from 'react-icons/fa'
import { FaRegFaceSmile } from 'react-icons/fa6' 
import { useState } from 'react'
import Head from 'next/head'
import { favoriteFriendsList, friendsList } from '@/components/utils/Friends'
import Image from 'next/image'

export default function Friends(){

    const [search, setSearch] = useState('')
    const lowerSearch = search.toLowerCase()
    const namesFilter = friendsList.filter((name) => name.useName.toLowerCase().includes(lowerSearch))
    const [showMobileModalFriends, setShowMobileModalFriends] = useState(false)
    const [friendChat, setFriendChat] = useState(
        <div className='flex flex-col h-full w-full'>
        <section className={`flex justify-center items-center bg-[#1b1e25] 
        shadow-black shadow-2xl 
        border-b border-b-[#545761] h-[10%] w-full gap-5 text-white`}>
            <div className='flex gap-3 items-center'>
                <Image className={`h-10 w-10 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />
                <h1 className='text-xl'>{favoriteFriendsList[0].useName}</h1>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
            </div>
            <div className='flex gap-5'>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <BsFillTelephoneFill />
                </button>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <BsCameraVideoFill />
                </button>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <AiOutlineSearch />
                </button>
                    <MdKeyboardArrowDown className={`md:hidden text-3xl`} onClick={() => setShowMobileModalFriends(true)}/>
            </div>

        </section>
        <section className={`flex flex-col justify-center items-center
        text-white gap-5 w-full h-[90%]`}>
            <div className='flex gap-5'>
                <Image className={`h-20 w-20 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />
                <div>
                    <h1 className="text-2xl">{favoriteFriendsList[0].useName}</h1>
                    <h1>{favoriteFriendsList[0].description}</h1>
                </div>
            </div>
            <h1 className='text-4xl'>Say Hi 👋 to {favoriteFriendsList[0].useName}</h1>
            <p>No chat history found. Start a conversation with {favoriteFriendsList[0].useName}...</p>
        </section>
        </div>
    )
    return(
    <>
    <Head>
      <title>Messages</title>
    </Head>
        <main className="w-full h-screen flex overflow-hidden">
        <section className="h-full w-full flex flex-col md:w-[70%]">
            {showMobileModalFriends &&
             <aside className="bg-[#1b1e25] border-l border-l-[#282b34] h-full w-full shadow-lg shadow-black transition duration-200 overflow-auto scroll-smooth fixed">
             <div className="flex w-full p-5 gap-5">
             <div>
             <Image className="rounded-full h-12 w-12" src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" alt="profile-icon" />
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
                     <div onClick={(e) => {
                        setShowMobileModalFriends(false)
                         setFriendChat(
                             <div className='flex flex-col h-full w-full'>
                         <section className={`flex justify-center items-center bg-[#1b1e25] 
                         shadow-black shadow-2xl 
                         border-b border-b-[#545761] h-[10%] w-full gap-5 text-white`}>
                             <div className='flex gap-3 items-center'>
                                 <Image className={`h-10 w-10 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />
                                 <h1 className='text-xl'>{favoriteFriendsList[0].useName}</h1>
                                 <div className='h-3 w-3 rounded-full bg-green-500'></div>
                             </div>
                             <div className='flex gap-5'>
                                 <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                 transition ease-in-out duration-500`}>
                                     <BsFillTelephoneFill />
                                 </button>
                                 <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                 transition ease-in-out duration-500`}>
                                     <BsCameraVideoFill />
                                 </button>
                                 <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                 transition ease-in-out duration-500`}>
                                     <AiOutlineSearch />
                                 </button>
                                     <MdKeyboardArrowDown className={`md:hidden text-3xl`} onClick={() => setShowMobileModalFriends(true)}/>
                             </div>
 
                         </section>
                         <section className={`flex flex-col justify-center items-center
                         text-white gap-5 w-full h-[90%]`}>
                             <div className='flex gap-5'>
                                 <Image className={`h-20 w-20 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />
                                 <div>
                                     <h1 className='text-2xl'>{favoriteFriendsList[0].useName}</h1>
                                     <h1>{favoriteFriendsList[0].description}</h1>
                                 </div>
                             </div>
                             <h1 className='text-4xl'>Say Hi 👋 to {favoriteFriendsList[0].useName}</h1>
                             <p>No chat history found. Start a conversation with {favoriteFriendsList[0].useName}...</p>
                         </section>
                         </div>
                     
                     )
                         }
                     } className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                     <Image className="rounded-full h-12 w-12" src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName}/>
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
                             <div onClick={() => {
                                setShowMobileModalFriends(false)
                                setFriendChat(
                                 <div className='flex flex-col h-full w-full'>
                                 <section className={`flex justify-center items-center bg-[#1b1e25] 
                                 shadow-black shadow-2xl 
                                 border-b border-b-[#545761] h-[10%] w-full gap-5 text-white`}>
                                     <div className='flex gap-3 items-center'>
                                         <Image className={`h-10 w-10 rounded-full`} src={info.imageProfile} alt={info.useName} />
                                         <h1 className='text-xl'>{info.useName}</h1>
                                         <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                     </div>
                                     <div className='flex gap-5'>
                                         <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                         transition ease-in-out duration-500`}>
                                             <BsFillTelephoneFill />
                                         </button>
                                         <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                         transition ease-in-out duration-500`}>
                                             <BsCameraVideoFill />
                                         </button>
                                         <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                         transition ease-in-out duration-500`}>
                                             <AiOutlineSearch />
                                         </button>
                                             <MdKeyboardArrowDown className={`md:hidden text-3xl`} onClick={() => setShowMobileModalFriends(true)}/>
                                     </div>
 
                                 </section>
                                 <section className={`flex flex-col justify-center items-center
                                 text-white gap-5 w-full h-[90%]`}>
                                     <div className='flex gap-5'>
                                         <Image className={`h-20 w-20 rounded-full`} src={info.imageProfile} alt={info.useName} />
                                         <div>
                                             <h1 className='text-2xl'>{info.useName}</h1>
                                             <h1>{info.description}</h1>
                                         </div>
                                     </div>
                                     <div className='flex flex-col'>
                                     <h1 className='text-4xl'>Say Hi 👋 to {info.useName}</h1>
                                     <p>No chat history found. Start a conversation with {info.useName}...</p>
                                     </div>
                                 </section>
                                 </div>
                             
                             )}} key={index} className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                             <Image className="rounded-full h-12 w-12" src={info.imageProfile} alt={info.useName}/>
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
            }
            <section className='h-[90%] w-full flex justify-center items-center gap-5'>

                <div className='w-full h-full'>
                {friendChat}
                </div>
            </section>
            <section className={`flex justify-center items-center bg-[#1b1e25] shadow-black shadow-2xl 
            border-t border-t-[#545761] h-[10%] w-full gap-5`}>
            <div className='flex items-center justify-center w-[70%] p-2 gap-3 bg-[#282b32] rounded-full text-[#b4b6bb]'>
                <input className='w-[95%] bg-transparent outline-none' type='text' placeholder='Write Something' 
                />
                <FaMicrophone className='text-green-500 cursor-pointer mr-3'/>
            </div>
            <div className='flex gap-2'>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <FaPaperclip />
                </button>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <FaCamera />
                </button>
                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                transition ease-in-out duration-500`}>
                    <FaRegFaceSmile />
                </button>
            </div>
            </section>
        </section>
        <aside className="overflow-x-hidden bg-[#1b1e25] border-l border-l-[#282b34] h-full w-[30%] shadow-lg shadow-black transition duration-200 overflow-auto scroll-smooth hidden md:flex md:flex-col">
            <div className="flex w-full p-5 gap-5">
            <div>
            <Image className="rounded-full h-12 w-12" src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" alt="profile-icon" />
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
                    <div onClick={(e) => setFriendChat(
                        <div className='flex flex-col h-full w-full'>
                        <section className={`flex justify-center items-center bg-[#1b1e25] 
                        shadow-black shadow-2xl 
                        border-b border-b-[#545761] h-[10%] w-full gap-5 text-white`}>
                            <div className='flex gap-3 items-center'>
                                <Image className={`h-10 w-10 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />
                                <h1 className='text-xl'>{favoriteFriendsList[0].useName}</h1>
                                <div className='h-3 w-3 rounded-full bg-green-500'></div>
                            </div>
                            <div className='flex gap-5'>
                                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                transition ease-in-out duration-500`}>
                                    <BsFillTelephoneFill />
                                </button>
                                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                transition ease-in-out duration-500`}>
                                    <BsCameraVideoFill />
                                </button>
                                <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                transition ease-in-out duration-500`}>
                                    <AiOutlineSearch />
                                </button>
                                    <MdKeyboardArrowDown className={`md:hidden text-3xl`} onClick={() => setShowMobileModalFriends(true)}/>
                            </div>

                        </section>
                        <section className={`flex flex-col justify-center items-center
                        text-white gap-5 w-full h-[90%]`}>
                            <div className='flex gap-5'>
                                <Image className={`h-20 w-20 rounded-full`} src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName} />

                                <div>
                                    <h1 className='text-2xl'>{favoriteFriendsList[0].useName}</h1>
                                    <h1>{favoriteFriendsList[0].description}</h1>
                                </div>
                            </div>
                            <h1 className='text-4xl'>Say Hi 👋 to {favoriteFriendsList[0].useName}</h1>
                            <p>No chat history found. Start a conversation with {favoriteFriendsList[0].useName}...</p>
                        </section>
                        </div>
                    
                    )} className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                        <Image className="rounded-full h-12 w-12" src={favoriteFriendsList[0].imageProfile} alt={favoriteFriendsList[0].useName}/>

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
                            <div onClick={() => setFriendChat(
                                <div className='flex flex-col h-full w-full'>
                                <section className={`flex justify-center items-center bg-[#1b1e25] 
                                shadow-black shadow-2xl
                                border-b border-b-[#545761] h-[10%] w-full gap-5 text-white`}>
                                    <div className='flex gap-3 items-center'>
                                        <Image className={`h-10 w-10 rounded-full`} src={info.imageProfile} alt={info.useName} />
                                        <h1 className='text-xl'>{info.useName}</h1>
                                        <div className='h-3 w-3 rounded-full bg-green-500'></div>
                                    </div>
                                    <div className='flex gap-5'>
                                        <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                        transition ease-in-out duration-500`}>
                                            <BsFillTelephoneFill />
                                        </button>
                                        <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                        transition ease-in-out duration-500`}>
                                            <BsCameraVideoFill />
                                        </button>
                                        <button className={`bg-[#282b32] p-2 rounded-full text-[#b4b6bb] hover:bg-[#1b1e25] 
                                        transition ease-in-out duration-500`}>
                                            <AiOutlineSearch />
                                        </button>
                                            <MdKeyboardArrowDown className={`md:hidden text-3xl`} onClick={() => setShowMobileModalFriends(true)}/>
                                    </div>

                                </section>
                                <section className={`flex flex-col justify-center items-center
                                text-white gap-5 w-full h-[90%]`}>
                                    <div className='flex gap-5'>
                                        <Image className={`h-20 w-20 rounded-full`} src={info.imageProfile} alt={info.useName} />
                                        <div>
                                            <h1 className='text-2xl'>{info.useName}</h1>
                                            <h1>{info.description}</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-col'>
                                    <h1 className='text-4xl'>Say Hi 👋 to {info.useName}</h1>
                                    <p>No chat history found. Start a conversation with {info.useName}...</p>
                                    </div>
                                </section>
                                </div>
                            
                            )} key={index} className='flex p-3 gap-3 hover:bg-[#282b32] transition ease-in-out duration-500 cursor-pointer'>
                            <Image className="rounded-full h-12 w-12" src={info.imageProfile} alt={info.useName}/>
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
    </>
    )
}