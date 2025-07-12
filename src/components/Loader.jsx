import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader2 className="h-10 w-10 animate-spin text-gray-500 dark:text-gray-300" />
    </div>
  );
};

export default Loader;
