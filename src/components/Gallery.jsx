import './Gallery.css'

// Only real downloaded images — no Unsplash placeholders, no tabs
const galleryImages = [
  { src: '/gallery/cs1.jpg', alt: 'Catering Services' },
  { src: '/gallery/cs3.jpg', alt: 'Catering Services' },
  { src: '/gallery/cs4.jpg', alt: 'Catering Services' },
  { src: '/gallery/eg2.jpg', alt: 'Event Gallery' },
  { src: '/gallery/eg4.jpg', alt: 'Event Gallery' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <p className="section-tag">Our Portfolio</p>
        <h2 className="gallery-heading">OUR EVENT GALLERY</h2>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-img-wrap">
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
