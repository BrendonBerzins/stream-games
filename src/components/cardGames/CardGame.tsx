import { BsFillCloudArrowDownFill, BsFillStarFill } from 'react-icons/bs'
import Link from 'next/link'

export default function CardGame({id, name, background, rating}:any){
    return(
        <div key={id} className='w-[250px] h-[300px] rounded-xl overflow-auto border border-white p-3 transition ease-in scale-[0.9] hover:scale-[1] shadow-xl shadow-black'>
        <img key={id} className='rounded-xl h-[55%] w-full' src={`${background}`} />
        <h1 key={id} className='font-bold text-white'>{name}</h1>
        <div key={id} className='flex gap-5 pt-5'>
        <button key={id} className='bg-gradient-to-r from-[#3c97e9] to-[#235fcf] p-2 rounded-xl text-white flex items-center gap-2'><BsFillCloudArrowDownFill /><Link href={'/game/:id'}>INSTALL</Link></button>
        <div key={id} className='flex text-yellow-500 gap-2 border border-yellow-500 p-3 rounded-md w-20 h-10 items-center justify-center  bg-slate-100'>
        <BsFillStarFill/>
        <span key={id} className='font-bold'>{rating}</span>
        </div>
        </div>
      </div>
    )
}