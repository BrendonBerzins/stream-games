import Image from 'next/image'
import { HiPencil} from 'react-icons/hi'

export default function ChangeProfile() {
    return(
        <section>
        <h1 className="text-white text-4xl">Account Settings</h1>
        <p className="text-[#9f9f9f]">Manage your accounts datails.</p>
        <section className="flex gap-10 mt-10">
        <section className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[#9f9f9f] mb-5">Change Picture</h1>
        <Image height={80} width={80} className="rounded-full h-20 w-20" src="https://assets.moxfield.net/profile/profile-5994-81598eaa-48df-40f2-ac4b-b5fce005dd7e" alt="profile-icon" />
        </section>
        </section>
        </section>
    )
}