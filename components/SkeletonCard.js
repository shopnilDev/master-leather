export const SkeletonCard = () => (
  <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-300"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-4 h-8 bg-gray-300 rounded"></div>
    </div>
  </div>
);
