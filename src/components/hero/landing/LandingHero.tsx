"use client";

import React from "react";

import Image from "next/image";

import { useLandingStats } from "@/hooks/use-landing-stats";
import { LandingFact } from "@/components/fact/BasicFact";

export const LandingHero = () => {
  const { totalUsers, totalResources, dailyLoans } = useLandingStats();

  return (
    <React.Fragment>
      <section
        className="max-w-screen-xl mt-14 px-8 xl:px-16 mx-auto"
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
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image
                src="/images/landing/hero/hero-image-1.svg"
                alt="Landing hero"
                quality={100}
                width={612}
                height={383}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full flex">
          <LandingFact
            icon="bx bx-user"
            name="Active Users"
            value={totalUsers}
          />
          <LandingFact
            icon="bx bx-book"
            name="Total Resources"
            value={totalResources}
          />
          <LandingFact
            icon="bx bx-transfer-alt"
            name="Daily Loans"
            value={dailyLoans}
          />
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
};
