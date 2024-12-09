import Image from "next/image";

export default function ContactPage() {
  return (
    <div className=" justify-items-center">
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
          <h1 className="font-medium text-6xl">Contact</h1>
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
            <h3 className=" font-normal "> Contact</h3>
          </div>
        </div>
      </div>
      <hr className="bg-slate-800 opacity-10 mb-3 -mt-9  pt-1" />

      <div className=" mb-24 mt-16">
        <h2 className=" text-center font-semibold text-md  font-sans mb-2  lg:text-[40px] text-[25px]  pb-[15px]  pt-[25px]  tracking-tight">
          {" "}
          Get in Touch With Us
        </h2>
        <div className="px-96">
          <p className=" capitalize text-zinc-400 text-center">
            For more information about our products & services. please feel free
            to drop us an email. our staff always be thereto help you out. do
            not hesitate!
          </p>
        </div>
      </div>

      <div className="mt-12 pl-20  flex flex-row ">
        {/* section1 */}
        <div className=" pl-[155px] pr-7">
          <div className=" mb-[114px]">
            {/* icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 32 32"
            >
              <path
                className="size-6"
                fill="currentColor"
                d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"
              />
              <circle cx="16" cy="13" r="4" fill="none" />
            </svg>
          </div>
          <div className=" mb-[113px]">
            {/* phone */}
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
          </div>
          <div className="">
            {/* time */}
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
          </div>
        </div>

        <section className=" justify-center ">
          <div className="mb-7 ">
            {/* address */}
            <h2 className="  font-semibold text-2xl tracking-normal  pb-2">
              Address
            </h2>
            <div className=" ">
              <p className=" font-normal  tracking-wide text-s text-neutral-900 pb-2">
                236 5th SE Avenew New <br /> York NY 10000, United <br /> State.
              </p>
            </div>
          </div>

          {/* phone */}
          <div className="mb-7 ">
            <h2 className="  font-semibold text-2xl tracking-normal  pb-2">
              Phone
            </h2>
            <div className="pr-[292px] ">
              <p className=" font-normal  tracking-wide text-s text-neutral-900 pb-2">
                Mobile:+(84) 546-6789
              </p>
              <p className=" font-normal  tracking-wide text-s text-neutral-900 pb-2">
                Mobile:+(84) 546-6789
              </p>
            </div>
          </div>
          {/* work time */}

          <div className="mb-7 ">
            <h2 className="  font-semibold text-2xl tracking-normal  pb-2">
              Working Time
            </h2>
            <div className=" pr-[292px]">
              <p className=" font-normal  tracking-wide text-s text-neutral-900 pb-2">
                Monday-Friday: 9:00- <br /> 22:00
              </p>
              <p className=" font-normal  tracking-wide text-s text-neutral-900 pb-2">
                Saturday-Sunday: 9:00- <br /> 21:00
              </p>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section className="flex flex-col mb-40">
          {/* name */}
          <h4 className="font-semibold  tracking-wide text-s text-neutral-900 pb-2 mb-4 ">
            Your Name
          </h4>
          <input
            type="text"
            className=" border border-gray-400    mb-7 text-gray-600 rounded-[5px] px-9 py-3"
            placeholder="Abc"
          />

          {/* Email */}
          <h4 className="font-semibold   mb-2 tracking-wide text-s text-neutral-900 pb-2 ">
            Email Address
          </h4>
          <input
            type="text"
            className=" border border-gray-400  mb-7 text-gray-600 rounded-[5px] px-9 py-3"
            placeholder="Abc@def.com"
          />

          {/* subject */}
          <h4 className="font-semibold tracking-wide mb-2 text-s text-neutral-900 pb-2 ">
            Subject
          </h4>
          <input
            type="text"
            className=" border border-gray-400   mb-7 text-gray-600 rounded-[5px] px-9 pr-2 py-3"
            placeholder="This is an optional"
          />

          {/* Message */}
          <h4 className="font-semibold  tracking-wide text-s  mb-2 text-neutral-900 pb-2 ">
            Message
          </h4>
          <input
            type="text"
            className=" border border-gray-400   mb-7 text-gray-600 rounded-[5px] p-9 pr-10 py-3"
            placeholder="Hi ! i'd like to ask about"
          />

          <div className="mt-4">
            <button className="bg-yellow-600 text-white  mb-2 hover:bg-yellow-500 px-16 py-2 drop-shadow-lg rounded-md">
              Submit
            </button>
          </div>
        </section>
      </div>
      <div className=" bg-orange-100 align-middle py-20 px-5 mb-7 justify-center ">
        <Image
          className=" w-fit px-5"
          src="/Feature.png"
          alt="Next.js logo"
          width={1340}
          height={70}
          priority
        />
      </div>
    </div>
  );
}
