import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MenuSection from './components/MenuSection'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CtaBanner from './components/CtaBanner'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import InquiryModal from './components/InquiryModal'
import './index.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <About />
        <Services />
        <MenuSection />
        <Stats />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CtaBanner onOpenModal={openModal} />
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={closeModal} />
    </>
  )
}

export default App
