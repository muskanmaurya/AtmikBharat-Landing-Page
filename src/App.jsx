import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Sectors from './sections/Sectors';
import Impact from './sections/Impact';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Gallery from './sections/Gallery';
import Clients from './sections/Clients';
import Supported from './sections/Supported';
import Reviews from './sections/Reviews';
import Team from './sections/Team';
// import BackgroundCanvas from './components/BackgroundCanvas';
// import CircuitBackground from './components/CircuitBackground';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#fafafa] text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        {/* <section id="bgcanvas"><BackgroundCanvas /></section> */}
        {/* <section id="electricbg"><CircuitBackground /></section>  */}
        <section id="home"><Hero /></section>
        <section id="gallery"><Gallery /></section>
        <section id="clients"><Clients /></section>
        <section id="services"><Services /></section>
        <section id="sectors"><Sectors /></section>
        <section id="results"><Impact /></section>
        <section id="supported"><Supported /></section>
        <section id="reviews"><Reviews /></section>
        <section id="teams"><Team /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;