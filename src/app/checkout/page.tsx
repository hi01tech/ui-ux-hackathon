import React from "react";
import Image from "next/image";
import CustomerCare from "../components/CustomerCare";

const CheckOutPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mb-28  ">
      {/* banner */}
      <div className="h-full md:h-[316px] w-full flex flex-col items-center justify-center mb-[26px]">
        <div className="h-[316px] relative w-full ">
          <Image src={"/shop.png"} alt="hero" layout="fill" objectFit="cover" />

          {/*  Heading */}
          <div className="w-[150px] md:w-[130px] absolute translate-x-[-50%]  translate-y-[2%] top[50%] left-[50%] h-[90%] flex flex-col justify-center items-center  hover:opacity-20 to-slate-950 transition duration-300  ">
            {/* logo */}
            <Image
              className="justify-self-center mb-5"
              src="/logo.png"
              alt="Next.js logo"
              width={67}
              height={38}
              priority
            />

            <h1 className="font-semibold text-5xl mb-3">Checkout</h1>
            <p className="font-normal text-base mr-1 ">
              {" "}
              Home &gt;{" "}
              <span className="font-medium tracking-wide">Checkout</span>
            </p>
          </div>
        </div>
      </div>

      {/* content section */}

      <div className="container mx-auto px-4 lg:px-12 mt-16 mb-20">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-10 px-3">
          {/* Left Side: Billing Form */}
          <div className="w-full lg:w-[60%] mb-12">
            <h1 className="text-[36px] font-semibold mb-5">Billing details</h1>
            <div className="flex flex-wrap items-center justify-start gap-6">
              <div className="w-full sm:w-auto">
                <label>
                  First Name
                  <br />
                  <input
                    type="text"
                    className=" sm:w-[211px] border border-gray-400 mt-2  w-full lg:w-[190px] h-[68px]  rounded-[12px]"
                  />
                </label>
              </div>
              <div className="w-full sm:w-auto">
                <label>
                  Last Name
                  <br />
                  <input
                    type="text"
                    className=" sm:w-[211px] border border-gray-400 mt-2  w-full lg:w-[190px] h-[68px]  rounded-[12px]"
                  />
                </label>
              </div>
            </div>
            <br />
            Company Name (Optional)
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Country / Region
            <br />
            <br />
            <div className="relative w-full lg:w-[453px] h-[75px]">
              <input
                type="text"
                className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
              />
            </div>
            <br />
            Street address
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Town / City
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Province
            <br />
            <br />
            <div className="relative w-full lg:w-[453px] h-[75px]">
              <input
                placeholder="Western Province"
                type="text"
                className="w-full  rounded-[12px] pl-4 text-[#9F9F9F] lg:w-[385px] h-[68px] border border-gray-400 "
              />
            </div>
            <br />
            ZIP code
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Phone
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Email address
            <br />
            <br />
            <input
              type="text"
              className="w-full lg:w-[385px] h-[68px] border  border-gray-400 rounded-[12px]"
            />
            <br />
            <br />
            Additional information
            <br />
            <br />
            <input
              placeholder="Additional information"
              type="text"
              className="w-full  rounded-[12px] pl-4 text-[#9F9F9F] lg:w-[385px] h-[68px] border border-gray-400 "
            />
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full lg:w-[35%] mb-12">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="text-[24px] font-semibold">Product</h2>
                <p className="text-[#9F9F9F]">
                  Asgaard sofa <span className="text-black">X 1</span>
                </p>
                <span className="font-semibold">Subtotal</span>
                <span className="font-semibold">Total</span>
              </div>
              <div className="flex flex-col gap-3 text-right">
                <h2 className="text-[24px] font-semibold">Subtotal</h2>
                <span>Rs. 250,000.00</span>
                <span>Rs. 250,000.00</span>
                <span className="text-[#B88E2F] text-[24px] font-semibold">
                  Rs. 250,000.00
                </span>
              </div>
            </div>
            <div className="border-b border-[#D9D9D9] w-full mt-6"></div>
            <div className="mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-black rounded-full w-[14px] h-[14px]"></div>
                <h1 className="text-[20px] font-semibold">
                  Direct Bank Transfer
                </h1>
              </div>
              <p className="text-[#9F9F9F] mt-2">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div className="border border-[#9F9F9F] rounded-full w-[14px] h-[14px]"></div>
                <h1 className="text-[18px] font-semibold text-[#9F9F9F]">
                  Cash On Delivery
                </h1>
              </div>
            </div>
            <div className="mt-10">
              <button className="w-full lg:w-[318px] h-[64px] border border-gray-400 rounded-2xl">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>

      <CustomerCare />
    </div>
  );
};

export default CheckOutPage;
