import Image from "next/image";
import CustomerCare from "../components/CustomerCare";

export default function ContactPage() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      {/*Contac Banner */}
      <div className="h-full md:h-[316px] w-full  flex flex-col items-center justify-center mb-[26px]">
        <div className="h-[316px] relative w-full ">
          <Image src={"/shop.png"} alt="hero" layout="fill" objectFit="cover" />

          {/* Contact Heading */}
          <div className="w-[150px] md:w-[150px] absolute translate-x-[-50%]  translate-y-[2%] top[50%] left-[50%] h-[90%] flex flex-col justify-center items-center  hover:opacity-20 to-slate-950 transition duration-300 ">
            {/* logo */}
            <Image
              className="justify-self-center mb-5"
              src="/logo.png"
              alt="Next.js logo"
              width={67}
              height={38}
              priority
            />

            <h1 className="font-semibold text-5xl mb-3">Contact</h1>
            <p className="font-normal text-base  mr-1">
              {" "}
              Home &gt; <span className="font-medium">Contact</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-slate-800 opacity-5 mb-7 -mt-9  pt-1" />

      {/* Main*/}
      <section className="flex flex-col lg:flex-col mb-10  px-2 item-center">
        {/* Get in touch paragraph */}
        <div className=" mb-24 mt-2 lg:mt-16 justify-center px-8 md:px-32 lg:px-80">
          <h2 className=" text-center font-semibold text-md  font-sans mb-2  lg:text-[40px] text-[25px]  pb-[10px]  pt-[25px]  tracking-tight">
            Get in Touch With Us
          </h2>

          <p className=" tracking-wide capitalize text-[#9F9F9F] text-center">
            For more information about our products & services. please feel free
            to drop us an email. our staff always be thereto help you out. do
            not hesitate!
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col md:flex-row justify-center gap-x-20 md:gap-x-9 lg:gap-x-20">
          <div className="top-[705px] px-7 flex flex-col mb-20 justify-items-center ">
            <div className="flex flex-row space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.8em"
                height="1.8em"
                viewBox="0 0 32 32"
              >
                <path
                  className="size-6"
                  fill="currentColor"
                  d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
                />
                <circle cx="16" cy="13" r="4" fill="none" />
              </svg>
              <div className="mb-7 text-left ">
                <h2 className="  font-medium text-2xl tracking-normal  pb-2">
                  Address
                </h2>

                <div className=" ">
                  <p className=" font-normal   text-base text-neutral-900 pb-2">
                    236 5th SE Avenew New <br /> York NY 10000, United <br />{" "}
                    State.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7em"
                height="1.7em"
                viewBox="0 0 24 24"
              >
                <path
                  className="size-2"
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.88 1.88 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.29 11.29 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.88 1.88 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75z"
                  clip-rule="evenodd"
                />
              </svg>

              <div className="mb-7 text-left ">
                <h2 className="  font-medium text-2xl tracking-normal  pb-2">
                  Phone
                </h2>
                <div className=" text-base font-normal   text-neutral-900 pb-2 ">
                  <p className=" ">Mobile:+(84) 546-6789</p>
                  <p className=" ">Mobile:+(84) 546-6789</p>
                </div>
              </div>
            </div>

            <div className="flex flex-row space-x-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.7em"
                height="1.7em"
                viewBox="0 0 32 32"
              >
                <path
                  className="size-6"
                  fill="currentColor"
                  d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"
                />
                <path fill="none" d="M20.587 22L15 16.41V7h2v8.582l5 5.005z" />
              </svg>

              <div className="mb-7  text-left">
                <h2 className="  font-medium text-2xl tracking-normal  pb-2">
                  Working Time
                </h2>
                <div className="  text-base">
                  <p className=" font-normal   text-neutral-900 pb-2">
                    Monday-Friday: 9:00- <br /> 22:00
                  </p>
                  <p className=" font-normal   text-neutral-900 pb-2">
                    Saturday-Sunday: 9:00- <br /> 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}

          <div className=" left-[614px]">
            <form className="flex flex-col px-7 mb-40 sm:mt-10 md:mt-5 lg:mt-0 top-[200px]">
              {/* Name */}
              <fieldset className="mb-1">
                <label
                  htmlFor="name"
                  className="block font-semibold tracking-wide text-base text-black pb-2 mb-4"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Abc"
                  className="text-[#9F9F9F] border border-[#9F9F9F] w-full    mb-7  rounded-[10px] px-9 py-3 text-left  mr-3 pb-2  b-2 flex  gap-x-7  pt-3 font-normal  "
                />
              </fieldset>

              {/* Email */}
              <fieldset className="mb-1">
                <label
                  htmlFor="email"
                  className="font-semibold block tracking-wide text-base text-black pb-2 mb-4"
                >
                  {" "}
                  Email Address
                </label>

                <input
                  type="email"
                  required
                  className="text-[#9F9F9F] border border-[#9F9F9F] w-full   mb-7  rounded-[10px] px-9 py-3 text-left  mr-3 pb-2  b-2 flex  gap-x-7  pt-3 font-normal "
                  placeholder="Abc@def.com"
                />
              </fieldset>

              {/* subject */}
              <fieldset className="mb-1">
                <label
                  htmlFor="text"
                  className="block font-semibold tracking-wide text-base text-black pb-2 mb-4"
                >
                  {" "}
                  Subject
                </label>

                <input
                  type="text"
                  required
                  className=" text-[#9F9F9F] border border-[#9F9F9F]  w-full   mb-7  rounded-[10px] px-9 py-3 text-left  mr-3 pb-2  b-2 flex  gap-x-7  pt-3 font-normal   "
                  placeholder="This is an optional"
                />
              </fieldset>

              {/* Message */}
              <fieldset>
                <label
                  htmlFor="text"
                  className="block font-semibold tracking-wide text-base text-black pb-2 mb-4"
                >
                  Message
                </label>

                <input
                  type="text"
                  className="text-[#9F9F9F] border border-[#9F9F9F]  w-full   mb-7  rounded-[10px] px-9 py-3 text-left  mr-3 pb-2  b-2 flex  gap-x-7  pt-3 font-normal  p-9 pr-10 "
                  placeholder="Hi ! i'd like to ask about"
                />
              </fieldset>

              <div className="mt-4">
                <button className="bg-yellow-600 text-white  mb-2 hover:bg-yellow-500 px-16 py-2 drop-shadow-lg rounded-[10px]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <CustomerCare />
    </div>
  );
}
