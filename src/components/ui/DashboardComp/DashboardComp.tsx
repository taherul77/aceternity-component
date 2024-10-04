"use client";
import React, { Children } from "react";

import { ReactNode } from "react";

interface DashboardCompProps {
  children: ReactNode;
}

const DashboardComp = ({children}: DashboardCompProps) => {
  return (
    
      <div className="flex justify-center w-full h-full bg-white overflow-x-auto">
        <div className="   ">
         {children}
        </div>
      </div>
    
  );
};

export default DashboardComp;
