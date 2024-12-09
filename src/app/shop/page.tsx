import Image from "next/image";

export default function ShopPage() {
  return (
    <div className="justify-items-center" >
      <Image
        className="mb"
        src="/shop.png"
        alt="Next.js logo"
        width={1480}
        height={938}
        priority
      />

     {/* Shop headng */}
     <div className="absolute inset-0 flex flex-col tracking-tighter   items-center justify-center mt-1 px-5 pt-2 mx-4 mb-32 bg-op">
        <div className=" hover:translate-x-[12px] hover:opacity-20 to-slate-950 -[1s] duration-[2s]">
          {/* Logo */}
          <Image
            className="justify-self-center"
            src="/logo.png"
            alt="Next.js logo"
            width={70}
            height={38}
            priority
          />
          <div>
          <h1 className="font-medium text-6xl">Shop</h1>
          <div className=" justify-self-center flex mx-2 items-center mt-3">
            <h3 className="font-semibold ">Home </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              className=" size-5 mt-1"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                fill-rule="evenodd"
                d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
              />
            </svg>
            <h3 className=" font-normal "> Shop</h3>
          </div>
          </div>
        </div>
      </div>
      

      {/* search bar */}
      <div className="bg-[#f9f1e7] mb-3 -mt-1  flex justify-between p-5 checked text-black">
        {/* filter */}
        <div className="flex ml-16 pt-2">
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

        {/* Showing result */}
        <div className="  justify-start text-left pt-2">
          <h3 className="text-lg font-normal mr-80">
            Showing 1-16 of 32 results
          </h3>
        </div>

        <div className="flex flex-row pr-14">
          {/* Show number */}
          <div className="flex  px-2 pt-1">
            <h3 className=" mx-3   mt-1 text-lg font-normal">Show</h3>
            <button className="bg-white opacity-70 -mt-1 text-[#9F9F9F] py-3 px-4  pb-3 pt-2 text-lg">
              16
            </button>
          </div>

          {/* Short by */}
          <div className=" flex mx-2 pt-1 px-3">
            <h3 className="  mx-2  mt-1  text-lg font-normal  ">Short By</h3>
            <button className="bg-white opacity-70 -mt-1  text-[#9F9F9F] pb-3 pt-2 pl-6 pr-12  text-lg">
              Default
            </button>
          </div>
        </div>
      </div>

      <section className="mt-14 ">
        {/* product images */}
        <section className="mx-7 my-3  bg-white flex justify-center  checked">
          {/* image 1 */}
          <div className="  hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img1.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight  pb-2">
                Syltherine
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Stylish cafe chair
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 2.500.000</h4>
            </div>
          </div>
          {/* image 2 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img2.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Leviosa
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Stylish cafe chair
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>
          </div>
          {/* image 3 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img3.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight pb-2">
                Lolito
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Luxury big sofa
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 7.000.000</h4>
            </div>
          </div>
          {/* image 4 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img4.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Respira
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Outdoor ber table and stool
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>
          </div>
        </section>

        <section className="mx-7 my-3  bg-white flex justify-center px-5 checked">
          {/* image 5 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img5.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight  pb-2">
                Grifo
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Night lamp
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 1.500.000</h4>
            </div>
          </div>
          {/* image 6 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img6.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Muggo
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Small mug
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 150.000</h4>
            </div>
          </div>
          {/* image 7 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img7.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight pb-2">
                Pingky
              </h3>
              <p className="text-left font-medium  tracking-tight text-xs text-neutral-500 pb-2">
                Cute bed set
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 7.000.000</h4>
            </div>
          </div>
          {/* image 8 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img8.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Pottry
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Minimalist flower pot
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>

            
          </div>
        </section>
      </section>
      <section className="mt-14 ">
        {/* product images */}
        <section className="mx-7 my-3  bg-white flex justify-center  checked ">
          {/* image 1 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img1.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight  pb-2">
                Syltherine
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Stylish cafe chair
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 2.500.000</h4>
            </div>
          </div>
          {/* image 2 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img2.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Leviosa
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Stylish cafe chair
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>
          </div>
          {/* image 3 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img3.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight pb-2">
                Lolito
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Luxury big sofa
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 7.000.000</h4>
            </div>
          </div>
          {/* image 4 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img4.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Respira
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Outdoor ber table and stool
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>
          </div>
        </section>

        <section className="mx-7 my-3  bg-white flex justify-center px-5 checked">
          {/* image 5 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img5.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight  pb-2">
                Grifo
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Night lamp
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 1.500.000</h4>
            </div>
          </div>
          {/* image 6 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img6.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Muggo
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Small mug
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 150.000</h4>
            </div>
          </div>
          {/* image 7 */}
          <div className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
            <Image
              className=" mx-4"
              src="/img7.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />

            <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl  tracking-tight pb-2">
                Pingky
              </h3>
              <p className="text-left font-medium  tracking-tight text-xs text-neutral-500 pb-2">
                Cute bed set
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 7.000.000</h4>
            </div>
          </div>
         
        
          <div >
            <div  className=" hover:translate-y-[18px] duration-[1s] drop-shadow-xl">
              {/* image 8 */}
             <Image
              className=" mx-4"
              src="/img8.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
             />

             <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
              <h3 className="text-left   font-semibold text-xl   pb-2">
                Pottry
              </h3>
              <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
                Minimalist flower pot
              </p>
              <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
            </div>
            </div>

            

            <div className="flex flex-row justify-center  text-center items-center my-11 pr-10">
              <div className="">
                {/* Show number */}
                <div className="flex  px-2 pt-1 ">
                  <button className="bg-orange-100 text-black   hover:bg-yellow-600  duration-[0.25s] drop-shadow-xl opacity-80 -mt-1 hover:text-white rounded-lg py-3 px-4  pb-2 pt-2 text-lg">
                    1
                  </button>
                </div>
              </div>

              <div className="flex  px-2 pt-1">
                <button className="bg-orange-100 text-black   hover:bg-yellow-600  duration-[0.25s] drop-shadow-xl opacity-80 -mt-1 hover:text-white rounded-lg py-3 px-4  pb-2 pt-2 text-lg">
                  2
                </button>
              </div>

              <div className="flex  px-2 pt-1">
                <button className="bg-orange-100 text-black   hover:bg-yellow-600  duration-[0.25s] drop-shadow-xl opacity-80 -mt-1 hover:text-white rounded-lg py-3 px-4  pb-2 pt-2 text-lg">
                  3
                </button>
              </div>

              <div className="flex  px-2 pt-1">
                <button className="bg-orange-100 text-black   hover:bg-yellow-600  duration-[0.25s] drop-shadow-xl opacity-80 -mt-1 hover:text-white rounded-lg py-3 px-4  pb-2 pt-2 text-lg">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
