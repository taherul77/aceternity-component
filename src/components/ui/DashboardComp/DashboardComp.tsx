"use client";
import React, { Children } from "react";

import { ReactNode } from "react";

interface DashboardCompProps {
  children: ReactNode;
}

const DashboardComp = ({children}: DashboardCompProps) => {
  return (
    <div>
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
         {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
