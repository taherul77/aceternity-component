"use client";

import Background from "@/components/ui/Background/Background";
import SidebarComp from "@/components/ui/DashboardComp/SidebarComp/SidebarComp";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

function layout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Background></Background>

        {/* <SidebarComp Children={children}></SidebarComp> */}
		{children}
      </QueryClientProvider>
    </Provider>
  );
}

export default layout;
