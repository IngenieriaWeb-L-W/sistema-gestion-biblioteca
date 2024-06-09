import Image from "next/image";
import React from "react";

type BorrowedResourcesCartProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const BorrowedResourcesCart = ({ setOpen }: BorrowedResourcesCartProps) => {
  return (
    <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden z-40 fixed sticky-0">
      <div
        className="w-full absolute z-40 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
        id="checkout"
      >
        <div className="flex md:flex-row flex-col justify-end" id="cart">
          <div
            className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-gray-800 overflow-y-auto overflow-x-hidden h-screen"
            id="scroll"
          >
            <p className="text-5xl font-black leading-10 text-white pt-12">
              Your Current Bag
            </p>
            <div className="md:flex items-center mt-10 py-8 border-t border-gray-900">
              <div className="w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller3.png"
                  alt="Some img"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-3/4">
                <p className="text-xs leading-3 text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-white">
                    North wolf
                  </p>
                  <select className="py-2 px-1 border border-gray-900 mr-6 focus:outline-none">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-white">
                    $9,000
                  </p>
                </div>
              </div>
            </div>
            <div className="md:flex items-center py-8 border-t border-gray-900">
              <div className="w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller2.png"
                  alt="Some img"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-3/4 w-full">
                <p className="text-xs leading-3 text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-white">
                    Luxe Signature Ring
                  </p>
                  <select className="py-2 px-1 border border-gray-900 mr-6 focus:outline-none">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-white">
                    $9,000
                  </p>
                </div>
              </div>
            </div>

            <div className="md:flex items-center py-8 border-t border-b border-gray-900">
              <div className="h-full w-1/4">
                <img
                  src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/bestSeller1.png"
                  alt="Some img"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="md:pl-3 md:w-3/4 w-full">
                <p className="text-xs leading-3 text-white md:pt-0 pt-4">
                  RF293
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-white">
                    Luxe Signature Shoes
                  </p>
                  <select className="py-2 px-1 border border-gray-900 mr-6 focus:outline-none">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">
                  Height: 10 inches
                </p>
                <p className="text-xs leading-3 text-gray-600 py-4">
                  Color: Black
                </p>
                <p className="w-96 text-xs leading-3 text-gray-600">
                  Composition: 100% calf leather
                </p>
                <div className="flex items-center justify-between pt-5 pr-6">
                  <div className="flex itemms-center">
                    <p className="text-xs leading-3 underline text-white cursor-pointer">
                      Add to favorites
                    </p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                      Remove
                    </p>
                  </div>
                  <p className="text-base font-black leading-none text-white">
                    $9,000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-1/3 xl:w-1/4 w-full bg-gray-800  h-full">
            <div className="flex flex-col md:h-screen px-8 py-20 justify-between overflow-y-auto">
              <div>
                <div className="flex flex-row justify-between">
                  <p className="text-4xl font-black leading-9 text-white">
                    Summary
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="bg-red-500 px-3 py-2 rounded-md text-"
                  >
                    <Image
                      src="/icons/close.svg"
                      height={20}
                      width={20}
                      alt="Close"
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between pt-16">
                  <p className="text-base leading-none text-white">Subtotal</p>
                  <p className="text-base leading-none text-white">$9,000</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-white">Shipping</p>
                  <p className="text-base leading-none text-white">$30</p>
                </div>
                <div className="flex items-center justify-between pt-5">
                  <p className="text-base leading-none text-white">Tax</p>
                  <p className="text-base leading-none text-white">$35</p>
                </div>
              </div>
              <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                  <p className="text-2xl leading-normal text-white">Total</p>
                  <p className="text-2xl font-bold leading-normal text-right text-white">
                    $10,240
                  </p>
                </div>
                <button className="text-base leading-none w-full py-5 bg-blue-500 rounded-md border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedResourcesCart;
