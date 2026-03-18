import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
