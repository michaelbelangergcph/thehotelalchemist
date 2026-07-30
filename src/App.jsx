import { useEffect, useRef, useState } from 'react'
import './App.css'

const CTA_TEXT = 'Request an Initial Hotel Audit'

function AscendingLine({ animate }) {
  return (
    <svg
      className="ascending-line"
      viewBox="0 0 600 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="320" x2="600" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#C89B5C" stopOpacity="0.35" />
          <stop offset="1" stopColor="#E8C88A" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="320" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#C89B5C" stopOpacity="0.25" />
          <stop offset="1" stopColor="#C89B5C" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        className="ascending-line__fill"
        d="M0,300 L40,290 L90,270 L140,275 L190,230 L240,235 L290,190 L340,175 L390,140 L440,120 L490,90 L540,45 L600,10 L600,320 L0,320 Z"
        fill="url(#fillGrad)"
      />
      <path
        className={`ascending-line__stroke${animate ? ' is-animated' : ''}`}
        d="M0,300 L40,290 L90,270 L140,275 L190,230 L240,235 L290,190 L340,175 L390,140 L440,120 L490,90 L540,45 L600,10"
        stroke="url(#lineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
    </svg>
  )
}

function useOnScreen(options) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, options)
    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, visible]
}

function Reveal({ children, className = '' }) {
  const [ref, visible] = useOnScreen({ threshold: 0.15 })
  return (
    <div ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function App() {
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 150)
    return () => clearTimeout(t)
  }, [])

  const problems = [
    {
      title: 'Revenue leakage',
      copy: 'Pricing, restrictions, room type strategy and channel mix are often managed in silos.',
    },
    {
      title: 'Weak owner visibility',
      copy: 'Owners receive reports, but not always clear actions, accountability or asset-level implications.',
    },
    {
      title: 'Tool underuse',
      copy: 'Hotels pay for PMS, RMS, CRS, BI and OTA tools without extracting the full commercial value.',
    },
    {
      title: 'Execution gap',
      copy: 'Strategy is created, but hotels need cadence, training and follow-through to make it stick.',
    },
  ]

  const pillars = [
    {
      number: '01',
      title: 'Diagnose',
      copy: 'We identify performance gaps, risks and immediate opportunities across revenue, distribution and reporting.',
    },
    {
      number: '02',
      title: 'Optimize',
      copy: 'We build practical pricing, distribution and commercial strategies, prioritized by value and feasibility.',
    },
    {
      number: '03',
      title: 'Execute',
      copy: 'We work alongside your team to turn recommendations into action, with clear owners and deadlines.',
    },
    {
      number: '04',
      title: 'Create value',
      copy: 'We connect every improvement back to cashflow, profitability and long-term asset value.',
    },
  ]

  const differentiators = [
    {
      title: 'Owner lens, not only hotel lens',
      copy: 'Every action connects to profit, NOI and valuation, not just occupancy.',
    },
    {
      title: 'Practical execution engine',
      copy: 'We do not stop at recommendations. We build cadence, dashboards and accountability.',
    },
    {
      title: 'Adaptable to existing tech',
      copy: 'We improve what you already have before recommending anything new.',
    },
  ]

  return (
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Hotel Commercial Optimization</p>
          <h1 className="hero__headline">Transforming Hotel Performance into Lasting Value</h1>
          <p className="hero__sub">
           Alchemy is the art of transformation: turning ordinary materials into something rare and valuable.
           
            At The Hotel Alchemist, we believe every hotel holds untapped potential. Hidden within its people, positioning, systems, data and guest experience are the ingredients for stronger performance.
          We combine the art of hospitality with the science of commercial optimization to transform those ingredients into measurable value: more revenue, stronger profitability and a more distinctive, resilient hotel.
          We do not manufacture value from nothing. We uncover it, refine it and bring it to life.
          </p>
          <a className="button button--primary" href="#contact">
            {CTA_TEXT}
          </a>
        </div>
        <div className="hero__visual">
          <AscendingLine animate={heroReady} />
        </div>
      </section>

      <section className="section section--ivory" id="problem">
        <Reveal className="section__intro">
          <p className="eyebrow eyebrow--dark">The problem we solve</p>
          <h2 className="section__heading">Great assets lose value when commercial execution is fragmented</h2>
        </Reveal>
        <div className="card-grid">
          {problems.map((item) => (
            <Reveal key={item.title} className="card">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__copy">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--navy" id="what-we-do">
        <Reveal className="section__intro">
          <p className="eyebrow eyebrow--light">What we do</p>
          <h2 className="section__heading section__heading--light">
            We turn hotel intelligence into action
          </h2>
        </Reveal>
        <div className="pillar-grid">
          {pillars.map((item) => (
            <Reveal key={item.number} className="pillar">
              <span className="pillar__number">{item.number}</span>
              <h3 className="pillar__title">{item.title}</h3>
              <p className="pillar__copy">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--ivory" id="why-us">
        <Reveal className="section__intro">
          <p className="eyebrow eyebrow--dark">Why us</p>
          <h2 className="section__heading">
            We combine owner-level advisory with hands-on execution
          </h2>
        </Reveal>
        <div className="diff-grid">
          {differentiators.map((item) => (
            <Reveal key={item.title} className="diff">
              <h3 className="diff__title">{item.title}</h3>
              <p className="diff__copy">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--navy closing" id="contact">
        <Reveal className="closing__inner">
          <h2 className="closing__headline">
            Your hotel already contains the ingredients for greater value.
          </h2>
          <p className="closing__copy">
            For centuries, alchemists searched for a way to transform ordinary metals into gold. But alchemy was never only about precious metal. It was about transformation: understanding the hidden properties of raw materials, combining art with science, and turning potential into something exceptional.

The Hotel Alchemist applies that same philosophy to hospitality.

Every hotel contains valuable ingredients: its location, people, brand, guest experience, data, systems, reputation and market position. Yet these elements do not always work together effectively. Revenue may be leaking through inefficient distribution. Technology may be underused. The positioning may no longer reflect the market. Commercial teams may be working hard without the right information, structure or tools.

We see these not as isolated problems, but as raw materials waiting to be transformed.

By combining the art of hospitality with the science of commercial performance, we identify what is holding an asset back, refine what already works and introduce the right mix of strategy, technology, creativity and execution.
Like the alchemist turning base metals into gold, we transform overlooked potential into stronger revenue, healthier profitability, distinctive positioning and lasting asset value.

We do not apply a single formula to every property. Every hotel has its own character, market and commercial chemistry. Our role is to find the right combination of ingredients and turn them into something more valuable, more resilient and uniquely its own.

The Hotel Alchemist: transforming hotel potential into lasting value.

            
            Share a few details about your property and objectives, and we will propose the
            most appropriate starting point.
          </p>
          <a className="button button--primary" href="mailto:michaelbelanger@gcphospitality.com">
            {CTA_TEXT}
          </a>
        </Reveal>
      </section>

      <footer className="footer">
        <p>The Hotel Alchemist</p>
      </footer>
    </div>
  )
}

export default App
