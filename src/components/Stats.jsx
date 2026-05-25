import { FiBarChart2, FiUsers, FiStar, FiGrid } from 'react-icons/fi'
import './Stats.css'

const stats = [
  {
    icon: <FiBarChart2 />,
    value: '500+',
    label: 'Successful Events',
  },
  {
    icon: <FiUsers />,
    value: '50,000+',
    label: 'Guests Served',
  },
  {
    icon: <FiStar />,
    value: '4.9 ★',
    label: 'Client Satisfaction',
  },
  {
    icon: <FiGrid />,
    value: 'Trusted by',
    label: 'Weddings & Corporates',
  },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-icon-wrap">
                {s.icon}
              </div>
              <div className="stat-text">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
