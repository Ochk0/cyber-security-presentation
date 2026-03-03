import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const bars = [
  { name: 'Phishing', percent: 91, desc: 'Email-ээр нэвтрэх эрх хулгайлах', tier: 'high' as const, icon: '🎣' },
  { name: 'Social Engineering', percent: 78, desc: 'Хүмүүсийг мэдээлэл задруулахад хүргэх', tier: 'high' as const, icon: '🎭' },
  { name: 'Malware/Ransomware', percent: 65, desc: 'Хортой программ суулгах', tier: 'medium' as const, icon: '🦠' },
  { name: 'Credential Theft', percent: 60, desc: 'Нэвтрэх нэр, нууц үг хулгайлах', tier: 'medium' as const, icon: '🔓' },
  { name: 'USB/Physical', percent: 30, desc: 'Хортой төхөөрөмж', tier: 'low' as const, icon: '💾' },
]

const realWorldExamples = [
  { attack: 'SolarWinds (2020)', type: 'Supply Chain', impact: '18,000 байгууллага', color: '#ef4444' },
  { attack: 'Colonial Pipeline (2021)', type: 'Ransomware', impact: '$4.4М мөнгө нэхсэн', color: '#f97316' },
  { attack: 'Uber (2022)', type: 'MFA Fatigue', impact: 'Бүх систем эвдэрсэн', color: '#eab308' },
]

function AnimatedBar({ name, percent, desc, tier, icon, delay }: typeof bars[0] & { delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(percent), delay * 1000)
    }
  }, [inView, percent, delay])

  return (
    <motion.div
      ref={ref}
      className="bar-item"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="bar-name" style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
        <span>{icon}</span> {name}
      </div>
      <div className="bar-track">
        <div
          className={`bar-fill ${tier}`}
          style={{
            width: `${width}%`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {width > 0 && `${percent}%`}
        </div>
      </div>
      <div className="bar-desc">{desc}</div>
    </motion.div>
  )
}

export default function AttackMethodsSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-red"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Халдагчид Яаж Нэвтэрдэг Вэ
      </motion.h1>
      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Халдлагын аргуудын тархалт
      </motion.p>

      <div className="bar-chart" style={{ maxWidth: 900, marginBottom: 24 }}>
        {bars.map((bar, i) => (
          <AnimatedBar key={i} {...bar} delay={0.3 + i * 0.15} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <motion.div
          className="glass-card danger"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ flex: 1 }}
        >
          <div className="card-title danger">⚠️ Гол Анхааруулга</div>
          <p className="card-text">
            Phishing бол төрийн албан хаагчдад чиглэсэн халдлагын хамгийн түгээмэл арга юм.
            <strong style={{ color: '#f87171' }}> 10 халдлагын 9</strong> нь phishing-ээс эхэлдэг.
          </p>
        </motion.div>

        <motion.div
          className="glass-card purple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ flex: 1 }}
        >
          <div className="card-title purple">🌍 Бодит Жишээнүүд</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
            {realWorldExamples.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: ex.color, flexShrink: 0,
                }} />
                <span style={{ fontSize: '0.82rem', color: '#e2e8f0', fontWeight: 600, minWidth: 130 }}>
                  {ex.attack}
                </span>
                <span className="tag" style={{ background: `${ex.color}15`, color: ex.color, fontSize: '0.68rem' }}>
                  {ex.type}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>— {ex.impact}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
