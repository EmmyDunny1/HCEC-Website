import Image from "next/image";

import Homepage from './Home-page/Homepage';



export default function Home() {
  return (
    <div className="justify-center">
    
       {/* Navbar Component */}
       <Navbar />
      <Homepage />
      
      
    </div>
  );
}
