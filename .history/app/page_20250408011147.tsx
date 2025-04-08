import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from '.'

export default function Home() {
  return (
    <div className="justify-center">
    
      <Navbar />
      <Homepage />
    </div>
  );
}
