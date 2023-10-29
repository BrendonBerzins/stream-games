import { BsFillCloudArrowDownFill } from 'react-icons/bs'
import Link from 'next/link'

type ComponentProps = {
  id?: string;
  name?: string;
  background?: string;
  genre?: string;
  platform?: string;
  index: number;
}

export default function CardGame({id, name, background, genre, platform, index}:ComponentProps){
    return(
      <Link key={index} href={`/game/${id}`}>
        <div className={`w-[250px] h-[300px] rounded-xl overflow-auto bg-[#1b1e25] 
        hover:border hover:border-cyan-500 p-3 transition ease-in scale-[0.9] hover:scale-[1] 
        shadow-xl shadow-black hover:shadow-cyan-500 hover:shadow-md`}>
            <img className='rounded-xl h-[55%] w-full' src={`${background}`} />
            <h1 className='font-bold text-white text-one-line'>{name}</h1>
            <span className='text-[#727071] mt-3'>{platform}</span>
            <div className='flex gap-5 pt-5'>
              <button className={`bg-white text-[#1b1e25] p-2 
                rounded-md flex items-center gap-2`}>
                <BsFillCloudArrowDownFill className={`text-xl`}/>
                <Link href={`/game/${id}`}>INSTALL</Link>
             </button>
             <div className='flex text-[#727071] gap-2 items-center justify-center'>
              <span className='font-bold'>{genre}</span>
            </div>
            </div>
      </div>
          </Link>
    )
}