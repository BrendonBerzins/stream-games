export default function CardLibray({id, name, background}:any){
    return(
                <div key={id} className='w-[250px] h-[200px] rounded-xl overflow-hidden border border-white p-3 transition ease-in scale-[0.9] hover:scale-[1] shadow-xl shadow-black brightness-50 hover:brightness-100'>
                <img key={id} className='rounded-xl h-[65%] w-full' src={`${background}`} />
                <h1 key={id} className='font-bold text-white'>{name}</h1>
                <div key={id} className='flex gap-5 pt-5'>
                </div>
                </div>
            )
}
