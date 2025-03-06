import Sidebar from "@/components/main/side-bar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "EchoGPT - AI-Driven Productivity Solutions",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 lg:px-8 py-4 min-h-screen flex flex-col">
          <Navbar />
          <section className="grid grid-cols-1 md:grid-cols-[2.5fr_9fr_1.5fr] flex-grow min-h-0">
            {/* Sidebar - Hidden on Mobile, Visible on Medium Screens & Larger */}
            <div className="hidden md:block">
              <Sidebar />
            </div>

            {/* Middle Scrollable Section */}
            <section className="flex flex-col min-h-0 overflow-y-auto">
              {children}
            </section>

            {/* Right Sidebar / Extra Content - Can Be Used for Widgets or Ads */}
            <section className="hidden md:block"></section>
          </section>
        </div>
      </body>
    </html>
  );
}
