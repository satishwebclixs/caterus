import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MenuSection from './components/MenuSection'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MenuSection />
        <Stats />
        <Testimonials />
        <Gallery />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

export default App
