import Image from "next/image";

import Homepage from './Home/Homepage';
import AboutUs from './About/AboutUs';


export default function Home() {
  return (
    <div className="justify-center">
    
      
      <Homepage />
      <AboutUs/>
      
    </div>
  );
}
