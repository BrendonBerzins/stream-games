import { HiPencil} from 'react-icons/hi'

export default function ChangeProfile({color, handleColorChange}) {
    return(
        <section>
        <h1 className="text-white text-4xl">Account Settings</h1>
        <p className="text-[#9f9f9f]">Manage your account's datails.</p>
        <section className="flex gap-10 mt-10">
        <div  className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[#9f9f9f] mb-5">Profile theme</h1>
        <div className="rounded-xl w-16 h-16 flex flex-col justify-center items-center">
        <HiPencil className='absolute text-white'/>
        <input className='h-16 w-16 rounded-xl bg-transparent' type="color" value={color} onChange={handleColorChange}/>
        </div>
        <h1 className="text-[#9f9f9f]">Primary</h1>
        </div>
        <section className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[#9f9f9f] mb-5">Change Picture</h1>
        <img className="rounded-full h-20 w-20" src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" alt="profile-icon" />
        </section>
        </section>
        </section>
    )
}