import Navbar from "./Companents/Navbar";
import CTA from "./Pages/CTA";
import CTA2 from "./Pages/CTA2";
import CTA3 from "./Pages/CTA3";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="bg-[#FFFFFF]  flex flex-col gap-2.5">
      <Navbar />
      <Header />
      <Services />
      <CTA />
      <CTA2 />
      <CTA3 />
      <Footer />
    </div>
  );
}
export default App;
