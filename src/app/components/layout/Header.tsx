import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <>
      <header className="   flex  justify-between  sm:px-8  lg:px-12 items-center  py-2   max-w-screen-2xl  mx-auto   container  ">
        {/* logo */}
        <div className=" px-1 lg:px-0 py-1 lg:py-2 ">
          <Image
            className="w-[175px] h-[45px] md:w-[195px] md:h-[50px] lg:w-[195px] lg:"
            src="/logo2.png"
            alt="Next.js logo"
            width={200}
            height={280}
            priority
          />
        </div>

        {/* Nav buttons */}

        <nav className="hidden md:block  w-[430px] h-[24px] top-[38px] left-[505px]     ">
          <ul className="flex  justify-center gap-2  text-md font-medium tracking-wider  gap-x-4 mx-4">
            <li className=" hover:text-[#B88E2F] inline-block py-1 px-3 ">
              <Link href="/">Home</Link>
            </li>

            <li className=" hover:text-[#B88E2F] inline-block py-1 px-3">
              <Link href="/shop">Shop</Link>
            </li>

            <li className=" hover:[#B88E2F]  inline-block py-1 px-3">
              <Link href="/blog">Blog</Link>
            </li>

            <li className="hover:text-[#B88E2F]  inline-block py-1 px-3">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* icons */}

        <div className="hidden md:block">
          <div className=" flex items-center gap-3 lg:gap-6  justify-around  mx-3 ">
            {/* account alert */}
            <button className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1 em"
                height="2.1 em"
                viewBox="0 0 24 24"
                stroke-width="0.75"
                stroke="black"
                className=" size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  fill="black"
                  d="M10.5 14c4.14 0 7.5 1.57 7.5 3.5V20H3v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13zM10.5 5A3.5 3.5 0 0 1 14 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7 8.5A3.5 3.5 0 0 1 10.5 5m0 1A2.5 2.5 0 0 0 8 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 13 8.5A2.5 2.5 0 0 0 10.5 6M20 16v-1h1v1zm0-3V7h1v6z"
                />
              </svg>
            </button>

            {/* search */}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.1em"
                height="2.1 em"
                fill="none"
                viewBox="0 0 22 22"
                stroke-width="1.62"
                stroke="black"
                className="  size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>

            {/* heart */}
            <Link href={"/product"} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                stroke-width="1.5"
                stroke="currentColor"
                className=" size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>

            {/* cart */}

            <Link href={"/cart"} className="hover:stroke-[#d3ad55]  duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.0em"
                height="2.0em"
                viewBox="0 0 940 940"
                stroke-width="0.75"
                stroke="black"
                className="size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  fill="#2c2b2b"
                  d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2M305.7 253l575.8 1.9l-56.4 315.8l-452.3.8zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6m325.1 0c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* menu sheet */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            {/* Nav buttons */}
            <ul className="  ">
              <div className="items-center pl-9 py-5  ">
                <Image
                  className="item-justify-center"
                  src="/logo2.png"
                  alt="Next.js logo"
                  width={120}
                  height={120}
                  priority
                />
              </div>

              <li className=" flex flex-col my-5 mx-3 gap-y-4">
                <Link
                  href="/"
                  className=" hover:text-[#B88E2F]  hover:translate-x-[7px] duration-[3s] mb-1 drop-shadow-sm"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className=" hover:text-[#B88E2F]  hover:translate-x-[7px] duration-[3s] mb-1 drop-shadow-sm"
                >
                  Shop
                </Link>
                <Link
                  href="/blog"
                  className=" hover:text-[#B88E2F]  hover:translate-x-[7px] duration-[3s] mb-1 drop-shadow-sm"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className=" hover:text-[#B88E2F]  hover:translate-x-[7px] duration-[3s] mb-1 drop-shadow-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* icons */}
            <div className="flex  mt-7  items-center gap-3 lg:gap-9 justify-around mx-3">
              {/* account alert */}
              <button >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.1 em"
                  height="2.1 em"
                  viewBox="0 0 24 24"
                  stroke-width="0.75"
                  stroke="black"
                  className=" size-4 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
                >
                  <path
                    fill="black"
                    d="M10.5 14c4.14 0 7.5 1.57 7.5 3.5V20H3v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13zM10.5 5A3.5 3.5 0 0 1 14 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7 8.5A3.5 3.5 0 0 1 10.5 5m0 1A2.5 2.5 0 0 0 8 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 13 8.5A2.5 2.5 0 0 0 10.5 6M20 16v-1h1v1zm0-3V7h1v6z"
                  />
                </svg>
              </button>

              {/* search */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.0em"
                  height="2.0 em"
                  fill="none"
                  viewBox="0 0 22 22"
                  stroke-width="1.62"
                  stroke="black"
                  className="  size-4 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>

              {/* heart icon */}
              <Link href={"/product"} className="hover:stroke-[#d3ad55]  duration-150" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 22"
                stroke-width="1.5"
                stroke="currentColor"
                className=" size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </Link>

              {/* cart */}
              <Link href={"/cart"} className="hover:stroke-[#d3ad55]  duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.0em"
                height="2.0em"
                viewBox="0 0 940 940"
                stroke-width="0.75"
                stroke="currentColor"
                className="size-4 md:size-5 lg:size-7 hover:stroke-[#d3ad55]  duration-150"
              >
                <path
                  fill="#2c2b2b"
                  d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2M305.7 253l575.8 1.9l-56.4 315.8l-452.3.8zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6m325.1 0c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6"
                />
              </svg>
            </Link>
              
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
