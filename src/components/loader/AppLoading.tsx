import Image from "next/image";
import React from "react";

export const AppLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/loading/spin-loading.svg"
        width={100}
        height={100}
        alt="App loading spinner"
      />
      <p>Loading, please wait a second</p>
    </div>
  );
};
