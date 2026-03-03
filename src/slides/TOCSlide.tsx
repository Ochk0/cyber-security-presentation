import { motion } from 'framer-motion'

const sections = [
  {
    title: '1-р хэсэг: Аюул Заналыг Ойлгох',
    items: ['Аюул заналын орчин', 'Халдлагын аргууд', 'Phishing & Social Engineering'],
    color: '#ef4444',
    icon: '🎯',
    slides: '3-8',
    duration: '~15 мин',
  },
  {
    title: '2-р хэсэг: Хувийн Аюулгүй Байдал',
    items: ['Password & MFA', 'Email аюулгүй байдал', 'Аюулгүй интернет хэрэглээ'],
    color: '#3b82f6',
    icon: '🛡️',
    slides: '9-13',
    duration: '~15 мин',
  },
  {
    title: '3-р хэсэг: Malware & Халдлага',
    items: ['Malware-ийн төрлүүд', 'Vishing & Smishing', 'Ransomware'],
    color: '#8b5cf6',
    icon: '⚠️',
    slides: '7-8',
    duration: '~10 мин',
  },
  {
    title: '4-р хэсэг: Хариу Арга Хэмжээ',
    items: ['Incident Response журам', 'Аюулгүй байдлын шалгах хуудас'],
    color: '#10b981',
    icon: '✅',
    slides: '14-16',
    duration: '~10 мин',
  },
]

const learningGoals = [
  { text: 'Кибер аюулыг таних чадвар эзэмших', icon: '👁️' },
  { text: 'Өдөр тутмын аюулгүй зуршил тогтоох', icon: '🔄' },
  { text: 'Асуудал гарвал яах вэ гэдгээ мэдэх', icon: '🚨' },
  { text: 'Байгууллагаа хамгаалах хувь нэмрээ оруулах', icon: '🏛️' },
]

export default function TOCSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-blue"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Өнөөдөр Юу Үзэх Вэ
      </motion.h1>
      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Кибер аюулгүй байдлын гол ойлголтууд
      </motion.p>

      <div style={{ display: 'flex', gap: 24 }}>
        {/* Left: Sections */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sections.map((section, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.02, borderColor: section.color + '40', x: 6 }}
                style={{
                  borderLeft: `3px solid ${section.color}`,
                  cursor: 'default',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${section.color}15`, border: `1px solid ${section.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', flexShrink: 0,
                  }}
                >
                  {section.icon}
                </motion.div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: section.color }}>
                      {section.title}
                    </h3>
                    <span className="tag" style={{
                      background: `${section.color}10`, color: section.color,
                      fontSize: '0.62rem', padding: '2px 8px',
                    }}>
                      {section.duration}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {section.items.map((item, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.12 + j * 0.06 }}
                        style={{
                          padding: '3px 10px', borderRadius: 6,
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontSize: '0.75rem', color: '#94a3b8',
                        }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Learning Goals + Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 320, flexShrink: 0 }}
        >
          {/* Total duration */}
          <motion.div
            className="glass-card info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            <motion.div
              style={{
                fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ~50 мин
            </motion.div>
            <p style={{ fontSize: '0.78rem', color: '#64748b', marginTop: 2 }}>
              Нийт хугацаа • 16 слайд
            </p>
          </motion.div>

          {/* Learning goals */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ borderTop: '3px solid #10b981' }}
          >
            <div className="card-title success" style={{ marginBottom: 10 }}>
              🎓 Суралцах Зорилгууд
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {learningGoals.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '6px 10px', borderRadius: 8,
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>{g.icon}</span>
                  <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{g.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive note */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ marginTop: 16, textAlign: 'center', borderTop: '3px solid #8b5cf6' }}
          >
            <div style={{ fontSize: '1.3rem', marginBottom: 4 }}>🖱️</div>
            <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
              Интерактив элементүүдийг
              <br />
              дарж туршаарай!
            </p>
            <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 8 }}>
              <span className="key-badge" style={{ fontSize: '0.68rem' }}>← →</span>
              <span className="key-badge" style={{ fontSize: '0.68rem' }}>Space</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
