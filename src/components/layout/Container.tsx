import Sidebar from "./Sidebar";
type ContainerProps = {
    children: React.ReactNode;
};

import Head from 'next/head'

export default function Container({children}:ContainerProps){
    return(
        <>
        <Head>
            <meta name='keywords' content="free games, free to play, games"></meta>
            <meta name='description' content="Find the best free games now"></meta>
            <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/4315/4315512.png"/>
        </Head>
        <div className="flex">
        <Sidebar/>
        <div className={`bg-[#21242d] w-[100%] flex flex-col
         justify-center items-center h-screen overflow-auto overflow-x-hidden`}>{children}</div>
        </div>
         </>
    )
}