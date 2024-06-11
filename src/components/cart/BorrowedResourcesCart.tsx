"use client";

import { useCart } from "@/hooks/use-cart";
import { Resource } from "@/interfaces/resource/Resource";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const BorrowedResourcesCart = () => {
  const { hideCart, syncCartItems, items, removeItemFromCart } = useCart();

  const handleCloseCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    hideCart();
  };

  useEffect(() => {
    syncCartItems();
  }, []);

  const handleRemoveItem = (resource: Resource): void => {
    removeItemFromCart(resource);
  };

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

            {items.length === 0 && (
              <div className="py-3 my-10 w-full bg-blue-800 text-white rounded-sm text-center">
                Oops! Looks like your bag is empty.
              </div>
            )}

            {items.map(({ resource, lang }) => (
              <div
                key={resource.id}
                className="md:flex items-center mt-10 py-8 border-t border-gray-900"
              >
                <div className="w-1/4">
                  <Link
                    href={`/dashboard/resources/${resource.slug}`}
                    target="_blank"
                  >
                    <Image
                      src={
                        resource.imageUrl ||
                        "/images/default/default-resource-img.png"
                      }
                      width={500}
                      height={800}
                      alt="Some img"
                      className="w-full h-full object-center object-cover"
                    />
                  </Link>
                </div>

                <div className="md:pl-3 md:w-3/4">
                  <p className="text-xs leading-3 text-white md:pt-0 pt-4">
                    Ref: <span className="font-bold">{resource.id}</span>
                  </p>
                  <div className="flex items-center justify-between w-full pt-1">
                    <p className="text-3xl my-2 font-semibold leading-none text-white">
                      {resource.name}
                    </p>
                  </div>
                  <p className="text-xs text-justify leading-5 text-gray-300 py-3">
                    {resource.shortDescription}
                  </p>
                  <p className="text-xs leading-3 text-gray-300 py-2">
                    Lang: {lang.split("_")[1]}
                  </p>

                  <div className="my-2 flex flex-wrap gap-2">
                    {resource.categories.map((category) => (
                      <span
                        key={category.id}
                        className="py-1.5 px-2 bg-white text-gray-600 border border-gray-200 sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 pr-6">
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(resource)}
                        className="px-4 py-2 bg-red-500 rounded-sm text-white cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" md:w-1/3 xl:w-1/4 w-full bg-gray-800  h-full">
            <div className="flex flex-col md:h-screen px-8 py-20 justify-between overflow-y-auto">
              <div>
                <div className="flex flex-row justify-between">
                  <p className="text-4xl font-black leading-9 text-white">
                    Summary
                  </p>
                  <button
                    onClick={handleCloseCart}
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
