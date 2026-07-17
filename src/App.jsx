import { lazy, Suspense, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import MenuSection from './components/MenuSection'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
const InquiryModal = lazy(() => import('./components/InquiryModal'))
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'))

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
      <FAQ />
      <CtaBanner onOpenModal={onOpenModal} />
    </>
  )
}

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal  = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const isThankYouPage = window.location.pathname.replace(/\/+$/, '') === '/thank-you'

  if (isThankYouPage) {
    return (
      <Suspense fallback={null}>
        <ThankYouPage />
      </Suspense>
    )
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <main>
        <HomePage onOpenModal={openModal} />
      </main>
      <Footer />
      {modalOpen && (
        <Suspense fallback={null}>
          <InquiryModal isOpen onClose={closeModal} />
        </Suspense>
      )}
    </>
  )
}

export default App
