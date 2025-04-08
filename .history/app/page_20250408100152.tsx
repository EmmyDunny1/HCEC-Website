import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from './Home/Homepage';

export default function Home() {
  return (
    <div className="justify-center">
    
      <Navbar />
     <div><Homepage /> </div> 
    </div>
  );
}
