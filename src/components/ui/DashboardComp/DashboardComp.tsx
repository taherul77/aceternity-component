"use client";
import React from "react";

import { ReactNode } from "react";

interface DashboardCompProps {
  children: ReactNode;
}

const DashboardComp = ({children}: DashboardCompProps) => {
  return (
    
      <div className="flex justify-center w-full h-full bg-white overflow-x-auto">
        <div className="">
         {children}
        </div>
      </div>
    
  );
};

export default DashboardComp;
