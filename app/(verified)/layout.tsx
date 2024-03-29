import Sidebar from "@/components/Sidebar";
import VNavbar from "@/components/VNavbar";
import React from "react";

interface Props {}

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="bg-bg">
      {/* mobile view */}
      <div className="md:hidden">
        <div className="w-full h-20 bg-bg">
          <VNavbar />
        </div>
        <div className="w-full h-20 bg-bg">Sidebar</div>
        <div className="w-full min-h-screen bg-bgSoft pl-4 pt-4">
          {children}
        </div>
        <div className="w-full h-20">Footer</div>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex flex-col">
        <div className="w-full h-20 bg-bg">
          <VNavbar />
        </div>
        <div className="w-full flex">
          <div className="flex-1 w-full bg-bg">
            <Sidebar />
          </div>
          <div className="flex-4 w-full bg-bgSoft mr-10 min-h-screen pl-10 pt-10">
            {children}
          </div>
        </div>
        <div className="w-full h-20 bg-bg">Footer</div>
      </div>
    </div>
  );
};

export default layout;
