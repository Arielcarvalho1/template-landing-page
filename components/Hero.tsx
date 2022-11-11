import Image from "next/image";
import womanImage from "../assets/woman.jpg"; // We import the image here so we don't have to specify a width

export default function Header() {
    return (
    <div className="h-screen">
      <div className="h-screen grid grid-cols-2 justify-items-center items-center max-w-6xl mx-auto gap-3">

        <div className="">
          <h1 className="text-5xl text-white font-light "> I'm Morgan Madison, professional life coach & mentor. </h1>
          <button className="mt-9 bg-white p-4 text-xl uppercase px-11 text-bgcolor-500"> Schedule a session </button>
        </div>
        
        <div>
            <Image alt="" src={womanImage} className="rounded-full"/>
        </div>

        </div> 
    </div>
    );
}