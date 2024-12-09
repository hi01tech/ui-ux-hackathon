import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" justify-items-centercenter ">
       <div className="border-gray-500 container mx-auto py-14   ml-12 mr-0 px-12">
       <div className="grid md:grid-cols-12 grid-cols-1 gap-6">

        {/* Logo */}
        <div className="lg:col-span-4 col-span-12">
         <Image
            className="pt-3 pb-9"
            src="/Funiro.png"
            alt="Next.js logo"
            width={100}
            height={38}
            priority
          />

          {/*  */}
          <div className="mt-6 text-zinc-400">
            <p>400 University Drive Suite 200 Coral</p>
            <p>Globes.</p>
            <p>FL 33134 USA.</p>
          </div> 
        </div>
         {/* links */}
        <div className="lg:col-span-2 md:col-span-4 col-span-12 ">
        
           <h4 className="text-zinc-400 tracking-wider mt-2 mb-12">Links</h4>
            <ul className=" list-none mt-6  space-y-2  text-black font-normal ">
              <li className="mb-12 tracking-tight  hover:text-zinc-500 transition-all duration-300 ease-in-out ">
                <Link href="/">Home</Link>
              </li>

              <li  className="mb-12  tracking-tight hover:text-zinc-500 transition-all duration-300 ease-in-out">
                <Link href="/shop">Shop</Link>
              </li>

              <li  className="mb-11 tracking-tight hover:text-zinc-500 transition-all duration-300 ease-in-out">
                <Link href="/about">About</Link>
              </li>

              <li  className="tracking-tight hover:text-zinc-500 transition-all duration-300 ease-in-out">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
           
        </div>
        {/* help */}
        <div className="lg:col-span-2 md:col-span-4 col-span-12 ">
        <h2 className="text-zinc-400 tracking-wide  mt-2 mb-12 ">Help</h2>
            <ul className="list-none mt-6  space-y-2  text-black font-normal">
              <li className=" mb-11 tracking-tight  hover:text-zinc-500 transition-all duration-300 ease-in-out ">
                <Link href="/payment">Payment Option</Link>
              </li>

              <li  className="mb-11 tracking-tight hover:text-zinc-500 transition-all duration-300 ease-in-out ">
                <Link href="/cash">Return</Link>
              </li>

              <li  className=" tracking-tight hover:text-zinc-500 transition-all duration-300 ease-in-out ">
                <Link href="/policy">Privacy Policies</Link>
              </li>
            </ul>
        </div>
        
        {/* Newsletter */}
        <div className="lg:col-span-2 md:col-span-4 col-span-12 ">
          <h3 className="text-zinc-400 tracking-wide  mt-1 mb-12">Newsletter</h3>
          <div className="flex  gap-x-7 text-black pt-3 font-normal">
            <input
              className="text-zinc-400 b-2  underline decoration-black "
              placeholder="Enter your Email adress"
            />
            <button className="  hover:text-yellow-600 transition-all duration-300 ease-in-out underline ">SUBSCRIBE</button>
          </div>
        </div>
    
       </div>
       </div>
       <hr className="bg-gray-200 w-[1349px] py-[0.75px]  " />

       <div className= " my-3  py-7 ml-12 mr-40 px-12">
        <hr className="bg-slate-200 w-[1180px] h-[0.45] mt-6 mb-4" />
       <p >
       2023 furino. All rights reversed
       </p>
      </div>
      
    </footer>
  );
}