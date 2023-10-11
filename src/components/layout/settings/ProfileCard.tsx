export default function ProfileCard({color, name}:any){
    return(
        <section className="flex bg-white flex-col gap-5 w-[300px] h-[200px] pb-3 rounded-xl overflow-hidden">
        <div style={{backgroundColor:color}}className={`w-full h-20 z-0`}></div>
        <div className="flex flex-col z-10">
        <img className="rounded-full h-24 w-24 absolute top-7 ml-3 bg-white p-1" src="https://i.pinimg.com/1200x/51/f5/2a/51f52acb35f7b47e069ce027682475b2.jpg" alt="profile-icon" />
        <div className="flex p-5 items-center gap-5">
        <section>
        <h1 className="font-bold text-xl">{name}</h1>
        <p className="text-[#222]">{name}#3897</p>
        </section>
        <div className="bg-[#2e2c2d] mt-5 text-white rounded-xl justify-center items-center w-32 h-6 px-2">
        <span>✨ Game Pound</span>
        </div>
        </div>
        </div>
        </section>
    )
}