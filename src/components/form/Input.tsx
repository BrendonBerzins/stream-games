export default function Input({type, placeholder, value, handleOnchange, handleOnSubmit, text}:any){
    return(
        <form onSubmit={handleOnSubmit}>
            <div className={`text-white flex items-center justify-center gap-2
             bg-[#2e2c2d] w-[300px] p-2 rounded-xl mb-5`}>
            <h1>{text}</h1>
            <input className=" text-[#9f9f9f] w-[100%] bg-transparent outline-none" type={type} value={value} placeholder={placeholder} onChange={handleOnchange}/>
            </div>
        </form>
    )
}