import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from './Home/Homepage';
importU

export default function Home() {
  return (
    <div className="justify-center">
    
      <Navbar />
      <Homepage />
      <UpcomingPrograms />
    </div>
  );
}
