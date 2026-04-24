import { useState, useEffect, useRef } from 'react'

// ─── Scroll reveal hook ───────────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Navbar ───────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]
  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">✦</div>
            <div className="nav-logo-text">TRUE <span>SHINE</span></div>
          </a>
          <ul className="nav-links">
            {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
          <a href="#contact" className="btn-primary nav-cta"><span>Book Now</span></a>
          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
          <span>Book an Appointment</span>
        </a>
      </div>
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"/>
      <div className="hero-grid"/>
      <div className="hero-orb-1"/>
      <div className="hero-orb-2"/>
      {/* Car SVG silhouette */}
      <svg className="hero-car-svg" viewBox="0 0 900 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M80 280 C80 280 140 200 200 180 L280 140 C320 120 380 110 450 110 L580 110 C640 110 680 125 720 155 L780 200 C820 220 840 250 845 265 L860 280 L870 295 C870 295 840 305 800 308 C800 308 790 270 750 265 C710 260 680 295 680 308 L320 308 C320 308 310 270 270 265 C230 260 200 295 200 308 L100 305 L70 295 Z" fill="currentColor" stroke="rgba(92,184,255,0.6)" strokeWidth="2"/>
        <path d="M200 185 L290 135 C330 118 390 108 460 108 L570 108" stroke="rgba(92,184,255,0.4)" strokeWidth="1.5" strokeDasharray="6 4"/>
        <circle cx="250" cy="308" r="38" stroke="rgba(92,184,255,0.5)" strokeWidth="3" fill="none"/>
        <circle cx="250" cy="308" r="20" stroke="rgba(92,184,255,0.3)" strokeWidth="2" fill="none"/>
        <circle cx="710" cy="308" r="38" stroke="rgba(92,184,255,0.5)" strokeWidth="3" fill="none"/>
        <circle cx="710" cy="308" r="20" stroke="rgba(92,184,255,0.3)" strokeWidth="2" fill="none"/>
        <path d="M350 180 L360 135 L500 132 L540 175" stroke="rgba(92,184,255,0.35)" strokeWidth="1.5" fill="none"/>
        <path d="M200 200 L260 200 C280 200 290 210 300 220" stroke="rgba(92,184,255,0.3)" strokeWidth="1.5"/>
      </svg>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"/>
            Premium Auto Detailing
          </div>
          <h1 className="hero-headline">
            YOUR CAR<br/>
            DESERVES TO<br/>
            <span className="shine">TRUE SHINE.</span>
          </h1>
          <p className="hero-sub">
            Professional exterior &amp; interior detailing that restores your vehicle's showroom finish. We treat every car like it's our own.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary"><span>Book an Appointment</span></a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">100<span>%</span></div>
              <div className="stat-label">Satisfaction</div>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <div className="stat-num"><span>$</span>100</div>
              <div className="stat-label">Starting Price</div>
            </div>
            <div className="stat-divider"/>
            <div className="stat">
              <div className="stat-num">2<span>+</span></div>
              <div className="stat-label">Services Offered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────
function Services() {
  const headerRef = useReveal()
  const card1Ref = useReveal()
  const card2Ref = useReveal()

  const services = [
    {
      icon: '🚗',
      title: 'EXTERIOR DETAIL',
      desc: 'A thorough exterior cleaning that restores your car\'s paint, glass, and trim to a gleaming showroom-quality finish.',
      list: [
        'Hand wash & decontamination',
        'Clay bar treatment',
        'Wheel & tire deep clean',
        'Window cleaning inside & out',
        'Trim & rubber restoration',
        'Final shine & spray wax',
      ],
    },
    {
      icon: '🪑',
      title: 'INTERIOR DETAIL',
      desc: 'A deep interior clean that eliminates dirt, odors, and stains, leaving every surface fresh, sanitized, and spotless.',
      list: [
        'Full vacuum & debris removal',
        'Seat & carpet shampooing',
        'Dashboard & panel wipe-down',
        'Door panels & pockets cleaned',
        'Console & cupholder deep clean',
        'Air vent cleaning & deodorizing',
      ],
    },
  ]

  const refs = [card1Ref, card2Ref]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header reveal" ref={headerRef}>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">PROFESSIONAL DETAILING<br/>SERVICES</h2>
          <p className="section-sub">Every detail matters. We use premium products and proven techniques to make your vehicle look its absolute best.</p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal reveal-delay-${i + 1}`} ref={refs[i]}>
              <div className="service-glow"/>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-list">
                {s.list.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Pricing ──────────────────────────────────────────────────
function Pricing() {
  const ref = useReveal()
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-inner">
          <div className="reveal" ref={ref}>
            <div className="section-label">Transparent Pricing</div>
            <h2 className="section-title">SIMPLE,<br/>FAIR PRICING</h2>
            <p className="section-sub">No hidden fees. Pricing is straightforward — based on your vehicle's size and current condition.</p>
            <div className="pricing-card">
              <div className="pricing-card-glow"/>
              <div className="pricing-tag">✦ Detailing Packages</div>
              <div className="pricing-amount">
                <span className="currency">$</span>100<span className="plus">+</span>
              </div>
              <p className="pricing-starting">STARTING PRICE PER DETAIL</p>
              <div className="pricing-factors">
                {[
                  { icon: '🚙', title: 'Vehicle Size', text: 'Sedans, SUVs, trucks & vans — size affects the time and product needed.' },
                  { icon: '🧹', title: 'Current Condition', text: 'Heavily soiled vehicles require more time, product, and care.' },
                  { icon: '✨', title: 'Service Type', text: 'Exterior, interior, or a full combo detail — you choose.' },
                  { icon: '📍', title: 'Custom Quotes', text: 'DM or email us a photo for a fast, accurate quote on your vehicle.' },
                ].map(f => (
                  <div key={f.title} className="pricing-factor">
                    <div className="factor-icon">{f.icon}</div>
                    <div>
                      <div className="factor-title">{f.title}</div>
                      <div className="factor-text">{f.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pricing-note">
                <strong>📸 Want an exact quote?</strong> Send us a photo of your vehicle via Instagram or email and we'll get back to you fast with a fair price.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ────────────────────────────────────────────
function WhyUs() {
  const contentRef = useReveal()
  const visualRef = useReveal()
  const points = [
    { icon: '🔍', title: 'Obsessive Attention to Detail', text: 'We don\'t cut corners. Every crevice, every panel, every surface gets the same meticulous care.' },
    { icon: '🕐', title: 'Reliable & On Time', text: 'We respect your schedule. When we say we\'ll be there, we\'re there — and we deliver on every promise.' },
    { icon: '💎', title: 'Spotless, Lasting Results', text: 'We use professional-grade products that protect your vehicle and keep it looking clean longer.' },
    { icon: '🤝', title: 'Honest & Friendly Service', text: 'No upsells, no pressure. Just great work and transparent communication from start to finish.' },
  ]
  return (
    <section className="why" id="about">
      <div className="container">
        <div className="why-inner">
          <div className="why-visual reveal" ref={visualRef}>
            <div className="why-circle why-circle-1"/>
            <div className="why-circle why-circle-2"/>
            <div className="why-circle why-circle-3"/>
            <div className="why-center">✦</div>
            <div className="why-orbit-dot"/>
            <div className="why-orbit-dot"/>
            <div className="why-orbit-dot"/>
          </div>
          <div className="why-content reveal" ref={contentRef}>
            <div className="section-label">Why True Shine</div>
            <h2 className="section-title">THE DIFFERENCE<br/>IS IN THE<br/>DETAILS.</h2>
            <p className="section-sub">We built True Shine on a simple belief: every car deserves to look its best, and every customer deserves honest, quality service.</p>
            <div className="trust-points">
              {points.map((p, i) => (
                <div key={p.title} className={`trust-point reveal reveal-delay-${i + 1}`}>
                  <div className="tp-icon">{p.icon}</div>
                  <div>
                    <div className="tp-title">{p.title}</div>
                    <p className="tp-text">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Gallery ──────────────────────────────────────────────────
function Gallery() {
  const headerRef = useReveal()
  const gridRef = useReveal()
  const items = [
    { label: 'Exterior Detail', badge: 'before', icon: '🚗', large: true },
    { label: 'Exterior Detail', badge: 'after',  icon: '✨', large: false },
    { label: 'Interior Clean',  badge: 'before', icon: '🪑', large: false },
    { label: 'Interior Clean',  badge: 'after',  icon: '💎', large: false },
    { label: 'Full Detail',     badge: 'after',  icon: '🌟', large: false },
  ]
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery-header reveal" ref={headerRef}>
          <div className="section-label">Our Work</div>
          <h2 className="section-title">BEFORE &amp; AFTER<br/>RESULTS</h2>
          <p className="section-sub">The proof is in the shine. Every vehicle we touch leaves looking brand new.</p>
        </div>
        <div className="gallery-grid reveal" ref={gridRef}>
          {items.map((item, i) => (
            <div key={i} className={`gallery-item${item.large ? ' large' : ''}`}>
              <div className="gallery-placeholder">
                <div className="gallery-placeholder-icon">{item.icon}</div>
              </div>
              <div className="gallery-label">
                <span className="gallery-label-text">{item.label}</span>
                <span className={`gallery-badge badge-${item.badge}`}>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="gallery-note">📸 Follow us on Instagram @thetrueshineautodetailing for real results</p>
      </div>
    </section>
  )
}

// ─── Booking ──────────────────────────────────────────────────
function Booking() {
  const ref = useReveal()
  return (
    <section className="booking" id="contact">
      <div className="booking-bg"/>
      <div className="container">
        <div className="booking-inner reveal" ref={ref}>
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">READY FOR YOUR<br/>TRUE SHINE?</h2>
          <p className="section-sub">DM us on Instagram or send us an email to book your appointment. We'll get back to you fast with a quote and available times.</p>
          <div className="booking-options">
            <a
              href="https://instagram.com/thetrueshineautodetailing"
              target="_blank"
              rel="noreferrer"
              className="booking-card"
            >
              <div className="booking-card-icon">📱</div>
              <div className="booking-card-title">Instagram</div>
              <div className="booking-card-value">@thetrueshineautodetailing</div>
            </a>
            <a
              href="mailto:thetrueshineautodetailing@gmail.com"
              className="booking-card"
            >
              <div className="booking-card-icon">✉️</div>
              <div className="booking-card-title">Email Us</div>
              <div className="booking-card-value">thetrueshineautodetailing@gmail.com</div>
            </a>
          </div>
          <div className="booking-cta-wrap">
            <a href="https://instagram.com/thetrueshineautodetailing" target="_blank" rel="noreferrer" className="btn-primary">
              <span>📩 DM to Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              <a href="#" className="nav-logo">
                <div className="nav-logo-icon">✦</div>
                <div className="nav-logo-text">TRUE <span>SHINE</span></div>
              </a>
            </div>
            <div className="footer-tagline">Premium Auto Detailing — Pflugerville, TX</div>
          </div>
          <div className="footer-links">
            {['#services','#pricing','#gallery','#contact'].map((href, i) => (
              <a key={href} href={href}>{['Services','Pricing','Gallery','Contact'][i]}</a>
            ))}
          </div>
          <div className="footer-contact">
            <a href="mailto:thetrueshineautodetailing@gmail.com">thetrueshineautodetailing@gmail.com</a>
            <a href="https://instagram.com/thetrueshineautodetailing" target="_blank" rel="noreferrer">@thetrueshineautodetailing</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} True Shine Auto Detailing. All rights reserved.</div>
          <div className="footer-made">Made with <span>✦</span> for every vehicle we touch.</div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"/>
        <Services />
        <div className="section-divider"/>
        <Pricing />
        <div className="section-divider"/>
        <WhyUs />
        <div className="section-divider"/>
        <Gallery />
        <div className="section-divider"/>
        <Booking />
      </main>
      <Footer />
    </>
  )
}
