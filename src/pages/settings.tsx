import Input from "@/components/form/Input";
import ProfileCard from "@/components/layout/settings/ProfileCard";
import ChangeProfile from "@/components/layout/settings/ChangeProfile"
import TryBonnusCard from "@/components/layout/settings/TryBonnusCard"

import { useState, useEffect} from "react";
import { BiSolidPencil } from 'react-icons/bi'
import ContainerAccountInformation from "@/components/layout/settings/ContainerAccountInformation";
import Succcess from "@/components/layout/settings/flashCards/Success";
import Error from "@/components/layout/settings/flashCards/Error";
export default function Settings(){

    const [color, setColor] = useState('#0ea5e9')
    const [name, setName] = useState('')
    const [currentlyName, setCurrentlyName] = useState('Barlla')
    const handleColorChange = (e:any) =>{
        setColor(e.target.value)
    }
    const settingName = (e:any) =>{
        setName(e.target.value)
    }

    return(
        <main className="bg-glass h-screen m-10 w-[90%] p-5 flex flex-col gap-2">
            {currentlyName.length > 0 && <Succcess msg={currentlyName}/>}
            <Error msg={currentlyName === ''}/>
            <section className="flex justify-between">
            <ChangeProfile color={color} handleColorChange={handleColorChange}/>
            <TryBonnusCard />
            <ProfileCard color={color} name={currentlyName}/>
            </section>

            <section>
            <h1 className="text-white text-4xl mt-10">Account Information</h1>
            <p className="text-[#9f9f9f]"><span className="font-bold">ID:</span> qA0UGnxK</p>
            <div className="flex gap-5">
            <div className="text-white flex items-center justify-center gap-2 bg-[#2e2c2d] w-[300px] p-2 rounded-xl mb-5">
            <input className=" text-[#9f9f9f] w-[100%] bg-transparent outline-none" type="text" placeholder='New Username' onChange={settingName} onKeyDown={(k) => {
                if(k.key === 'Enter'){
                    setCurrentlyName(name)
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
            <p className="mt-5 text-[#9f9f9f] w-[80%]">At (simplified business name), privacy and security are priorities and we are committed 
            to transparency in the processing of personal data of our users/customers.
            Therefore, this Privacy Policy establishes how the 
            collection, use and transfer of information from customers or other people 
            who access or use our website is carried out. <a className='text-sky-500' href="/">Read More.</a></p>
            </section>
        </main>
    )
}