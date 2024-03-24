import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Herosection";
import Footer from '../Components/Footer'
const Landing = () => {
  return (
    <div className="font-custom">
      <div>
        <Navbar />
      </div>

      <div className="mt-36 overflow-x-hidden overflow-y-hidden lg:mt-72">
        <HeroSection />
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  );
};
export default Landing;
