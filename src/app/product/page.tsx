import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AsgaardPage = () => {
    return (
        <div className="max-w-screen-2xl mx-auto mb-20 ">
            {/* Navigation Bar */}
            <nav className="bg-[#F9F1E7] h-24 mt-20 flex items-center gap-8 pl-20">
                <ul className="flex items-center gap-2 list-none">
                    <li className="text-[#9F9F9F]">Home</li>
                    <Image src="/black-arr.png" alt="arrow" width={20} height={20} />
                    <li className="text-[#9F9F9F]">Shop</li>
                    <Image src="/black-arr.png" alt="arrow" width={20} height={20} />
                    <li className="text-[#9F9F9F]">Asgaard Sofa</li>
                </ul>
            </nav>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-start justify-evenly mt-16 px-4 lg:px-24 gap-12">
                {/* Sidebar Thumbnails */}
                <div className="flex flex-col gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num}>
                            <Image
                                src={`/sec${num}.png`}
                                alt={`sec${num}`}
                                width={76}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Product Image Container */}
                <div className="bg-[#F9F1E7] w-full lg:w-1/2 h-auto flex items-center justify-center p-4 rounded-md">
                    <Image src="/sofi.png" alt="sofi" width={500} height={600} className="max-w-full h-auto" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col max-w-lg">
                    <h1 className="text-4xl font-semibold mb-2">Asgaard Sofa</h1>
                    <span className="text-2xl text-[#9F9F9F]">Rs. 250,000.00</span>

                    <div className="flex items-center gap-3 mt-4">
                        <Image src="/five-star.png" alt="star rating" width={124} height={20} />
                        <div className="border-l border-[#9F9F9F] h-3"></div>
                        <span className="text-[#9F9F9F] text-sm">5 Customer Reviews</span>
                    </div>

                    <p className="mt-6 text-sm lg:text-base">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </p>

                    {/* Size Selection */}
                    <h2 className="mt-14 text-[#9F9F9F]">Size:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <button className="w-8 h-8 bg-[#B88E2F] text-white rounded flex items-center justify-center text-sm hover:bg-[#A77A27]">
                            L
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XL
                        </button>
                        <button className="w-8 h-8 bg-[#F9F1E7] rounded flex items-center justify-center text-sm hover:bg-[#B88E2F] hover:text-white">
                            XS
                        </button>
                    </div>

                    {/* Color Selection */}
                    <h2 className="mt-14 text-[#9F9F9F]">Color:</h2>
                    <div className="flex items-center gap-3 mt-4">
                        <div className="w-8 h-8 bg-[#816DFA] rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                        <div className="w-8 h-8 bg-[#B88E2F] rounded-full"></div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                        <div className="flex items-center border border-black rounded-2xl w-[123px] h-[64px]">
                            <button className="px-3">-</button>
                            <span className="px-4">1</span>
                            <button className="px-3">+</button>
                        </div>
                        <Link href={'/cart'}><button className="w-[123px] h-[64px] rounded-2xl border border-black mt-4 sm:mt-0 sm:ml-3">
                            Add To Cart
                        </button>
                        </Link>
                        <button className="w-52 h-16 bg-transparent text-black rounded-2xl border border-black flex items-center justify-center gap-2 mt-4 sm:mt-0 sm:ml-3">
                            <span>+</span>
                            <span>Compare</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-b border-[#9F9F9F] w-full mt-14"></div>
                    <div className="mt-8 flex items-center justify-start gap-8">
                        <div className="flex flex-col text-[#9F9F9F]">
                            <h4>SKU</h4>
                            <h4>Category</h4>
                            <h4>Tags</h4>
                            <h4>Share</h4>
                        </div>
                        <div className="flex flex-col text-[#9F9F9F]">
                            <h4>: SS001</h4>
                            <h4>: Sofas</h4>
                            <h4>: Sofa, Chair, Home, Shop</h4>
                            <div className="flex items-center justify-start gap-3">
                                :
                                <Image src="/fb.png" alt="fb" width={20} height={20} />
                                <Image src="/in.png" alt="in" width={20} height={20} />
                                <Image src="/twi.png" alt="twi" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Description Section */}
            <div className="w-full border-b border-[#9F9F9F] mt-20"></div>
            <div className="h-[744px]">
                <div className="flex flex-col sm:flex-row items-start justify-center gap-6 sm:gap-16 mt-10 text-[24px]">
                    <h1 className="font-semibold">Description</h1>
                    <span className="text-[#9F9F9F]">Additional Information</span>
                    <span className="text-[#9F9F9F]">Reviews [5]</span>
                </div>
                <div className="flex items-center flex-col mt-10">
                    <p className="text-[#9F9F9F] w-full sm:w-[1026px]  sm:h-[48px] px-4">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <br />
                    <p className="text-[#9F9F9F] w-full sm:w-[1026px] sm:h-[48px] px-4">
                    mbodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.E
                    </p>
                </div>
                <div className="flex flex-col gap-6 sm:flex-row items-center justify-around mt-10">
                    <Image src="/sofa-fir.png" alt="sofa1" width={605} height={348} />
                    <Image src="/sofa2.png" alt="sofa2" width={605} height={348} />
                </div>
            </div>

            {/* Related Products Section */}
             
                    {/*  Our Products */}
      <div>
        <h1 className="text-[40px] text-center font-bold mt-14 mb-6">
         Related Products
        </h1>

        <section className="flex flex-row lg:flex-col">

          <section className=" max-w-screen-2xl mx-auto px-3  my-3 lg:px-6 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Image 1 */}
            <Link href={"/shop/syltherin/3.500.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto "
                  src="/syltherin.png"
                  alt="Syltherin stylish cafe chair"
                  width={400}
                  height={400}
                  priority
                />
                <div className="  bg-neutral-100  pb-9 pt-3">
                  <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                    Syltherine
                  </h3>
                  <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
                  <span className="text-[20px] font-semibold mr-6 ml-6">
                    Rp 2.500.000
                  </span>
                  <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
                    Rp 3.500.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          ></path>
                        </svg>
                        <span className="text-sm">Add to Cart</span>
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 2 */}
            <Link href={"/shop/leviosa.png/500.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto "
                  src="/leviosa.png"
                  alt="stylish cafe chair"
                  width={400}
                  height={400}
                  priority
                />
                <div className="  bg-neutral-100  pb-9 pt-3">
                  <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                    Leviosa
                  </h3>
                  <p className="ml-6 mb-4 text-gray-600">Stylish cafe chair</p>
                  <span className="text-[20px] font-semibold mr-6 ml-6">
                    Rp 500.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          ></path>
                        </svg>
                        <span className="text-sm">Add to Cart</span>
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 3 */}
            <Link href={"/shop/lolito.png/7.000.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto"
                  src="/lolito.png"
                  alt="/lolito.pngcafe chair"
                  width={400}
                  height={400}
                  priority
                />
                <div className="  bg-neutral-100  pb-9 pt-3">
                  <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                    Lolito
                  </h3>
                  <p className="ml-6 mb-4 text-gray-600"> Luxury big sofa</p>
                  <span className="text-[20px] font-semibold mr-6 ml-6">
                    Rp 7.000.000
                  </span>
                  <span className="text-[16px] line-through text-gray-600  ml-6 block  sm:ml-6 lg:ml-0 lg:inline-block">
                    Rp 9.000.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          ></path>
                        </svg>
                        <span className="text-sm">Add to Cart</span>
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            {/* Image 4 */}

            <Link href={"/shop/respira.png/ Rp.1.500.000"}>
              <div className="hover:translate-y-[5px] duration-[3s] drop-shadow-xl  mb-6 w-full h-auto bg-white border-2 border-gray-200 relative group overflow-hidden ">
                <Image
                  className=" w-full h-auto "
                  src="/respira.png"
                  alt=" Outdoor table and stool"
                  width={400}
                  height={400}
                  priority
                />
                <div className="  bg-neutral-100  pb-9 pt-3">
                  <h3 className="text-[24px] font-semibold text-[#3A3A3A] ml-6 mt-4">
                    Respira
                  </h3>
                  <p className="ml-6 mb-4 text-gray-600">
                    {" "}
                    Outdoor table and stool
                  </p>
                  <span className="text-[20px] font-semibold mr-6 ml-6">
                    Rp.1.500.000
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 top-[275px] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className=" border border-gray-200 bg-white px-6 py-3 bg-golden text-yellow-500 font-medium rounded hover:bg-golden/80 mb-7">
                    View Detail
                  </button>

                  <div className="flex space-x-6">
                    <Link href={"/cart"}>
                      <button className="text-white flex flex-row items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                          ></path>
                        </svg>
                        <span className="text-sm">Add to Cart</span>
                      </button>
                    </Link>
                    <Link href={"/compare"}>
                      <button className="text-white flex flex-row items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.30em"
                          height="2em"
                          viewBox="0 0 32 32"
                        >
                          {" "}
                          <path
                            fill="currentColor"
                            d="M22.188 2.281L20.78 3.72L25.063 8H4v2h21.063l-4.282 4.281l1.407 1.438L28.905 9zm-12.375 14L3.093 23l6.72 6.719l1.406-1.438L6.938 24H28v-2H6.937l4.282-4.281z"
                          ></path>
                        </svg>
                        <span className="text-sm">Compare</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>

            
          </section>

         
        </section>

        <div className="flex items-center justify-center mt-6">
          <Link href={"/shop"}>
            <button className="w-[245px] h-[48px] bg-[#FFFFFF] border border-[#B88E2F] text-[#B88E2F]     hover:bg-yellow-600 hover:text-white font-semibold tracking-widest text-sm mt-3 mb-10 py-3 px-8 ">
              Show More
            </button>
          </Link>
        </div>
      </div>

        </div>
    );
};

export default AsgaardPage;