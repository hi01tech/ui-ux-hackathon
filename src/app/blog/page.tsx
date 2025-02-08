import Image from "next/image";
import CustomerCare from "../components/CustomerCare";

export default function Blog() {
  return (
    <div className="max-w-screen-2xl mx-auto  ">
      {/*Blog Banner */}
      <div className="h-full md:h-[316px] w-full flex flex-col items-center justify-center mb-[26px]">
        <div className="h-[316px] relative w-full ">
          <Image src={"/shop.png"} alt="hero" layout="fill" objectFit="cover" />

          {/* blog Heading */}
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

            <h1 className="font-semibold text-5xl mb-3">Blog</h1>
            <p className="font-normal text-base mr-1 ">
              {" "}
              Home &gt; <span className="font-medium tracking-wide">Blog</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-slate-800 opacity-5 mb-7 -mt-9  pt-1" />

      {/* @1st MAIN */}
      <div className="flex flex-col lg:flex-row py-2 px-4 md:px-8 ">
        {/* left */}
        <section className="flex flex-col  md:pt-5  ">
          {/* section 1 */}
          <section className="p-7 md:p-10 ">
            {/* img */}
            <div>
              <Image
                className=" w-[450px] h-[300px]  md:w-[550px] md:h-[380px]  lg:w-[850px] lg:h-[500px] rounded-xl "
                src="/blog-img1.jpeg"
                alt="Next.js logo"
                width={490}
                height={380}
                priority
              />

              {/* Icons */}
              <Image
                className=" flex flex-row items-center py-1 text-[#9F9F9F] gap-x-7 my-3  "
                src="/tag1.png"
                alt="Next.js logo"
                width={315}
                height={70}
                priority
              />
            </div>

            {/* content */}
            <div className="">
              <h3 className="text-left font-medium text-3xl -tracking-normal my-6">
                Going all-in with millennial design{" "}
              </h3>
              <p className="text-[#9F9F9F] font-normal text-base text-left justify-left text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore etfy oi dolore magna aliqua.
                Mus mauris vitae ultricies leo integer malesuada nuncof. In
                nulla posuere soll icitudin aliquam ultrices. Morbi blandit
                cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                faucibus turpi in. Cursus mattis mo lestie a iaculis at erat.
                Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque
                elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices
                neque ornare aenean euismod elementum.
              </p>
              <button className="font-normal text-base text-justify border-b-2 border-b-black  tracking-wide  py-4 my-5">
                Read more
              </button>
            </div>
          </section>

          {/* section 2 */}
          <section className="p-7 md:p-10">
            {/* img */}
            <div>
              <Image
                className=" w-[450px] h-[300px]  md:w-[550px] md:h-[380px]  lg:w-[850px] lg:h-[500px] rounded-xl "
                src="/blog-img-2.png"
                alt="Next.js logo"
                width={490}
                height={380}
                priority
              />

              {/* Icons */}
              <Image
                className=" flex flex-row items-center py-1 text-[#9F9F9F] gap-x-7 my-3  "
                src="/tag2.png"
                alt="Next.js logo"
                width={355}
                height={90}
                priority
              />
            </div>

            {/* content */}
            <div className="">
              <h3 className="text-left font-medium text-3xl -tracking-normal my-6">
                Going all-in with millennial design{" "}
              </h3>
              <p className="text-[#9F9F9F] font-normal text-base text-left justify-left text-balance tracking-wide">
                We aim to bring innovative solutions of everyday problems and
                improve the quality of life. Our commitment to quality and
                sustainibility drives everything we do. from designing
                functional products to earninh Customer satisfaction, we are
                always working towards abrighter future.
              </p>
              <button className="font-normal text-base text-justify border-b-2 border-b-black  tracking-wide  py-4 my-5">
                Read more
              </button>
            </div>
          </section>

          {/* section 3 */}
          <section className="p-7 md:p-10">
            {/* img */}
            <div>
              <Image
                className=" w-[450px] h-[300px]  md:w-[550px] md:h-[380px]  lg:w-[850px] lg:h-[500px] rounded-xl "
                src="/blog-img-3.png"
                alt="Next.js logo"
                width={490}
                height={380}
                priority
              />

              {/* Icons */}
              <Image
                className=" flex flex-row items-center py-1 text-[#9F9F9F] gap-x-7 my-3  "
                src="/tag1.png"
                alt="Next.js logo"
                width={315}
                height={70}
                priority
              />
            </div>

            {/* content */}
            <div className="">
              <h3 className="text-left font-medium text-3xl -tracking-normal my-6">
                Handmade pieces that took time to make{" "}
              </h3>
              <p className="text-[#9F9F9F] font-normal text-base text-left justify-left text-balance">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="font-normal text-base text-justify border-b-2 border-b-black  tracking-wide  py-4 my-5">
                Read more
              </button>
            </div>
          </section>
        </section>

        {/* right  section*/}
        <section className="flex flex-col   p-7 md:pt-20 ">
          {/* Catogeries */}

          <form className="flex flex-col px-7 sm:mt-10 lg:mt-0">
            <div className=" flex items-center  mb-7">
              {/* Search */}

              <input
                type="search"
                placeholder="Search"
                className="text-black/70 border-2  rounded-xl w-full md:w-fit border-[#9F9F9F] px-12  text-left  mr-3  py-3 lg:py-[17.5px]  b-2 flex  gap-x-7    font-normal   outline-none "
              />
            </div>

            {/* Catogeries */}
            <h4 className="tracking-wide font-semibold text-2xl text-black text-left pb-2 my-4 md:ml-1 lg:ml-3">
              Categories
            </h4>
            <div className="flex  ">
              <div className="flex flex-row  gap-x-32 justify-around  lg:px-4">
                <ul className="flex flex-col text-l text-[#9f9f9f] gap-y-9 text-base mt-7">
                  <li>Crafts</li>
                  <li>Design</li>
                  <li>Handmade</li>
                  <li>Interior</li>
                  <li>Wood</li>
                </ul>

                <ul className="flex flex-col  text-[#9f9f9f] gap-y-9 text-base mt-7">
                  <li>2</li>
                  <li>8</li>
                  <li>7</li>
                  <li>1</li>
                  <li>6</li>
                </ul>
              </div>
            </div>
          </form>

          {/* posts */}
          <div className=" mt-7 px-7 lg:px-12 ">
            <h4 className="tracking-wide font-semibold text-2xl text-black text-left pb-2 my-8">
              Recent Posts
            </h4>

            <div className="">
              {/* post 1 */}
              <div className="flex flex-row mt-7 gap-x-3 ">
                <Image
                  className=" rounded-xl h-20 w-20"
                  src="/post1.jpeg"
                  alt="Next.js logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col mr-5 my-2 tracking-wide font-medium text-base w-[119px] h-[42px]">
                  <p className="text-sm text-left">
                    Going all-in with millennial design
                  </p>
                  <span className="text-[#9F9F9F] text-xs mt-2">
                    03 Aug 2022
                  </span>
                </div>
              </div>

              {/* post 2 */}
              <div className="flex flex-row mt-7 gap-x-3 ">
                <Image
                  className=" rounded-xl h-20 w-20"
                  src="/post2.jpeg"
                  alt="Next.js logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col mr-5 my-2 tracking-wide font-medium text-base w-[119px] h-[42px]">
                  <p className="text-sm text-left">
                    Exploring new ways of decorating
                  </p>
                  <span className="text-[#9F9F9F] text-xs mt-2">
                    03 Aug 2022
                  </span>
                </div>
              </div>

              {/* post 3 */}
              <div className="flex flex-row mt-7 gap-x-3 ">
                <Image
                  className=" rounded-xl h-20 w-20"
                  src="/post3.jpeg"
                  alt="Next.js logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col mr-5 my-2 tracking-wide font-medium text-base w-[119px] h-[42px]">
                  <p className="text-sm text-left">
                    Handmade pieces that took time to make
                  </p>
                  <span className="text-[#9F9F9F] text-xs mt-2">
                    03 Aug 2022
                  </span>
                </div>
              </div>

              {/* post 4 */}
              <div className="flex flex-row mt-7 gap-x-3 ">
                <Image
                  className=" rounded-xl h-20 w-20"
                  src="/post4.jpeg"
                  alt="Next.js logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col mr-5 my-2 tracking-wide font-medium text-base w-[119px] h-[42px]">
                  <p className="text-sm text-left">Modern home in Milan</p>
                  <span className="text-[#9F9F9F] text-xs mt-2">
                    03 Aug 2022
                  </span>
                </div>
              </div>

              {/* post 5 */}
              <div className="flex flex-row mt-7 gap-x-3 ">
                <Image
                  className=" rounded-xl h-20 w-20"
                  src="/post5.jpeg"
                  alt="Next.js logo"
                  width={80}
                  height={80}
                  priority
                />
                <div className="flex flex-col mr-5 my-2 tracking-wide font-medium text-base w-[119px] h-[42px]">
                  <p className="text-sm text-left">Colorful office redesign</p>
                  <span className="text-[#9F9F9F] text-xs mt-2">
                    03 Aug 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-center   space-x-4 text-center items-center mt-10 mb-20 pr-10">
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

      <CustomerCare />
    </div>
  );
}
