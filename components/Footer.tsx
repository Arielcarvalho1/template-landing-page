import SessionButton from "./SessionButton";

export default function Footer() {
    return (
        <main className="bg-bgfooter-500 ">
          <div className="text-white mx-auto text-xl grid grid-cols-2 max-w-[1380px] gap-14 ">
           <div className="flex flex-col pt-24 pb-24">
                <h3 className="pb-7"> UNLEASH YOUR ENERGY </h3>

                <p> This life program is designed to tear down your walls
                    to find the core of who you really are. We'll unpack
                    everything in your personal and professional life from
                    goals and dreams to sleep schedules and flower preferences.
                    This program is designed to bring you to the deepest understanding
                    of yourself that most women never experience in their entire lives.
                    For 10 weeks, you'll go on a reflective and reformative journey that will
                    completely revolutionize how you view yourself and your world.
                </p>

                <SessionButton />

            </div> 

            <div className="flex flex-col pt-24 pb-24">
                <h3 className="pb-7"> UNLEASH YOUR ENERGY </h3>
                
                <p> 
                    Love is the closest thing we have to magic. It can completely transform and amplify life.
                    This program is designed for the strong woman with high standards who is eager to find and
                    embrace an intimate partner. Whether you're single or in a relationship, Unlock Your Heart
                    will guide you to a deeper understanding of love and passion. This 8 week course walks you
                    through every step of the process from envisioning an ideal relationship... to making that
                    vision a reality.
                </p>

                <SessionButton />

            </div> 

        </div>

    </main>
    );

}