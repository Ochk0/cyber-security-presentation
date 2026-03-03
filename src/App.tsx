import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

import TitleSlide from './slides/TitleSlide'
import TOCSlide from './slides/TOCSlide'
import WhyCyberSlide from './slides/WhyCyberSlide'
import ThreatLandscapeSlide from './slides/ThreatLandscapeSlide'
import AttackMethodsSlide from './slides/AttackMethodsSlide'
import PhishingSlide from './slides/PhishingSlide'
import SocialEngineeringSlide from './slides/SocialEngineeringSlide'
import VishingSmishingSlide from './slides/VishingSmishingSlide'
import MalwareSlide from './slides/MalwareSlide'
import PasswordSlide from './slides/PasswordSlide'
import MFASlide from './slides/MFASlide'
import EmailSecuritySlide from './slides/EmailSecuritySlide'
import SafeInternetSlide from './slides/SafeInternetSlide'
import IncidentResponseSlide from './slides/IncidentResponseSlide'
import ChecklistSlide from './slides/ChecklistSlide'
import ConclusionSlide from './slides/ConclusionSlide'
import ParticleField from './components/ParticleField'

const slides = [
  { component: TitleSlide, label: '' },
  { component: TOCSlide, label: 'Агуулга' },
  { component: WhyCyberSlide, label: 'Танилцуулга' },
  { component: ThreatLandscapeSlide, label: 'Аюул Занал' },
  { component: AttackMethodsSlide, label: 'Халдлагын Аргууд' },
  { component: PhishingSlide, label: 'Phishing' },
  { component: SocialEngineeringSlide, label: 'Social Engineering' },
  { component: VishingSmishingSlide, label: 'Vishing & Smishing' },
  { component: MalwareSlide, label: 'Malware' },
  { component: PasswordSlide, label: 'Password' },
  { component: MFASlide, label: 'MFA' },
  { component: EmailSecuritySlide, label: 'Email' },
  { component: SafeInternetSlide, label: 'Web' },
  { component: IncidentResponseSlide, label: 'Incident Response' },
  { component: ChecklistSlide, label: 'Шалгах Хуудас' },
  { component: ConclusionSlide, label: 'Дүгнэлт' },
]

const transitions = [
  { // Fade + Scale
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  { // Slide Up
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  },
  { // Slide from Right
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
  },
  { // Rotate in
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  },
  { // Zoom Burst
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 2 },
  },
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const isTransitioning = useRef(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning.current) return
    if (index < 0 || index >= slides.length) return
    isTransitioning.current = true
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setTimeout(() => { isTransitioning.current = false }, 600)
  }, [currentSlide])

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const transitionIndex = currentSlide % transitions.length
  const transition = transitions[transitionIndex]
  const progress = ((currentSlide + 1) / slides.length) * 100
  const SlideComponent = slides[currentSlide].component
  const slideLabel = slides[currentSlide].label

  const slideVariants = {
    initial: (dir: number) => ({
      ...transition.initial,
      x: transition.initial.x ? (transition.initial.x as number) * dir : transition.initial.x,
    }),
    animate: transition.animate,
    exit: (dir: number) => ({
      ...transition.exit,
      x: transition.exit.x ? (transition.exit.x as number) * dir : transition.exit.x,
    }),
  }

  return (
    <div className="app">
      <ParticleField />

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Slide Label */}
      {slideLabel && (
        <motion.div
          className="slide-label"
          key={slideLabel}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {slideLabel}
        </motion.div>
      )}

      {/* Slides */}
      <div className="slide-container" style={{ perspective: '1200px' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            className="slide"
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-info">
          <img src="/logo.svg" alt="" className="nav-logo" />
          <span className="nav-title">Кибер Аюулгүй Байдал</span>
        </div>
        <div className="nav-controls">
          <button className="nav-btn" onClick={prevSlide} disabled={currentSlide === 0}>
            ‹
          </button>
          <div className="nav-counter">
            <span>{currentSlide + 1}</span> / {slides.length}
          </div>
          <button className="nav-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            ›
          </button>
        </div>
      </nav>

      {/* Keyboard hints */}
      <div className="keyboard-hint">
        <span className="key-badge">← →</span>
        <span className="key-badge">Space</span>
      </div>
    </div>
  )
}

export default App
