import React from "react";

const TestimonialSkeleton = () => {
  return (
    <div className="p-2 rounded-sm border bg-gray-200 animate-pulse">
      <div className="flex gap-3">
        <span className="relative block rounded-md text-lg size-14">
          <div className="h-14 w-14 bg-gray-300 rounded-md"></div>
        </span>
        <div className="w-3/4">
          <div className="h-4 bg-gray-300 rounded mb-2 w-2/3"></div>
          <div className="block text-sm tracking-wide h-4 bg-gray-300 rounded w-1/3"></div>
          <blockquote className="mt-3">
            <div className="h-4 bg-gray-300 rounded mb-1 w-full"></div>
            <div className="h-4 bg-gray-300 rounded mb-1 w-4/5"></div>
            <div className="h-4 bg-gray-300 rounded w-3/5"></div>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
