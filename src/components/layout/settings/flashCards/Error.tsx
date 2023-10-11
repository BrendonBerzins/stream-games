import { BiSolidError } from 'react-icons/bi'
import { useState, useEffect } from 'react'
export default function Error({msg}:any){
    const [visible, setVisible] = useState(false)
    useEffect(()=> {
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)
        return () => clearTimeout(timer)
    },[msg])
    return(
        <>
        {visible && (
            <section className="text-white absolute flex justify-center items-center gap-5 bg-red-500 w-[30%] p-5">
            <h1 className="font-bold">You cannot leave the field empty</h1>
            <BiSolidError className='text-4xl'/>
            </section>
     )}
     </>
    )
}