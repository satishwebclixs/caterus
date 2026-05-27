import { useState } from 'react'
import './Gallery.css'

const tabs = ['All', 'Weddings', 'Corporate Events', 'Live Counters', 'Birthday Celebrations', 'Premium Buffet Setup', 'Catering Services', 'Event Gallery']

// Google Drive direct image URL
const gd = id => `https://lh3.googleusercontent.com/d/${id}`

const galleryImages = [
  // Weddings
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80', cat: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80', cat: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80', cat: 'Weddings' },
  // Corporate Events
  { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80', cat: 'Corporate Events' },
  { src: 'https://images.unsplash.com/photo-1454944338482-a69bb95894af?w=400&q=80', cat: 'Corporate Events' },
  // Live Counters
  { src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80', cat: 'Live Counters' },
  { src: 'https://images.unsplash.com/photo-1581349437898-cebbe9831942?w=400&q=80', cat: 'Live Counters' },
  // Birthday Celebrations
  { src: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80', cat: 'Birthday Celebrations' },
  { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80', cat: 'Birthday Celebrations' },
  // Premium Buffet Setup
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', cat: 'Premium Buffet Setup' },
  { src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80', cat: 'Premium Buffet Setup' },
  { src: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80', cat: 'Premium Buffet Setup' },
  // Catering Services — real photos from Google Drive
  { src: gd('1vReMwi9_bGpBy0pNitR_sfCHTxtniYXA'), cat: 'Catering Services' },
  { src: gd('1QB2VMMe49bnoMySeSaJB0n2AMlyQpk7f'), cat: 'Catering Services' },
  { src: gd('1tAgZFO7Qj_DtlL-DQu6NEu-Vxq2d752G'), cat: 'Catering Services' },
  { src: gd('1uwJkd_opVswQt6RG0TkxHAcCoYabEycW'), cat: 'Catering Services' },
  // Event Gallery — real photos from Google Drive
  { src: gd('1X7snSIbAOB89vfcE1byhkPIIeIimqoqF'), cat: 'Event Gallery' },
  { src: gd('13l3kkY87UElqdUBidc81dpGLTqY1Q4Gq'), cat: 'Event Gallery' },
  { src: gd('1arpP3HhUqUChvpbb5QKNDusovOVyaX4g'), cat: 'Event Gallery' },
  { src: gd('1RcDCdoJ5n4v7iI_IHajYxARJn4HQyIhn'), cat: 'Event Gallery' },
  { src: gd('1eYEuycqtOR3IiBusxZXfq8-eNm5xba63'), cat: 'Event Gallery' },
]

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.cat === activeTab)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-tag">Our Portfolio</p>
        <h2 className="gallery-heading">OUR EVENT GALLERY</h2>

        <div className="gallery-tabs">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`gallery-tab ${activeTab === tab ? 'tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((img, i) => (
            <div key={i} className="gallery-img-wrap">
              <img src={img.src} alt={img.cat} />
              <div className="gallery-overlay">
                <span>{img.cat}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
