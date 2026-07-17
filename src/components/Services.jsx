import './Services.css'

const MENU_LINK = 'https://drive.google.com/drive/folders/1B16fSR8fSrhfgIk0HWGlFV3_K4lk0ln5'

const services = [
  {
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&h=240&q=75',
    title: 'BIG EVENT CATERING',
    items: ['Wedding Catering', 'Engagement Catering', 'Roka Ceremony Catering', 'Reception Catering', 'Sangeet & Mehendi Catering'],
  },
  {
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&h=240&q=75',
    title: 'FORMAL EVENT CATERING',
    items: ['Corporate Catering', 'Office Catering', 'School Catering', 'College Event Catering', 'Exhibition Catering', 'Trade Show Catering', 'Conference Catering'],
  },
  {
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&h=240&q=75',
    title: 'SPECIAL EVENT CATERING',
    items: ['Birthday Parties', 'Anniversary Celebrations', 'Kitty Parties', 'House Parties', 'Family Gatherings'],
  },
  {
    img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=400&h=240&q=75',
    title: 'LIVE CATERING EXPERIENCE',
    items: ['Live Pasta Counters', 'Chaat Stations', 'BBQ Counters', 'Mocktail Bars', 'Dessert Live Counters'],
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="section-tag">What We Offer</p>
        <h2 className="services-heading">OUR CATERING SERVICES</h2>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.title} className="service-card">
              <div className="service-img-wrap">
                <img
                  src={s.img}
                  alt={s.title}
                  width="400"
                  height="240"
                  loading="lazy"
                  decoding="async"
                />
                <div className="service-img-overlay" />
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={MENU_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline service-btn">
                  Explore More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
