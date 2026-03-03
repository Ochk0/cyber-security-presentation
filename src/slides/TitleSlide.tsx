import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
}
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } }
}

const stats = [
  { value: '10М+', label: 'Кибер халдлага өдөрт' },
  { value: '$8Т', label: 'Дэлхийн хохирол /жил' },
  { value: '39с', label: 'Халдлагын давтамж' },
]

const floatingIcons = ['🔒', '🛡️', '⚠️', '🔑', '💻', '📧']

export default function TitleSlide() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div className="bg-gradient-orb" style={{ width: 600, height: 600, background: 'radial-gradient(circle, #3b82f6, transparent)', top: '-15%', left: '-15%' }} />
      <div className="bg-gradient-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #8b5cf6, transparent)', bottom: '-10%', right: '-10%' }} />
      <div className="bg-gradient-orb" style={{ width: 300, height: 300, background: 'radial-gradient(circle, #06b6d4, transparent)', top: '15%', right: '15%' }} />

      {/* Floating icons */}
      {mounted && floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.15, 0.15, 0],
            y: [0, -40, -80, -120],
            x: [0, (i % 2 === 0 ? 10 : -10), (i % 2 === 0 ? -5 : 5), 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            fontSize: '2rem',
            left: `${15 + i * 14}%`,
            bottom: '10%',
            pointerEvents: 'none',
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Shield icon */}
      <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
        <motion.div
          animate={{
            boxShadow: [
              '0 0 40px rgba(59,130,246,0.2)',
              '0 0 80px rgba(59,130,246,0.4)',
              '0 0 40px rgba(59,130,246,0.2)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            width: 100, height: 100, borderRadius: '50%',
            border: '2px solid rgba(59,130,246,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(59,130,246,0.08)',
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" stroke="#60a5fa" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        style={{
          fontSize: '4.5rem', fontWeight: 900, lineHeight: 1.05, marginBottom: 16,
          background: 'linear-gradient(135deg, #fff 0%, #60a5fa 50%, #818cf8 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          letterSpacing: '-0.02em',
        }}
      >
        Кибер Аюулгүй
        <br />
        Байдлын Үндэс
      </motion.h1>

      {/* Subtitle */}
      <motion.p variants={fadeUp} style={{ fontSize: '1.4rem', color: '#94a3b8', fontWeight: 400, marginBottom: 28 }}>
        Өөрийгөө болон Байгууллагаа Хамгаалах нь
      </motion.p>

      {/* Decorative line */}
      <motion.div variants={fadeUp} style={{ width: 80, height: 3, background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', borderRadius: 2, marginBottom: 32 }} />

      {/* Quick stats strip */}
      <motion.div
        variants={fadeUp}
        style={{
          display: 'flex', gap: 40, marginBottom: 32,
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              fontSize: '1.8rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              lineHeight: 1.2,
            }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 2 }}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tag */}
      <motion.div
        variants={fadeUp}
        style={{
          padding: '8px 24px', borderRadius: 24,
          border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.08)',
          color: '#64748b', fontSize: '0.82rem', fontWeight: 500,
          letterSpacing: '2px', textTransform: 'uppercase',
        }}
      >
        Албан Хэрэгцээнд
      </motion.div>
    </motion.div>
  )
}
