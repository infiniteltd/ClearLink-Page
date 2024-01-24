import Header from "./components/Header";
import Home from './components/Hero';
import Company from "./components/Company";
import Shopify from "./components/Shopify";
import Support from "./components/Support";
import Ready from "./components/Ready";
import Service from "./components/Service";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <div className="max-w-7xl mx-auto bg-hero-pattern object-contain">
        <Header />
        <Home />
      </div>
      <Company />
      <div className="bg-gray-50">
        <Shopify />
      </div>
      <Support />
      <Ready />
      <Service />
      <div className="bg-gray-50 p-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
