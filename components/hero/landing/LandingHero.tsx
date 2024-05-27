import React from "react";

import Image from "next/image";

import { facts } from "@/data/landing/facts/facts";

export const LandingHero = () => {
  return (
    <React.Fragment>
      <section
        className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
        id="about"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Empowering Your <strong>Reading Journey</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6 leading-loose">
              Easily organize, track, and discover books with Booky. Our
              intuitive interface and powerful features will transform your
              library experience. Join Booky today and take your library to the
              next level!
            </p>
            {/* <ButtonPrimary>Get Started</ButtonPrimary> */}
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image
                src="/images/landing/hero/hero-image-1.svg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          {facts.map((fact) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={fact.id}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <Image
                    src="/some/image"
                    className="h-6 w-6"
                    width="100"
                    height="100"
                    alt="some"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {fact.value}+
                  </p>
                  <p className="text-lg text-black-500">{fact.name}</p>
                </div>
              </div>
            </div>
          ))}
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
};
