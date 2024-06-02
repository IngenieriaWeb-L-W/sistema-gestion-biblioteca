import Image from "next/image";
import Link from "next/link";
import React from "react";

type AppLoadingProps = {
  fallbackUrl?: string;
};

export const AppLoading = ({ fallbackUrl }: AppLoadingProps) => {
  return (
    <div className="bg-gray-800 text-white flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/loading/spin-loading.svg"
        width={100}
        height={100}
        alt="App loading spinner"
      />
      <p>Loading, please wait a second</p>
      {fallbackUrl && (
        <Link
          className="p-2 mt-3 rounded-md px-3 bg-blue-700"
          href={fallbackUrl}
        >
          Go back
        </Link>
      )}
    </div>
  );
};
