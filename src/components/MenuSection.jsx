import './MenuSection.css'

const MENU_LINK = 'https://drive.google.com/drive/folders/1B16fSR8fSrhfgIk0HWGlFV3_K4lk0ln5'

const menuItems = [
  { label: 'Indian', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=150&q=80' },
  { label: 'Continental', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=150&q=80' },
  { label: 'Asian', img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=150&q=80' },
  { label: 'Mexican', img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=150&q=80' },
  { label: 'Mediterranean', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&q=80' },
  { label: 'Lebanese', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=150&q=80' },
  { label: 'Italian', img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=150&q=80' },
  { label: 'Chinese', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=150&q=80' },
  { label: 'Japanese', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=150&q=80' },
  { label: 'Thai', img: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=150&q=80' },
  { label: 'Street Food', img: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=150&q=80' },
  { label: 'Streets & Bakery', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=150&q=80' },
  { label: 'Beverages & Mocktails', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=150&q=80' },
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
