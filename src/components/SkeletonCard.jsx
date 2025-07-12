import React from "react";

const SkeletonCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm animate-pulse bg-white dark:bg-gray-900">
      <div className="mb-4 h-70 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-3/4 mb-2 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-1/3 mb-2 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
};

export default SkeletonCard;
