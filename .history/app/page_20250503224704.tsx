import Image from "next/image";
impo
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
