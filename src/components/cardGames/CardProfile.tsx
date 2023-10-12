import { BsPlaystation, BsWindows, BsXbox } from 'react-icons/bs'
import { IoAddOutline } from 'react-icons/io5'
import Link from 'next/link'

export default function CardProfile({id, name, background}:any){
    return(
        <div key={id} className={`w-[250px] h-[300px] rounded-xl overflow-auto bg-[#1b1e25] 
        hover:border hover:border-cyan-500 p-3 transition ease-in scale-[0.9] hover:scale-[1] 
        shadow-xl shadow-black hover:shadow-cyan-500 hover:shadow-md`}>
            <img key={id} className='rounded-xl h-[55%] w-full' src={`${background}`} />
            <h1 key={id} className='font-bold text-white text-one-line'>{name}</h1>
            <div className='flex gap-3 text-[#727071] mt-3'>
              <BsPlaystation />
              <BsWindows />
              <BsXbox />
            </div>
            <div key={id} className='flex gap-5 pt-5'>
              <button key={id} className={`bg-white text-[#1b1e25] p-2 
                rounded-md flex items-center gap-2`}>
                <IoAddOutline className={`text-xl font-bold`}/>
                <Link href={'/game/:id'}>More</Link>
             </button>
            </div>
      </div>
    )
}