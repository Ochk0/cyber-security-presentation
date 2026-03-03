import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function AnimatedDonut({ percent, label, color, delay }: { percent: number; label: string; color: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timer = setTimeout(() => {
      let start = 0
      const int = setInterval(() => {
        start += 1
        if (start >= percent) { setVal(percent); clearInterval(int) }
        else setVal(start)
      }, 20)
    }, delay * 1000)
    return () => clearTimeout(timer)
  }, [inView, percent, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      style={{ textAlign: 'center' }}
    >
      <div style={{
        width: 130,
        height: 130,
        borderRadius: '50%',
        background: `conic-gradient(${color} 0% ${val}%, rgba(255,255,255,0.05) ${val}% 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 10px',
        transition: 'background 0.1s',
        boxShadow: `0 0 40px ${color}33`,
      }}>
        <div style={{
          width: 88,
          height: 88,
          borderRadius: '50%',
          background: '#0a0e1a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.6rem',
          fontWeight: 800,
          fontFamily: 'var(--font-mono)',
          color,
        }}>
          {percent === 287 ? val : `${val}%`}
        </div>
      </div>
      <div style={{ fontSize: '0.78rem', color: '#94a3b8', maxWidth: 150, margin: '0 auto', lineHeight: 1.4 }}>
        {label}
      </div>
    </motion.div>
  )
}

const costItems = [
  { label: 'Дундаж өгөгдлийн зөрчил', value: '$4.45М', color: '#ef4444', icon: '💰' },
  { label: 'Ransomware дундаж нэхэмж', value: '$1.54М', color: '#f97316', icon: '🔒' },
  { label: 'Нэг бичлэг алдагдах зардал', value: '$165', color: '#8b5cf6', icon: '📄' },
]

const targetReasons = [
  { text: 'Нууц мэдээлэлд хандах эрх', icon: '🔑' },
  { text: 'Засгийн газрын сүлжээнд нэвтрэх', icon: '🏛️' },
  { text: 'Иргэдийн хувийн мэдээлэл', icon: '👤' },
  { text: 'Чухал дэд бүтцийн удирдлага', icon: '⚡' },
  { text: 'Улс төрийн нөлөөлөл', icon: '🌐' },
]

export default function WhyCyberSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-red"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Кибер Аюулгүй Байдал Яагаад Чухал Вэ
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Төрийн албан хаагчийн хувьд та кибер халдагчдын <span className="highlight">гол бай</span> болдог
      </motion.p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 50, margin: '28px 0 20px' }}>
        <AnimatedDonut percent={43} label="кибер халдлага төрийн байгууллагад чиглэдэг" color="#3b82f6" delay={0.3} />
        <AnimatedDonut percent={95} label="халдлага хүний алдаанаас үүдэлтэй" color="#ef4444" delay={0.5} />
        <AnimatedDonut percent={287} label="халдлагыг илрүүлэх дундаж хоног" color="#10b981" delay={0.7} />
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left: Cost */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ flex: 1 }}
        >
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f87171', marginBottom: 10 }}>
            💸 Санхүүгийн Хохирол
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {costItems.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ x: 4, background: `${c.color}08` }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', borderRadius: 10,
                  background: `${c.color}05`,
                  border: `1px solid ${c.color}15`,
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{c.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{c.label}</div>
                </div>
                <motion.span
                  style={{
                    fontSize: '1.2rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                    color: c.color,
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {c.value}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Middle: Warning */}
        <motion.div
          className="glass-card danger"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ flex: 1 }}
        >
          <div className="card-title danger">⚠️ Анхааруулга</div>
          <p className="card-text" style={{ marginBottom: 10 }}>
            Нэг л алдагдсан нэвтрэх эрх нь халдагчдад нууц мэдээлэл, чухал дэд бүтэц,
            сая сая иргэний хувийн мэдээлэлд хандах боломж олгож болно.
          </p>
          <motion.div
            style={{
              padding: '8px 14px', borderRadius: 8,
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)',
              textAlign: 'center',
            }}
            animate={{ borderColor: ['rgba(239,68,68,0.2)', 'rgba(239,68,68,0.5)', 'rgba(239,68,68,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f87171' }}>
              Монгол: 2023 онд 1,200+ кибер халдлага бүртгэгдсэн
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Why You're a Target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          style={{ width: 280, flexShrink: 0 }}
        >
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#60a5fa', marginBottom: 10 }}>
            🎯 Та яагаад бай болдог вэ?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {targetReasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.08 }}
                whileHover={{ x: 4, background: 'rgba(59,130,246,0.06)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '6px 10px', borderRadius: 8, transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '0.95rem' }}>{r.icon}</span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{r.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
