import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    //  main
    <div className=" text-neutral-900  max-w-screen-2xl mx-auto    ">
      <Hero />

      {/* Range section */}
      <div className="">
        <h1 className="text-center font-bold text-[32px]  text-font-sans mb-2 my-14 ">
          Browse The Range
        </h1>
        <p className="text-center mb-9  text-xl font-normal text-wrap sm:px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="mx-7 my-3  bg-white   flex flex-col  md:flex-row justify-center sm:mt-4  md:gap-x-7 lg:gap-x-5 lg:mt-5 px-5 ">
          {/* dining */}
          <div className="hover:-translate-y-[20px] hover:opacity-60 to-slate-950  tracking-wider mb-10 duration-[0.5s] hover:drop-shadow-lg">
            <Image
              className=" rounded-xl mb-4 mx-3"
              src="/dining.png"
              alt="Next.js logo"
              width={381}
              height={480}
              priority
            />
            <p className="text-center font-medium  text-xl">Dining</p>
          </div>

          {/* living room */}
          <div className="hover:-translate-y-[20px] hover:opacity-60 to-slate-950  tracking-wider mb-10  duration-[0.5s] hover:drop-shadow-lg">
            <Image
              className="rounded-xl mb-4 mx-3"
              src="/living.png"
              alt="Next.js logo"
              width={381}
              height={480}
              priority
            />

            <p className="text-center font-medium text-xl">Living</p>
          </div>

          {/* bedroom */}
          <div className="hover:-translate-y-[20px] hover:opacity-60 to-slate-950  tracking-wider mb-10  duration-[0.5s] hover:drop-shadow-lg">
            <Image
              className="mb-4 rounded-xl mx-3"
              src="/bedroom.png"
              alt="Next.js logo"
              width={381}
              height={480}
              priority
            />
            <p className="text-center font-medium text-xl">Bedroom</p>
          </div>
        </div>
      </div>

       {/*  Our Products */}
      <div>
        <h1 className="text-[40px] text-center font-bold mt-14 mb-6">
          Our Products
        </h1>

        <section className="flex flex-row lg:flex-col">

          <section className=" max-w-screen-2xl mx-auto px-3  my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Image 1 */}
            <Link href={"/shop/syltherin/3.500.000"}>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 2 */}
            <Link href={"/shop/leviosa.png/500.000"}>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 3 */}
            <Link href={"/shop/lolito.png/7.000.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto"
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
                    Rp 9.000.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 4 */}

            <Link href={"/shop/respira.png/ Rp.1.500.000"}>
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
                  <p className="ml-6 mb-4 text-gray-600">
                    {" "}
                    Outdoor table and stool
                  </p>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 5 */}
            <Link href={"/shop/syltherin/3.500.000"}>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 6 */}
            <Link href={"/shop/leviosa.png/500.000"}>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 7 */}
            <Link href={"/shop/lolito.png/7.000.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto"
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
                    Rp 9.000.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 8 */}

            <Link href={"/shop/respira.png/ Rp.1.500.000"}>
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
                  <p className="ml-6 mb-4 text-gray-600">
                    {" "}
                    Outdoor table and stool
                  </p>
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
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
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
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
            
          </section>

         
        </section>

        <div className="flex items-center justify-center mt-6">
          <Link href={"/shop"}>
            <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#B88E2F]     hover:bg-yellow-600 hover:text-white font-semibold tracking-widest text-sm mt-3 mb-10 py-3 px-8 ">
              Show More
            </button>
          </Link>
        </div>
      </div>


      {/* 50+ Beautiful rooms inspiration */}
         <div className=' max-w-screen-2xl mx-auto h-auto bg-[#FCF8F3] mt-10 flex flex-col lg:flex-row items-center justify-around'>
          <div className='text-center lg:text-left px-6 mt-9 lg:mt-0 lg:px-0'>
            <h1 className='text-[32px] sm:text-[36px] md:text-[40px] font-bold w-[90%] md:w-[422px] pl-3 '>
              50+ Beautiful rooms inspiration
            </h1>
            <p className='text-[14px] sm:text-[16px] mt-4 md:mt-6 w-[90%] md:w-[368px] pl-3'>
              Our designer already made a lot of beautiful prototypes of rooms that inspire you.
            </p>

            <Link href={"/shop"}>
            <button className='w-[70%] md:w-[176px] h-[48px] bg-[#B88E2F] border border-[#B88E2F] hover:text-[#B88E2F] hover:bg-white text-[#FFFFFF] mt-8 ml-3'>
              Explore More
            </button>
            </Link>
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/room1.png"
              alt="last-1"
              width={345}
              height={410}
              className=" w-[360px] h-[466px]  lg:w-[404px] lg:h-[582px] hover:-translate-x-[12px]duration-[3s]"
            />
          </div>

          <div className='mt-8 lg:mt-0'>
            <Image
              src="/room2.png"
              alt="last-1"
              width={320}
              height={365}
              className=" w-[345px] h-[430px]  lg:w-[372px] lg:h-[500px] hover:-translate-y-[22px]duration-[3s] mx-1 my-2"
            />
          </div>
        </div>


       {/* #furio furniture */}
       <section className=" bottom-10 max-w-screen-2xl mx-auto  h-full  md:flex flex-col justify-center  mb-24   hidden mt-24 ">
        <p className="font-semibold pt-7 text-center ">Share your setup with</p>
        <h2 className=" text-gray-950  font-bold text-[40px] text-center pb-6">
          {" "}
          #FuniroFurniture <br />
        </h2>

        <section className="mx-11 flex justify-center my-3 px-5">
        <Image src="/setup.png" alt="setup" width={1499} height={721} className="w-screen custom:w-[1799px]"></Image>
        </section>
      </section>


    </div>
  );
}


