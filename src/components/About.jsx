import './About.css'

export default function About() {
  return (
    <section className="about" id="about-us">
      <div className="about-deco about-deco-left">🌿</div>
      <div className="about-deco about-deco-right">🌿</div>
      <div className="container about-inner">
        <p className="section-tag">Our Promise</p>
        <h2 className="about-title">
          Making Every Event<br />
          <span className="teal">Deliciously Memorable</span>
        </h2>
        <p className="about-desc">
          At CaterUs, we specialize in premium catering experiences crafted for grand celebrations,
          formal corporate gatherings, and intimate special occasions. From elegant wedding feasts to
          professional corporate dining and live catering counters, we bring exceptional taste,
          presentation, and hospitality to every event.
        </p>
      </div>
    </section>
  )
}
