import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import './FAQ.css'

const faqs = [
  {
    q: 'Which is the best catering service in Delhi NCR?',
    a: 'CaterUs is among the best catering services in Delhi NCR, offering premium food, customized menus, live counters, and professional event catering for weddings, corporate events, birthdays, and private parties.',
  },
  {
    q: 'Do you provide wedding catering services in Delhi NCR?',
    a: 'Yes, we specialize in wedding catering services in Delhi NCR including engagement catering, reception catering, cocktail parties, haldi, mehendi, and destination wedding catering.',
  },
  {
    q: 'What cuisines are available in your catering menu?',
    a: 'Our catering menu includes Indian, Chinese, Italian, Continental, Lebanese, Mexican, Thai, Asian, Mediterranean, street food, desserts, bakery items, beverages, and live food counters in Delhi NCR.',
  },
  {
    q: 'Do you provide catering services for house parties in Delhi NCR?',
    a: 'Yes, we provide house party catering services in Delhi NCR with customized menus, snacks, live counters, mocktails, and premium food presentation for small and large gatherings.',
  },
  {
    q: 'What is the average catering price per plate in Delhi NCR?',
    a: 'Catering prices in Delhi NCR depend on menu selection, guest count, cuisine type, and event setup. We offer affordable catering packages as well as luxury catering services.',
  },
  {
    q: 'Do you provide live catering counters for events?',
    a: 'Yes, we offer live catering counters in Delhi NCR including chaat counters, pasta stations, BBQ counters, mocktail bars, dessert counters, tandoor stations, and live grills.',
  },
  {
    q: 'Can I customize my catering menu?',
    a: 'Absolutely. Our customized catering services in Delhi NCR allow you to personalize food menus, live stations, beverages, desserts, and serving styles according to your event theme.',
  },
  {
    q: 'Do you provide vegetarian and non-vegetarian catering?',
    a: 'Yes, we offer both vegetarian and non-vegetarian catering services in Delhi NCR with multiple cuisine options for weddings, parties, and corporate events.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = i => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <p className="section-tag">Got Questions?</p>
        <h2 className="faq-heading">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="faq-sub">Everything you need to know about our catering services in Delhi NCR</p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq-icon">
                  {openIndex === i ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
