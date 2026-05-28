import { useEffect } from 'react'
import FAQ from '../components/FAQ'

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="faq-page">
      <div className="faq-page-hero">
        <p className="section-tag">Help Center</p>
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about our catering services</p>
      </div>
      <FAQ />
    </div>
  )
}
