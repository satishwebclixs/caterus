import { useState } from 'react'
import './Testimonials.css'

const reviews = [
  {
    stars: 5,
    quote: '"CaterUs made our wedding unforgettable! The food, presentation, and service were absolutely exceptional."',
    author: '– Priya & Arjun',
  },
  {
    stars: 5,
    quote: '"Excellent corporate catering experience. Professional team and delicious food. Highly recommended!"',
    author: '– Rahul Mehta, IT Director',
  },
  {
    stars: 5,
    quote: '"From live counters to desserts, everything was perfect. Our guests loved it!"',
    author: '– Neha Sharma',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <p className="section-tag">Happy Clients</p>
        <h2 className="testi-heading">WHAT OUR CLIENTS SAY</h2>

        <div className="testi-slider">
          <button
            className="testi-arrow testi-prev"
            onClick={() => setActive(a => (a - 1 + reviews.length) % reviews.length)}
          >&#8249;</button>

          <div className="testi-cards">
            {reviews.map((r, i) => (
              <div key={i} className={`testi-card ${i === active ? 'active' : ''}`}>
                <div className="stars">
                  {'★'.repeat(r.stars)}
                </div>
                <p className="testi-quote">{r.quote}</p>
                <p className="testi-author">{r.author}</p>
              </div>
            ))}
          </div>

          <button
            className="testi-arrow testi-next"
            onClick={() => setActive(a => (a + 1) % reviews.length)}
          >&#8250;</button>
        </div>

        <div className="testi-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? 'dot-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
