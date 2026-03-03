import { motion } from 'framer-motion'

const threats = [
  {
    title: 'Улс Төрийн Халдагчид',
    desc: 'Маш өндөр чадвартай, санхүүжилт сайтай. Тагнуулын зорилгоор төрийн системд чиглэсэн.',
    examples: 'APT29, APT28, Lazarus Group',
    color: '#ef4444',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.1), rgba(239,68,68,0.02))',
    risk: 95,
  },
  {
    title: 'Кибер Гэмт Хэрэгтнүүд',
    desc: 'Санхүүгийн ашиг сонирхолтой. Ransomware болон мэдээлэл хулгайлах.',
    examples: 'Dark web-д зардаг',
    color: '#3b82f6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.02))',
    risk: 85,
  },
  {
    title: 'Hacktivists',
    desc: 'Улс төр, үзэл суртлын зорилготой. Вэбсайт гажуудуулах, мэдээлэл задруулах.',
    examples: 'DDoS халдлага',
    color: '#8b5cf6',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.02))',
    risk: 60,
  },
  {
    title: 'Дотоод Аюул (Insider)',
    desc: 'Одоогийн болон хуучин ажилтнууд. Гэрээт ажилтнууд.',
    examples: 'Илрүүлэхэд хамгийн хэцүү',
    color: '#f97316',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(249,115,22,0.02))',
    risk: 75,
  },
]

const attackStats = [
  { label: 'Өдөрт халдлага', value: '2,200+', color: '#ef4444' },
  { label: 'Шинэ malware/өдөр', value: '560K', color: '#8b5cf6' },
  { label: 'Phishing сайт/сар', value: '1.35М', color: '#3b82f6' },
]

const recentAttacks = [
  { year: '2024', event: 'MOVEit - 2,600+ байгууллага', color: '#ef4444' },
  { year: '2023', event: 'MGM Resorts - $100М хохирол', color: '#f97316' },
  { year: '2022', event: 'Costa Rica - улс ransomware', color: '#8b5cf6' },
  { year: '2021', event: 'Log4Shell - дэлхийд нөлөөлсөн', color: '#3b82f6' },
]

export default function ThreatLandscapeSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Аюул Заналын Орчин
      </motion.h1>
      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Кибер аюул заналын төрлүүд
      </motion.p>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left: Threat cards */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {threats.map((t, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 30px ${t.color}20`,
                }}
                style={{
                  background: t.gradient,
                  borderColor: `${t.color}30`,
                  cursor: 'default',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'center',
                  padding: '12px 16px',
                }}
              >
                <motion.div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: '50%',
                    border: `2px solid ${t.color}40`,
                    background: `${t.color}10`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.color,
                    flexShrink: 0,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {t.icon}
                </motion.div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: t.color }}>
                      {t.title}
                    </h3>
                    <span className="tag" style={{ background: `${t.color}15`, color: t.color, fontSize: '0.62rem' }}>
                      {t.examples}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
                    {t.desc}
                  </p>
                </div>
                {/* Risk bar */}
                <div style={{ width: 60, flexShrink: 0 }}>
                  <div style={{ fontSize: '0.65rem', color: '#64748b', textAlign: 'center', marginBottom: 3 }}>Эрсдэл</div>
                  <div style={{
                    height: 6, borderRadius: 3,
                    background: 'rgba(255,255,255,0.05)',
                    overflow: 'hidden',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${t.risk}%` }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                      style={{ height: '100%', borderRadius: 3, background: t.color }}
                    />
                  </div>
                  <div style={{ fontSize: '0.65rem', color: t.color, textAlign: 'center', marginTop: 2, fontWeight: 700 }}>
                    {t.risk}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Stats & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 300, flexShrink: 0 }}
        >
          {/* Global stats */}
          <div className="glass-card info" style={{ marginBottom: 14 }}>
            <div className="card-title info">📊 Дэлхийн Статистик</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              {attackStats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{s.label}</span>
                  <motion.span
                    style={{
                      fontSize: '1.1rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                      color: s.color,
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  >
                    {s.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent timeline */}
          <div className="glass-card" style={{ borderTop: '3px solid #ef4444' }}>
            <div className="card-title danger">🕐 Сүүлийн Жилүүдийн Халдлага</div>
            <div style={{ marginTop: 10, position: 'relative', paddingLeft: 16 }}>
              {/* Timeline line */}
              <div style={{
                position: 'absolute', left: 5, top: 4, bottom: 4, width: 2,
                background: 'linear-gradient(180deg, #ef4444, #3b82f6)',
                borderRadius: 1,
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {recentAttacks.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, position: 'relative' }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute', left: -14,
                        width: 10, height: 10, borderRadius: '50%',
                        background: a.color, border: '2px solid #0a0e1a',
                      }}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 800, color: a.color,
                      fontFamily: 'var(--font-mono)', minWidth: 32,
                    }}>
                      {a.year}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{a.event}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
