import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContributorsPage = () => {
  return (
    <section className="min-h-[80vh]">
      <div className="py-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
              Build by experts
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              This is our team of contributors who have made this project
              possible.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3">
            <div className="flex flex-col items-center">
              <Link
                href="https://github.com/juancamilo11"
                target="_blank"
                title="Juan Camilo Cardona"
                className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
              >
                <Image
                  alt="John Doe"
                  src="/images/landing/contributors/juancamilo11.jpeg"
                  className="rounded-full"
                  loading="lazy"
                  width={120}
                  height={120}
                />
              </Link>
              <p className="text-center">Juan Camilo Cardona</p>
            </div>

            <div className="flex flex-col items-center">
              <Link
                href="https://github.com/daherre0"
                target="_blank"
                title="Diego Alonso Herrera"
                className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
              >
                <Image
                  alt="John Doe"
                  src="/images/landing/contributors/daherre0.jpeg"
                  className="rounded-full"
                  loading="lazy"
                  width={120}
                  height={120}
                />
              </Link>
              <p className="text-center">Diego Alonso Herrera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorsPage;
