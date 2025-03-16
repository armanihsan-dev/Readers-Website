import './App.css';
import Header from '../components/Header';
import Topnav from '../components/Topnav';
import Hero from '../components/Hero';
import MarqueeDemo from '../components/Morque';
import TelentTestSection from '../components/TelentTestSection';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Fields from '../components/Fields';
import { WorldMapDemo } from '../components/WorldMap';

function App() {
  return (
    <main className="font-[poppins] ">
      <Topnav
        span={'Enroll Now!'}
        text={' Take the Test & Study for FREE for a Whole Year!'}
        icons={'🚀📚'}
      />
      <Header />
      <Hero />
      <MarqueeDemo />
      <TelentTestSection />
      <Form />
      <Fields />
      <WorldMapDemo />
      <Footer />
    </main>
  );
}

export default App;
