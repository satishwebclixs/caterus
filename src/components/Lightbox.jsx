import { useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (index === null || index === undefined) return null

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        <FiX size={28} />
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous"
      >
        <FiChevronLeft size={36} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].alt} />
        <p className="lightbox-caption">{images[index].alt}</p>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next"
      >
        <FiChevronRight size={36} />
      </button>

      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  )
}
