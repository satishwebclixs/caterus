import { useState } from 'react'
import Lightbox from './Lightbox'
import './Gallery.css'

const galleryImages = [
  { src: '/gallery/cs1.jpg', alt: 'Catering Services' },
  { src: '/gallery/cs3.jpg', alt: 'Catering Services' },
  { src: '/gallery/cs4.jpg', alt: 'Catering Services' },
  { src: '/gallery/eg2.jpg', alt: 'Event Gallery' },
  { src: '/gallery/eg4.jpg', alt: 'Event Gallery' },
  { src: '/gallery/g1.jpg',  alt: 'Event Catering' },
  { src: '/gallery/g2.jpg',  alt: 'Event Catering' },
  { src: '/gallery/g3.jpg',  alt: 'Event Catering' },
  { src: '/gallery/g4.jpg',  alt: 'Event Catering' },
  { src: '/gallery/g10.jpg', alt: 'Event Catering' },
  { src: '/gallery/g12.jpg', alt: 'Event Catering' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  const nextImage = () => setLightboxIndex(i => (i + 1) % galleryImages.length)

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-tag">Our Portfolio</p>
        <h2 className="gallery-heading">OUR EVENT GALLERY</h2>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="gallery-img-wrap"
              onClick={() => openLightbox(i)}
              style={{ cursor: 'pointer' }}
            >
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
