import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
