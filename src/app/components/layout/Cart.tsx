import Image from "next/image";

export default function Cart (){
    return (
      <div className="container justify-items-center">
        <div>
        <Image
        className="mb-7"
        src="/shop.png"
        alt="Next.js logo"
        width={1480}
        height={938}
        priority
      />

      {/* Shop headng */}
      <div className="absolute inset-0 flex flex-col tracking-tighter   items-center justify-center mt-1 px-5 pt-2 mx-4 mb-32 bg-op">
        <div className="hover:translate-x-[12px] hover:opacity-20 to-slate-950 -[1s] duration-[2s]">
          {/* Logo */}
          <Image
            className="justify-self-center"
            src="/logo.png"
            alt="Next.js logo"
            width={70}
            height={38}
            priority
          />
          <h1 className="font-medium text-6xl">Cart</h1>
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
            <h3 className=" font-normal "> Cart</h3>
          </div>
        </div>
      </div>
      <hr className="bg-slate-800 opacity-10 mb-3 -mt-9  pt-1" />



      


        </div>
       
      </div>
    );
}