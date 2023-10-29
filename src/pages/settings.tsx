import Input from "@/components/form/Input";
import ProfileCard from "@/components/layout/settings/ProfileCard";
import ChangeProfile from "@/components/layout/settings/ChangeProfile"
import TryBonnusCard from "@/components/layout/settings/TryBonnusCard"

import { useState, useEffect} from "react";
import { BiSolidPencil } from 'react-icons/bi'
import ContainerAccountInformation from "@/components/layout/settings/ContainerAccountInformation";
import Succcess from "@/components/layout/settings/flashCards/Success";
import Head from "next/head";
import Link from "next/link";
export default function Settings(){

    const [name, setName] = useState('Barlla')
    const [currentlyName, setCurrentlyName] = useState('')
    const settingName = (e:any) =>{
        setName(e.target.value)
    }

    return(
    <>
    <Head>
      <title>Settings</title>
    </Head>
        <main className="rounded-md mt-10 w-full px-2 md:p-5 flex flex-col gap-2 h-full">
            {currentlyName.length > 0 && <Succcess msg={currentlyName}/>}
            <section className="flex flex-wrap gap-5 sm:flex-col md:flex-row justify-center items-center md:justify-around">
            <ChangeProfile />
            <TryBonnusCard />
            <ProfileCard name={currentlyName}/>
            </section>
            <section>
            <h1 className="text-white text-4xl mt-10">Account Information</h1>
            <p className="text-[#9f9f9f]"><span className="font-bold">ID:</span> qA0UGnxK</p>
            <div className="flex flex-wrap gap-5">
            <div className="text-white flex items-center justify-center gap-2 bg-[#2e2c2d] w-[300px] p-2 rounded-xl mb-5">
            <input className=" text-[#9f9f9f] w-[300px] bg-transparent outline-none" type="text" placeholder='New Username' onChange={settingName} onKeyDown={(k) => {
                if(k.key === 'Enter'){
                    name.length == 0 ? currentlyName: setCurrentlyName(name) 
                }
            }}/>
            <BiSolidPencil className='text-white mr-3'/>
            </div>
            <ContainerAccountInformation>
            <Input text='Email:' type='text' placeholder='Insert your new email:' value='barllafoster@gmail.com'  handleOnChange={() => {}}/>
            </ContainerAccountInformation>
            <ContainerAccountInformation>
            <Input text='Password:' type='password' placeholder='Insert your new username' value='Barlla'  handleOnChange={() => {}}/>
            </ContainerAccountInformation>
            </div>
            </section>
            <section>
            <h1 className="text-white text-4xl mt-10">Privacy policy</h1>
            <p className="mt-5 text-[#9f9f9f] w-[300px] sm:w-[500px] md:w-[700px]">At (simplified business name), privacy and security are priorities and we are committed 
            to transparency in the processing of personal data of our users/customers.
            Therefore, this Privacy Policy establishes how the 
            collection, use and transfer of information from customers or other people 
            who access or use our website is carried out. <Link className='text-sky-500' href="/">Read More.</Link></p>
            </section>
        </main>
    </>
    )
}