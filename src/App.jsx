import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import InquiryModal from './components/InquiryModal'
import FAQPage from './pages/FAQPage'
import './index.css'

function HomePage({ onOpenModal }) {
  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <About />
      <Services />
      <MenuSection />
      <Stats />
      <Testimonials />
      <Gallery />
      <CtaBanner onOpenModal={onOpenModal} />
    </>
  )
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <BrowserRouter>
      <Header onOpenModal={openModal} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={openModal} />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={closeModal} />
    </BrowserRouter>
  )
}

export default App
