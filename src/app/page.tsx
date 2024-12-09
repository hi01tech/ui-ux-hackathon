import Image from "next/image";

export default function Home() {
  return (
    //  main
    <div className=" text-neutral-900 ">
      {/* bh-image  */}
      <div className=" relative">
        <Image
          className="mb-7"
          src="/background.png"
          alt="Next.js logo"
          width={1480}
          height={938}
          priority
        />

        {/* div box */}
        <div className="absolute inset-0 flex  sm:flex-row lg:flex-col  items-end justify-center mt-[267px]  p-45 mx-14  bg-op">
          <div className=" bg-[#FFF3E3] sm:w-[300px] md:[450px] lg:w-[599px] text-justify pl-11  pb-16 rounded-xl">
            <div className="text-[#333333] mx-1 ">
              <h4 className=" pt-9  mb-2 mt-5 text-left	text-base tracking-widest decoration-from-font font-semibold">
                New Arrival


               



              </h4>
              <h2 className="text-[#B88E2F] leding-[65px] font-extrabold  text-left decoration-from-font leading-8 text-5xl mb-7 mt-5">
                Discover Our 
            
              </h2>
              <h2 className=" text-[#B88E2F] leding-[65px] font-extrabold  text-left decoration-from-font leading-8 text-5xl mb-2">
                New Collection
              </h2>
              <p className="text-semibold text-left  text-[#333333] decoration-from-font tracking-wide text-base font-medium mt-2 pt-4 mb-11">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut{" "}
                <br /> pariatur harinum mollitia itaque mugiat.


              


              </p>
            </div>
            <button className="bg-[#B88E2F]  drop-shadow-lg hover:bg-yellow-500 font-bold mx-1 py-[25px] px-[72px] text-white text-xs items-start">
              BUY NOW



            </button>
          </div>
        </div>
      </div>
      <div>
        {/* second section */}
        <h1 className="text-center font-bold text-2xl font-sans mb-2 my-14 ">
          Browse The Range
        </h1>
        <p className="text-center mb-9">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="mx-7 my-3  bg-white flex justify-center px-5 checked">
        {/* dining */}
        <div className="hover:-translate-y-[30px] hover:opacity-60 to-slate-950 -[1s] duration-[1s] hover:drop-shadow-lg">
          <Image
            className=" rounded-md mb-7 mx-3"
            src="/dining.png"
            alt="Next.js logo"
            width={340}
            height={348}
            priority
          />
          <p className="text-center font-medium  text-xl">Dining</p>
        </div>

        {/* living room */}
        <div className="hover:-translate-y-[30px] hover:opacity-60 to-slate-950 -[1s] duration-[1s] hover:drop-shadow-lg">
          <Image
            className="mb-7 mx-3"
            src="/living.png"
            alt="Next.js logo"
            width={340}
            height={348}
            priority
          />

          <p className="text-center font-medium text-xl">Living</p>
        </div>

        {/* bedroom */}
        <div className="hover:-translate-y-[30px] hover:opacity-60 to-slate-950 -[1s] duration-[1s] hover:drop-shadow-lg">
          <Image
            className="mb-7 rounded-md mx-3"
            src="/bedroom.png"
            alt="Next.js logo"
            width={340}
            height={348}
            priority
          />
          <p className="text-center font-medium text-xl">Bedroom</p>
        </div>
      </div>

      {/* section 3 */}

      <div>
        <h1 className=" my-14 text-center font-bold text-3xl leading-3  font-sans ">
          Our Products
        </h1>
      </div>

      {/* product images */}
      <section className="mx-7 my-3  bg-white flex justify-center  checked">
        {/* image 1 */}
        <div  className="  flex-wrap hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">


        <div className="relative">
           <Image
             className=" mx-4"
              src="/img1.png"
             alt="Next.js logo"
             width={250}
             height={150}
             priority
           />
           <span className=" absolute top-6 right-10 rounded-[50%]  bg-red-500 opacity-75 text-white py-2 px-1 text-xs  justify-self-end ">-30%</span>
         </div>
          
       
          
          
          

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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">
          

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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">

        <div className="relative">
           <Image
             className=" mx-4"
              src="/img3.png"
             alt="Next.js logo"
             width={250}
             height={150}
             priority
           />
           <span className=" absolute top-6 right-10 rounded-[50%]  bg-red-500 opacity-75 text-white py-2 px-1 text-xs  justify-self-end ">-50%</span>
         </div>
        

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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">
        
         <div className="relative">
         <Image
            className=" mx-4"
            src="/img4.png"
            alt="Next.js logo"
            width={250}
            height={150}
            priority
          />
         <span className=" absolute top-6 right-9 rounded-[50%]  bg-teal-500 text-white py-2 px-1.5 text-xs  justify-self-end ">New</span>
         </div>
         

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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">
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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">

        <div className="relative">
         <Image
            className=" mx-4"
            src="/img6.png"
            alt="Next.js logo"
            width={250}
            height={150}
            priority
          />
         <span className=" absolute top-6 right-9 rounded-[50%]  bg-teal-500 text-white py-2 px-1.5 text-xs  justify-self-end ">New</span>
         </div>

          

          <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
            <h3 className="text-left   font-semibold text-xl   pb-2">Muggo</h3>
            <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
              Small mug
            </p>
            <h4 className="text-left font-medium text-l ">Rp. 150.000</h4>
          </div>
        </div>
        {/* image 7 */}
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">
        <div className="relative">
           <Image
             className=" mx-4"
              src="/img7.png"
             alt="Next.js logo"
             width={250}
             height={150}
             priority
           />
           <span className=" absolute top-6 right-10 rounded-[50%]  bg-red-500 opacity-75 text-white py-2 px-1 text-xs  justify-self-end ">-30%</span>
         </div>
         

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
        <div  className="  hover:-translate-y-[18px] duration-[1s] drop-shadow-xl">

        <div className="relative">
         <Image
            className=" mx-4"
            src="/img8.png"
            alt="Next.js logo"
            width={250}
            height={150}
            priority
          />
         <span className=" absolute top-6 right-9 rounded-[50%]  bg-teal-500 text-white py-2 px-1.5 text-xs  justify-self-end ">New</span>
         </div>

          

          <div className="bg-neutral-100 mb-7 mx-4 pb-7 px-3 pt-3">
            <h3 className="text-left   font-semibold text-xl   pb-2">Pottry</h3>
            <p className="text-left font-medium  tracking-wide text-xs text-neutral-500 pb-2">
              Minimalist flower pot
            </p>
            <h4 className="text-left font-medium text-l ">Rp. 500.000</h4>
          </div>
        </div>
      </section>

      <button className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-semibold  justify-items-center ml-[600px]  -scroll-ml-96 tracking-widest text-sm mt-3 mb-10 py-3 px-8  ">
        Show More
      </button>

      {/* Room inspiration section */}

      <div className=" absolute bg-orange-50 w-screen  text-justify  pl-11  py-8 ">
        <div className=" flex flex-row justify-around">
          {/* content */}
          <section className="text-gray-950 mx-5  inset-y-0 mt-16 align-middle pt-8 ">
            <h2 className=" text-gray-950  font-bold text-[40px] ">
              {" "}
              50+ Beautiful rooms <br />
            </h2>
            <h2 className=" font-bold text-[40px]"> inspiration </h2>
            <p className="text- semibold pt-4">
              Our designer already made a lot of beautiful <br /> prototipe of
              rooms that inspire you{" "}
            </p>
            {/* button */}
            <button className="bg-yellow-600  drop-shadow-lg hover:bg-yellow-500  text-xsbg-yellow-600 font-bold mx-5 my-4 py-3 px-11 text-white text-xs">
              Explore More
            </button>
          </section>

          {/* images */}
          <section className=" hover:-translate-x-[12px]duration-[2s] flex flex-row">
            <Image
              className=" hover:-translate-x-[12px]duration-[3s]  mx-4 my-2"
              src="/room1.png"
              alt="Next.js logo"
              width={320}
              height={200}
              priority
            />

            <Image
              className="  hover:-translate-y-[22px]duration-[3s] mx-4 my-2"
              src="/room2.png"
              alt="Next.js logo"
              width={320}
              height={200}
              priority
            />
          </section>
        </div>
      </div>

      {/* #furio furniture */}
      <section>
        <p className="font-semibold pt-7 text-center">Share your setup with</p>
        <h2 className=" text-gray-950  font-bold text-[40px] text-center pb-7">
          {" "}
          #FuniroFurniture <br />
        </h2>

        <section className="ml-4 justify-center my-3">
          {/* images */}
          <div className=" ml-7 mt-3 mb-14 flex flex-wrap gap-x-3 gap-y-3 ">
            <Image
              className=" m-4"
              src="/i1.png"
              alt="Next.js logo"
              width={75}
              height={150}
              priority
            />

            <Image
              className="  m-4 mt-7"
              src="/i2.png"
              alt="Next.js logo"
              width={200}
              height={100}
              priority
            />
            <Image
              className=" mx-4 mt-16"
              src="/i3.png"
              alt="Next.js logo"
              width={200}
              height={150}
              priority
            />
            <Image
              className=" mx-4"
              src="/i4.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />
            <Image
              className=" mx-4"
              src="/i5.png"
              alt="Next.js logo"
              width={250}
              height={150}
              priority
            />
            <Image
              className=" mx-4"
              src="/i6.png"
              alt="Next.js logo"
              width={250}
              height={100}
              priority
            />
            <Image
              className=" mx-4"
              src="/i7.png"
              alt="Next.js logo"
              width={250}
              height={110}
              priority
            />
            <Image
              className=" mx-4"
              src="/i8.png"
              alt="Next.js logo"
              width={125}
              height={150}
              priority
            />
            <Image
              className=" mx-4"
              src="/i9.png"
              alt="Next.js logo"
              width={250}
              height={60}
              priority
            />
          </div>
        </section>
      </section>
    </div>
  );
}

