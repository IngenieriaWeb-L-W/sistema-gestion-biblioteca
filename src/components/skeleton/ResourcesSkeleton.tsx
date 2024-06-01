type ResourcesSkeletonProps = {
  cols: { lg: number; md: number; sm: number };
  count: number;
};

const ResourcesSkeleton = ({ cols, count }: ResourcesSkeletonProps) => {
  return (
    <div>
      <div
        className={`py-5 grid lg:grid-cols-${cols.lg} md:grid-cols-${cols.md} sm:grid-cols-${cols.sm} px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3`}
      >
        {new Array(count).fill(0).map((_, index) => (
          <div key={index} className="block relative">
            <div className="animate-pulse">
              <div className="w-full h-96 bg-gray-200 rounded-lg"></div>
            </div>
            <div className="px-3 py-2 text-xs bg-gray-900 rounded-ee-sm rounded-es-sm shadow-2xl animate-pulse">
              <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
              <div className="mt-4 flex flex-wrap gap-2">
                <div className="py-2 px-4 bg-gray-200 rounded-xl w-1/2"></div>
              </div>
              <div className="mt-1 grid grid-cols-12 items-end gap-2 text-white">
                <div className="col-span-8 h-4 bg-gray-200 rounded"></div>
                <div className="col-span-4 w-full text-end">
                  <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesSkeleton;
