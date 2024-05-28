import React from "react";

type LandingFactProps = {
  name: string;
  value: number;
  icon: string;
};

export const LandingFact: React.FC<LandingFactProps> = ({
  icon,
  name,
  value,
}) => {
  return (
    <div className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0">
      <div className="flex mx-auto w-40 sm:w-auto">
        <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
          <i className={`${icon} text-2xl`}></i>
        </div>
        <div className="flex flex-col">
          <p className="text-xl text-black-600 font-bold">{value}+</p>
          <p className="text-lg text-black-500">{name}</p>
        </div>
      </div>
    </div>
  );
};
