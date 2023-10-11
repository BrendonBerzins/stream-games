export default function Community(){
    return(
        <main className="w-full h-full">
            <h1 className="text-white text-2xl p-10">News</h1>
            <section className="flex w-[80%] ml-10">
                <img className='w-[50%]' src='https://i0.wp.com/www.nintendo-town.fr/wp-content/uploads/2020/05/UnrealEngine_blog_connect-with-the-unreal-engine-community-online_UE_Community_Online_Feed-thumb-desktop-1400x788-a6917dba2f2c.png?fit=1400%2C788&ssl=1' alt='unreal_img' />
                <div className="bg-[#272526] w-[50%] p-10">
                    <h1 className="text-white text-2xl">Connect with the Unreal Engine community online</h1>
                    <p className="text-[#727071]">Although many physical events around the world are on hold, there are plenty of places to connect with the Unreal Engine community online. From forums, to webinars, livestreams and full-on virtual events, our community of creators is continually staying active.</p>
                </div>
            </section>
            <section className="flex w-full gap-5 mt-10 p-5">
                <section className="w-[70%] h-full">
               <h1 className="text-2xl text-white mb-5">Featured content</h1>
                <hr className="w-full border-[#1f1f1f] border-2"/>
                    <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
                    <section className="flex flex-col h-[350px] w-[350px]">
                    <img className="h-[50%]" src="https://cdn.bhdw.net/im/2021-tank-explosion-battlefield-2042-video-game-wallpaper-74908_w635.webp" alt='battlefield' />
                    <div className="h-[50%] bg-[#1f1f1f] p-5">
                    <h1 className="text-white text-xl">BATTLEFIELD 2042</h1>
                    <p className="text-card-community text-[#727071]">Play the 100 levels of the Season 6 Battle Pass to unlock content, including new weapons,
                     gadgets, and XP boosts. Camouflage yourself in the shadows with new uniforms tailored for 
                     the season and unlock new textures for your weapons.</p>
                    </div>
                    </section>
                    <section className="flex flex-col h-[350px] w-[350px]">
                    <img className="h-[50%]" src="https://cdn2.unrealengine.com/unreal-engine-free-marketplace-october-2023-feed-1920x1080-c82a852b7913.jpg?resize=1&w=1400" alt='feature unreal' />
                    <div className="h-[50%] bg-[#1f1f1f] p-5">
                    <h1 className="text-white text-xl">Featured free Unreal</h1>
                    <p className="text-card-community text-[#727071]">Looking for ways to make your games more visually stunning,
                     immersive, and engaging?
                     Explore October's Unreal Marketplace content, featuring free stylized natural environments, dark caves, 
                     grand coliseums, NPC optimization plugins, and more.</p>
                    </div>
                    </section>
                    <section className="flex flex-col h-[350px] w-[350px]">
                    <img className="h-[50%]" src="https://cdn2.unrealengine.com/unreal-engine-marketplace-august-2023-header-1920x1080-ba4e0d5dbd5b.jpg?resize=1&w=1400" alt='pirates' />
                    <div className="h-[50%] bg-[#1f1f1f] p-5">
                    <h1 className="text-white text-xl">August Marketplace Sale</h1>
                    <p className="text-card-community text-[#727071]">This month, we've got pirates,
                     we’ve got bedrooms, we’ve even got things that will ignite cars into a tower of flames. 
                     And all of these products—over 1,800 at last count—are available for 50% off. Well, for a few days at least.</p>
                    </div>
                    </section>
                    <section className="flex flex-col h-[350px] w-[350px]">
                    <img className="h-[50%]" src="https://cdn2.unrealengine.com/unreal-engine-marketplace-august-2023-roman-city-1920x1080-92abfc4e1daf.jpg" alt='roman empire' />
                    <div className="h-[50%] bg-[#1f1f1f] p-5">
                    <h1 className="text-white text-xl">August Marketplace Sale</h1>
                    <p className="text-card-community text-[#727071]">Resurrect the Roman Empire with low-poly assets designed to set up everything from a city stroll to a gladiatorial competition. While detailed, this pack is also optimized for games, so the Old World and FPS can finally live as one.</p>
                    </div>
                    </section>
                    </div>
                </section>
                <aside className="w-[30%] h-screen">
               <h1 className="text-2xl text-white mb-5">Featured Screenshot</h1>
                <hr className="w-full border-[#1f1f1f] border-2"/>
                <div className="flex flex-col justify-center mt-5 gap-5">
                    <section className="flex flex-col w-[95%]">
                    <img src="https://cdn2.unrealengine.com/unreal-engine-free-marketplace-august-2023-museum-1920x1080-e519e9a1498d.jpg" alt='Museum' />
                    <div className="bg-[#1f1f1f] p-3">
                    <h1 className="text-white text-xl">Museum Environment Kit</h1>
                    </div>
                    </section>
                    <section className="flex flex-col w-[95%]">
                    <img src="https://cdn2.unrealengine.com/unreal-engine-free-marketplace-august-2023-coral-1920x1080-b29dec285dd9.jpg" alt='corals' />
                    <div className="bg-[#1f1f1f] p-3">
                    <h1 className="text-white text-xl">Corals | DmitriyDryzhak</h1>
                    </div>
                    </section>
                    <section className="flex flex-col w-[95%]">
                    <img src="https://cdn2.unrealengine.com/unreal-engine-free-marketplace-july-2023-bazzar-1920x1080-2a140c91ecbb.jpg" alt='The Bazaar' />
                    <div className="bg-[#1f1f1f] p-3">
                    <h1 className="text-white text-xl">The Bazaar | Meshingun Studio</h1>
                    </div>
                    </section>
                </div>
                </aside>
            </section>
        </main>
    )
}