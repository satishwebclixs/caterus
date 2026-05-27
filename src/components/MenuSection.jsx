import './MenuSection.css'

const MENU_LINK = 'https://drive.google.com/drive/folders/1B16fSR8fSrhfgIk0HWGlFV3_K4lk0ln5'

const menuItems = [
  { label: 'Indian',               img: '/menu/new1.jpg' },
  { label: 'Continental',          img: '/menu/new2.jpg' },
  { label: 'Asian',                img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=150&q=80' }, // original CR2, placeholder
  { label: 'Mexican',              img: '/menu/new4.jpg' },
  { label: 'Mediterranean',        img: '/menu/new5.jpg' },
  { label: 'Lebanese',             img: '/menu/new6.jpg' },
  { label: 'Italian',              img: '/menu/new7.jpg' },
  { label: 'Chinese',              img: '/menu/new8.jpg' },
  { label: 'Japanese',             img: '/menu/new9.jpg' },
  { label: 'Thai',                 img: '/menu/new10.jpg' },
  { label: 'Street Food',          img: '/menu/new11.jpg' },
  { label: 'Streets & Bakery',     img: '/menu/new12.jpg' },
  { label: 'Beverages & Mocktails',img: '/menu/new13.jpg' },
]

export default function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <p className="section-tag">Explore Cuisines</p>
        <h2 className="menu-heading">CURATED MENUS FOR EVERY OCCASION</h2>

        <div className="menu-grid">
          {menuItems.map(m => (
            <div key={m.label} className="menu-item">
              <div className="menu-img-wrap">
                <img src={m.img} alt={m.label} />
              </div>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <a href={MENU_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">View Full Catering Menu &rarr;</a>
        </div>
      </div>
    </section>
  )
}
