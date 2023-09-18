import React, {type ReactNode } from 'react';
import Navbar from "~/component/Navbar";
import Footer from "~/component/Footer";

type LayoutProps = {
   children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
   return (
      <div className="flex flex-col min-h-screen">
         {/* Navbar */}
         <Navbar />

         {/* Main Content */}
         <main className="flex flex-col min-h-screen align-middle items-center pt-10">
            {children}
         </main>

         {/* Footer */}
         <Footer />
      </div>
   );
}