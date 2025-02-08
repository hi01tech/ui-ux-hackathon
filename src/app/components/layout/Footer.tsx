import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t-[1px]  border-[#0000002B] max-w-screen-2xl mx-auto ">
      <div className="container  px-7 md:px-5 lg:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-2 ">
         
            {/* logo section */}
          <div className="">
            <Image
              className="pt-3 pb-9"
              src="/Funiro.png"
              alt="Next.js logo"
              width={100}
              height={38}
              priority       
            />

            {/* description */}
            <div className="mt-6 text-zinc-400 mb-4">
              <p>400 University Drive Suite 200 Coral</p>
              <p>Globes.</p>
              <p>FL 33134 USA.</p>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-col md:items-center mb-2 ">  
            <h4 className=" text-[#9F9F9F] tracking-wider mt-3 mb-10 md:items-center text-left text-base font-medium">Links</h4>
            <div className="flex flex-col mt-4  space-y-5 lg:space-y-11">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Help */}
          <div className="flex flex-col mb-2 ">
            <h2 className="text-[#9F9F9F] tracking-wider mt-3 mb-10 md:items-center text-left text-base font-medium  ">Help</h2>
            <div className="flex flex-col mt-4  space-y-5 lg:space-y-11">
              <Link href="/payment">Payment Option</Link>
              <Link href="/cash">Return</Link>
              <Link href="/policy">Privacy Policies</Link>
            </div>
          </div>

          {/* Newsletter*/}
          <div className="mb-20 ">
            <h3 className="    text-[#9F9F9F] tracking-wider mt-3 mb-10 md:items-center text-left text-base font-medium ">
              Newsletter
            </h3>
            <form className="flex flex-row items-center justify-left ">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                required

                className="text-black/60  pl-2 border-b border-black/75 text-left  mr-3 pb-2 w-full md:w-48 lg:w-full b-2 flex  gap-x-7  pt-3 font-normal tracking-tighter "
              />
              <button
                type="submit"
                className="  hover:text-yellow-600 transition-all duration-300 ease-in-out text-left py-2 border-black/40 mr-3 pb-2  border-b-2 flex  gap-x-7  pt-3 font-normal "   
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      

          {/* last div */}
        <div className=" flex flex-row mt-8  border-[#D9D9D9] pt-4  border-t-[1px]  top-[408x] left-[100px] ">
   
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}
