
import Navbar from "./components/Navbar";
import Homepage from './Home-page/Homepage';
import Footer from "./components/Footer";


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
