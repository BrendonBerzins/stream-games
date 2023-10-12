export default function CardLibray({id, background}:any){
    return(
                <div key={id} className={`cursor-pointer w-[300px] h-[200px] rounded-xl overflow-hidden 
                transition ease-in scale-[0.9] hover:scale-[1] 
                shadow-xl shadow-black brightness-50 hover:brightness-100`}>
                <img key={id} className='rounded-xl h-full w-full' src={`${background}`} />
                
                </div>
            )
}
