import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomerCare from "../components/CustomerCare";

const CartPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  mb-20 ">
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

            <h1 className="font-semibold text-5xl mb-3">Cart</h1>
            <p className="font-normal text-base mr-1 ">
              {" "}
              Home &gt; <span className="font-medium tracking-wide">Cart</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-slate-800 opacity-5 mb-7 -mt-9  pt-1" />

      {/* Main  */}
      <div className="flex flex-col lg:flex-row lg:h-[525px] items-center lg:justify-around mb-32">
        <div className="flex flex-col w-full  mx-auto lg:w-auto">
          <nav className="h-[55px] lg:w-[817px] bg-[#F9F1E7] flex items-center justify-around list-none text-sm lg:text-base rounded-[6px]">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </nav>
          <div className="mt-6 lg:mt-14 flex items-center justify-around flex-wrap gap-4">
            <Image
              src={"/sofas.png"}
              alt="sofas"
              width={108}
              height={105}
              className="w-[72px] lg:w-[108px] h-auto"
            />
            <span className="text-sm lg:text-base">Asgaard sofa</span>
            <span className="text-sm lg:text-base">Rs. 250,000.00</span>
            <div className="h-[32px] w-[32px] rounded-md border border-black flex items-center justify-center">
              1
            </div>
            <span className="text-sm lg:text-base">Rs. 250,000.00</span>
            <Image
              src={"/delete.png"}
              alt="delete"
              width={28}
              height={28}
              className="w-[20px] lg:w-[28px] h-auto"
            />
          </div>
        </div>

        {/* Cart total card */}
        <div className="bg-[#F9F1E7] sm: mx-auto sm:w-4/5 lg:w-[393px] h-auto lg:h-[390px] mt-8 lg:mt-0 p-6  flex flex-col items-center justify-center  rounded-[6px]">
          <h1 className="text-center text-[24px] lg:text-[32px] font-semibold mb-6">
            Cart Totals
          </h1>
          <div className="flex items-center justify-between mb-4 w-full px-4  sm:gap-x-3  lg:gapx0 lg:px-0">
            <h3 className="text-sm lg:text-base">Subtotal</h3>
            <span className="text-sm lg:text-base">Rs. 250,000.00</span>
          </div>
          <div className="flex items-center justify-between mb-6 w-full px-4 lg:px-0">
            <h3 className="text-sm lg:text-base">Total</h3>
            <span className="text-sm lg:text-base text-[#B88E2F]">
              Rs. 250,000.00
            </span>
          </div>
          <Link href={"/checkout"}>
            <button className="border border-black w-full  px-3 lg:w-[222px] h-[48px] lg:h-[58.95px] rounded-2xl text-[18px] lg:text-[20px]">
              Check Out
            </button>
          </Link>
        </div>
      </div>

      <CustomerCare />
    </div>
  );
};

export default CartPage;
