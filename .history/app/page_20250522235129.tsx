
import Navbar from "../public/components/Navbar";
import Homepage from './Home-page/Homepage';
import Footer from "../public/components/Footer";


export default function Home() {
  return (
    <div className="justify-center">
    
       {/* Navbar Component */}
       <Navbar />
      <Homepage />
      <Footer />
      
      
    </div>
  );
}
