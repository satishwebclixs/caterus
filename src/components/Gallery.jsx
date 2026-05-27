import { useState } from 'react'
import './Gallery.css'

const tabs = ['All', 'Catering Services', 'Event Gallery']

// Google Drive direct image URL helper
const gd = id => `https://drive.google.com/thumbnail?id=${id}&sz=w800`

const galleryImages = [
  // Catering Services (4 images)
  { src: gd('1vReMwi9_bGpBy0pNitR_sfCHTxtniYXA'), cat: 'Catering Services' },
  { src: gd('1QB2VMMe49bnoMySeSaJB0n2AMlyQpk7f'), cat: 'Catering Services' },
  { src: gd('1tAgZFO7Qj_DtlL-DQu6NEu-Vxq2d752G'), cat: 'Catering Services' },
  { src: gd('1uwJkd_opVswQt6RG0TkxHAcCoYabEycW'), cat: 'Catering Services' },
  // Event Gallery (5 images)
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
          {filtered.slice(0, 12).map((img, i) => (
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
