import Image from "next/image";

export default function CustomerCare() {
  return (
    <div>
      <section className="h-full py-6  flex justify-center items-center w-full bg-[#FAF3EA] overflow-x-hidden mb-9  ">
        <div className="w-full  max-w-full md:max-w-[1334px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-5 pt-9 pb-3">
          {/* High Quality */}
          <div className="flex justify-center items-center w-full max-w-[328px]  mb-4 ">
            <div className="flex justify-center items-center flex-col md:flex-row ">
              <div className="lg:mr-3 mb-4">
                <Image
                  src="/quality.png"
                  alt="logo"
                  width={52}
                  height={60}
                  priority
                />
              </div>

              <div className="gap-y-3 text-center md:text-left ">
                <h2 className="font-semibold text-2xl md:text-xl  text-black   ">
                  High Quality
                </h2>
                <p className="font-medium text-base lg:text-lg text-[#898989] tracking-wide inline-block">
                  crafted from top materials
                </p>
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="flex justify-center items-center w-full max-w-[335px]  mb-4 ">
            <div className="flex justify-center items-center flex-col md:flex-row  ">
              <div className="lg:mr-3 mb-4">
                <Image
                  src="/warranty.png"
                  alt="logo"
                  width={60}
                  height={58}
                  priority
                />
              </div>

              <div className="gap-y-3 text-center md:text-left ">
                <h2 className="font-semibold text-2xl md:text-xl   text-black inline-block  ">
                  Warranty Protection
                </h2>
                <p className="font-medium text-base lg:text-lg text-[#898989] tracking-wide">
                  Over 2 years
                </p>
              </div>
            </div>
          </div>

            {/* Free Shipping */}
            <div className="flex justify-center items-center w-full max-w-[335px]  mb-4 ">
            <div className="flex justify-center items-center flex-col md:flex-row  ">
              <div className="lg:mr-3 mb-4">
                <Image
                  src="/shipping.png"
                  alt="logo"
                  width={60}
                  height={56}
                  priority
                />
              </div>

              <div className="gap-y-3 text-center md:text-left ">
                <h2 className="font-semibold text-2xl md:text-xl inline-block text-black   ">
                Free Shipping
                </h2>
                <p className="font-medium text-base lg:text-lg  text-[#898989] tracking-wide">
                Order over 150 $
                </p>
              </div>
            </div>
          </div>

           {/* Support */}
           <div className="flex justify-center items-center w-full max-w-[335px]  mb-4 ">
            <div className="flex justify-center items-center flex-col md:flex-row  ">
              <div className="lg:mr-3 mb-4">
                <Image
                  src="/support.png"
                  alt="logo"
                  width={52}
                  height={60}
                  priority
                />
              </div>

              <div className="gap-y-3 text-center md:text-left ">
                <h2 className="font-semibold text-2xl md:text-xl inline-block text-black   ">
                24 / 7 Support
                </h2>
                <p className="font-medium text-base lg:text-lg   text-[#898989] tracking-wide">
                Dedicated support
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
