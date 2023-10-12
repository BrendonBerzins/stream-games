import Sidebar from "./Sidebar";

export default function Container({children}:any){
    return(
        <div className="flex">
        <Sidebar/>
        <div className={`bg-[#21242d] w-[100%] flex flex-col
         justify-center items-center h-screen overflow-auto`}>{children}</div>
        </div>
    )
}