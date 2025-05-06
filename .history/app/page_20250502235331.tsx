import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from './Home-page/Homepage';
import AboutUs from './About-Us/AboutUs';


export default function Home() {
  return (
    <div className="justify-center">
    
      
      <Homepage />
      <AboutUs/>
      
    </div>
  );
}
