import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Services from './components/Services/Services';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <div className="app-container bg-grid">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ProjectShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
