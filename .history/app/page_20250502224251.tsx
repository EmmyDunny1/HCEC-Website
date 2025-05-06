import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from './Home/Homepage';
imp
import UpcomingPrograms from "./Home/UpcomingPrograms";

export default function Home() {
  return (
    <div className="justify-center">
    
      <Navbar />
      <Homepage />
      <AboutUs/>
      
    </div>
  );
}
