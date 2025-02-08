import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="abosolute">
        <section className="h-screen md:h-[716px] flex flex-col items-end justify-center w-full relative mb-[26px]">

            {/* img */}
            <div className="w-full h-full absolute top-0 left-0 bg-cover bg-center">
            <Image src={"/background.png"} alt="hero" layout="fill" objectFit="cover" />
            </div>

            {/* content */}
             <div className="absolute  inset-0 flex  sm:flex-row lg:flex-col  items-end justify-center  mb-12 lg:mb-0  p-45 mx-14  bg-op">
          <div className=" bg-[#FFF3E3] sm:w-[300px] md:[450px] lg:w-[599px] text-justify pl-11  pb-16 rounded-xl">
            <div className="text-[#333333] mx-1 ">
              <h4 className=" pt-9  mb-2 mt-5 text-left	text-base tracking-widest decoration-from-font font-semibold">
                New Arrival

              </h4>
              <h2 className="text-[#B88E2F] leading-[35px]  md:leading-6 font-extrabold  text-left decoration-from-font text-4xl lg:text-5xl mb-7 mt-5">
                Discover Our 
            
              </h2>
              <h2 className=" text-[#B88E2F] leading-[55px] font-extrabold  text-left decoration-from-font text-5xl mb-2">
                New Collection
              </h2>
              <p className="text-semibold text-left  text-[#333333] decoration-from-font tracking-wide text-base font-medium mt-2 pt-4 mb-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut{" "}
                <br /> pariatur harinum mollitia itaque mugiat.


              </p>
            </div>

            <Link href="/shop">
            <button className="bg-[#B88E2F]  drop-shadow-lg hover:bg-yellow-500 font-bold mx-1 py-[25px] px-[72px] text-white text-xs items-start">
              BUY NOW
            </button>
            </Link>
          </div>
        </div>
           

            
        </section>
        </section>
    ) 
}