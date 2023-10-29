import { BiSolidLockAlt } from'react-icons/bi'

export default function ContainerAccountInformation({children}:any){
    return(
        <div className="flex flex-col">
            <div className="flex gap-3">
            {children}
            <button className="hidden w-10 h-10 bg-[#2e2c2d] rounded-md sm:flex justify-center items-center"><BiSolidLockAlt className='text-[#9f9f9f]'/></button>
            </div> 
            </div>
    )
}