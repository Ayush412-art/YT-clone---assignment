
import localFont from "next/font/local";
import Videogrid from "@/components/Videogrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/LeftBar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div >
     <Appbar />
     <div className="flex">

     <LeftBar />
     <Videogrid />
      
     </div>
    </div>
  );
}
