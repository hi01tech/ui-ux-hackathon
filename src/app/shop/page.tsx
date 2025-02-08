import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
  return (
    <div className=" max-w-screen-2xl mx-auto ">
      {/*Shop Banner */}
      <div className="h-full md:h-[316px] w-full flex flex-col items-center justify-center ">
        <div className="h-[316px] relative w-full ">
          <Image src={"/shop.png"} alt="hero" layout="fill" objectFit="cover" />

          {/* Shop Heading */}
          <div className="w-[150px] md:w-[130px] absolute translate-x-[-50%]  translate-y-[2%] top[50%] left-[50%] h-[90%] flex flex-col justify-center items-center  hover:opacity-20 to-slate-950 transition duration-300 ">
            {/* logo */}
            <Image
              className="justify-self-center mb-5"
              src="/logo.png"
              alt="Next.js logo"
              width={67}
              height={38}
              priority
            />

            <h1 className="font-semibold text-5xl mb-3">Shop</h1>
            <p className="font-normal text-base mr-1 ">
              {" "}
              Home &gt; <span className="font-medium tracking-wide">Shop</span>
            </p>
          </div>
        </div>
      </div>
      


  
       {/* Filters Section */}
       <div className="h-auto bg-[#F9F1E7] flex flex-col sm:flex-row justify-between p-2 sm:p-4  mx-auto   mb-3 -mt-1  ">
                <div className="flex  items-center justify-start sm:justify-evenly space-x-4 sm:space-x-8 w-full    ">
                <div className="flex pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
            className="size-7  mr-3"
          >
            <path
              fill="none"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3"
            />
          </svg>

          <h3 className="text-lg font-semibold">Filter</h3>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            fill="black"
            className=" pt-1 size-6 ml-7  mr-3"
          >
            <circle
              cx="13.5"
              cy="13.5"
              r="8"
              fill="black"
              stroke="#2c2b2b"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="34.5"
              cy="34.5"
              r="8"
              fill="black"
              stroke="#2c2b2b"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="34.5"
              cy="13.5"
              r="8"
              fill="black"
              stroke="#2c2b2b"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="13.5"
              cy="34.5"
              r="8"
              fill="black"
              stroke="#2c2b2b"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Image
            className=" pt-1 size-6 ml-3  mr-3 "
            src="/bars.png"
            alt="Next.js logo"
            width={17}
            height={12}
            priority
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            className="size-9 "
          >
            <path
              fill="#9F9F9F"
              d="M134 24v208a6 6 0 0 1-12 0V24a6 6 0 0 1 12 0"
            />
          </svg>
        </div>
                   
                
                </div>
                <div className="flex flex-wrap items-center justify-between sm:space-x-4 mt-2 sm:mt-0 w-full">
                    <span className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</span>
                    <span className="text-xs sm:text-sm md:text-base">Show</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">16</h3>
                    </div>

                    <span className="text-xs sm:text-sm md:text-base">Short by</span>

                    <div className="w-[45px] sm:w-[55px] h-[45px] sm:h-[55px] bg-white flex items-center justify-center ">
                        <h3 className="text-[#9F9F9F] text-xs sm:text-sm md:text-base">Default</h3>
                    </div>
                </div>
            </div>

      {/* Product images */}
      <section className="mt-14">
        <section className="mx-7 my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         

      
         
          {/* Image 1 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/syltherin.png"
              alt="Syltherin stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
            Syltherine
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 2.500.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 3.500.000
          </span>
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>

          {/* Image 2 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/leviosa.png"
              alt="stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Leviosa
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 500.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 3 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/lolito.png"
              alt="/lolito.pngcafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Lolito
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Luxury big sofa</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 7.000.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 14.000.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 4 */}

          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/respira.png"
              alt=" Outdoor table and stool"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Respira
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Outdoor table and stool</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
          Rp.1.500.000
          </span>
          
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


        
        </section>
        
        <section className="mx-7 my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         

      
         
          {/* Image 1 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/syltherin.png"
              alt="Syltherin stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
            Syltherine
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 2.500.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 3.500.000
          </span>
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>

          {/* Image 2 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/leviosa.png"
              alt="stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Leviosa
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 500.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 3 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/lolito.png"
              alt="/lolito.pngcafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Lolito
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Luxury big sofa</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 7.000.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 14.000.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 4 */}

          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/respira.png"
              alt=" Outdoor table and stool"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Respira
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Outdoor table and stool</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
          Rp.1.500.000
          </span>
          
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


        
        </section>
        
        <section className="mx-7 my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         

      
         
          {/* Image 1 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/syltherin.png"
              alt="Syltherin stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
            Syltherine
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 2.500.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 3.500.000
          </span>
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>

          {/* Image 2 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/leviosa.png"
              alt="stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Leviosa
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 500.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 3 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/lolito.png"
              alt="/lolito.pngcafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Lolito
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Luxury big sofa</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 7.000.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 14.000.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 4 */}

          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/respira.png"
              alt=" Outdoor table and stool"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Respira
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Outdoor table and stool</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
          Rp.1.500.000
          </span>
          
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


        
        </section>
        
        <section className="mx-7 my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         

      
         
          {/* Image 1 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/syltherin.png"
              alt="Syltherin stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
            Syltherine
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 2.500.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 3.500.000
          </span>
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>

          {/* Image 2 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/leviosa.png"
              alt="stylish cafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Leviosa
          </h3>
          <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 500.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 3 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/lolito.png"
              alt="/lolito.pngcafe chair"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Lolito
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Luxury big sofa</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
            Rp 7.000.000
          </span>
          <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
            Rp 14.000.000
          </span>
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


          {/* Image 4 */}
          <Link href={"/product"}>
           <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
            <Image
              className=" w-full h-auto "
              src="/respira.png"
              alt=" Outdoor table and stool"
              width={400}
              height={400}
              priority
            />
            <div className="  bg-neutral-100  pb-9 pt-3">

          <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
          Respira
          </h3>
          <p className="ml-6 mb-4 text-gray-600"> Outdoor table and stool</p>
          <span className="text-[20px] font-semibold mr-6 ml-6">
          Rp.1.500.000
          </span>
          
          
            </div>
            

            {/* Hover Overlay */}
            <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
             

            <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                View Detail
              </button>

              <div className="flex space-x-6">
                <Link href={"/cart"}><button className="text-white flex flex-row items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                    ></path>
                  </svg>
                  <span className="text-sm">Add to Cart</span>
                </button></Link>
                <Link href={"/compare"}><button className="text-white flex flex-row items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.30em"
                    height="2em"
                    viewBox="0 0 32 32" > <path
                      fill="currentColor"
                      d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                    ></path>
                  </svg>
                  <span className="text-sm">Compare</span>
                </button></Link>
              </div>
            </div>
           
          </div></Link>


        
        </section>
       
      </section>

      {/* Pagination */}
      <div className="flex flex-row justify-center   space-x-6 text-center items-center mt-10 mb-20 pr-10">
        <button className=" h-[45px] w-[45px] bg-[#F9F1E7] border  text-black   hover:bg-[#B88E2F]  duration-[0.25s] drop-shadow-lg opacity-80 hover:text-white rounded-[9px] flex justify-center items-center   py-3 px-4 text-lg">
          {" "}
          1
        </button>
        <button className=" h-[45px] w-[45px] bg-[#F9F1E7] border  text-black   hover:bg-[#B88E2F]  duration-[0.25s] drop-shadow-lg opacity-80 hover:text-white rounded-[9px] flex justify-center items-center   py-3 px-4 text-lg">
          {" "}
          2
        </button>
        <button className=" h-[45px] w-[45px] bg-[#F9F1E7] border text-black   hover:bg-[#B88E2F]  duration-[0.25s] drop-shadow-lg opacity-80 hover:text-white rounded-[9px] flex justify-center items-center   py-3 px-4 text-lg">
          {" "}
          3
        </button>
        <button className=" h-[45px] w-[75px] bg-[#F9F1E7] border text-black   hover:bg-[#B88E2F]  duration-[0.25s] drop-shadow-lg opacity-80 hover:text-white rounded-[9px] flex justify-center items-center   py-3 px-4 text-lg">
          {" "}
          Next
        </button>
      </div>
    </div>
  );
}
