import { BsCloudCheckFill } from 'react-icons/bs'

export default function TryBunnusCard(){
    return(
        <section className="text-white w-[300px] h-[250px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex flex-col justify-center items-center p-5 gap-5">
        <BsCloudCheckFill className='text-9xl'/>
        <h1 className='text-xl font-bold'>Try it for 1 month free.</h1>
        <p>Customize your profile and achievements and get a 200P bonus</p>
        <button className='text-sky-500 bg-white p-2 rounded-md'>Try for free</button>
        </section>
    )
}