import { AiFillCheckCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
export default function Succcess({msg}:any){
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
            <section className="success text-white absolute flex justify-center items-center gap-5 bg-green-500 w-[300px] sm:w-[500px] p-5">
            <h1 className="font-bold">Change made successfully</h1>
            <AiFillCheckCircle className='text-4xl'/>
            </section>
     )}
     </>
    )
}