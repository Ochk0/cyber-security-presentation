import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Email Нээхээс Өмнө',
    icon: '📧',
    color: '#3b82f6',
    items: [
      'Илгээгчийн email хаягийг сайтар шалгах',
      'Domain хууран мэхлэлт шалгах (.gov.co vs .gov)',
      'Санамсаргүй хавсралтад сэжиглэх',
      'Яаралтай үйлдэл шаардсан хүсэлтэд анхаарах',
    ],
  },
  {
    title: 'Хавсралт Зохицуулах',
    icon: '📎',
    color: '#f97316',
    items: [
      'Санамсаргүй хавсралт хэзээ ч нээхгүй',
      'Эргэлзвэл утсаар залгаж шалгах',
      '.exe, .zip, .js, macro файлд болгоомжтой',
      'PDF, Office файл ч хортой байж болно',
    ],
  },
  {
    title: 'Link Дарах',
    icon: '🔗',
    color: '#8b5cf6',
    items: [
      'Link дээр хулганаа аваачиж шалгах',
      'Link дарахын оронд URL бичих',
      'Богиносгосон URL-д сэрэмжтэй байх',
    ],
  },
]

const emailAnatomy = [
  { part: 'From:', value: 'IT-Support@g0vernment-portal.com', flag: 'Хуурамч domain - "0" ашигласан', color: '#ef4444' },
  { part: 'Subject:', value: 'ЯАРАЛТАЙ: Таны password 2 цагийн дараа дуусна', flag: 'Яаралтай байдал үүсгэсэн', color: '#f97316' },
  { part: 'Body:', value: '"Эрхэм ажилтан" - Ерөнхий мэндчилгээ', flag: 'Нэрээр хандаагүй', color: '#eab308' },
  { part: 'Link:', value: 'http://govermnet-login.suspicious.com', flag: 'Typosquatting + HTTP', color: '#ef4444' },
]

const phishingStats = [
  { label: 'Phishing email тоо/өдөр', value: '3.4 тэрбум', icon: '📨' },
  { label: 'Phishing бүхий халдлага', value: '36%', icon: '📊' },
  { label: 'Хохирол BEC-ээс', value: '$2.7 тэрбум', icon: '💸' },
]

export default function EmailSecuritySlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-blue"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Email-ийн Аюулгүй Байдал
      </motion.h1>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left: Email anatomy */}
        <div style={{ flex: 1 }}>
          {/* Fake email dissection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 12,
              border: '1px solid rgba(239,68,68,0.3)',
              overflow: 'hidden',
              marginBottom: 16,
            }}
          >
            {/* Email header bar */}
            <div style={{
              padding: '8px 16px',
              background: 'rgba(239,68,68,0.08)',
              borderBottom: '1px solid rgba(239,68,68,0.2)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: 700, padding: '2px 8px', background: 'rgba(239,68,68,0.15)', borderRadius: 4 }}>
                СЭЖИГТЭЙ EMAIL
              </span>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Phishing шинжилгээ</span>
            </div>

            <div style={{ padding: '12px 16px' }}>
              {emailAnatomy.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                    padding: '8px 0',
                    borderBottom: i < emailAnatomy.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span style={{
                    fontSize: '0.72rem', fontWeight: 700, color: '#64748b',
                    minWidth: 55, fontFamily: 'var(--font-mono)',
                  }}>
                    {e.part}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '0.78rem', color: '#e2e8f0',
                      fontFamily: e.part === 'Link:' ? 'var(--font-mono)' : undefined,
                    }}>
                      {e.value}
                    </div>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4,
                      marginTop: 3, padding: '2px 8px', borderRadius: 4,
                      background: `${e.color}10`, border: `1px solid ${e.color}20`,
                    }}>
                      <span style={{ fontSize: '0.65rem' }}>🚩</span>
                      <span style={{ fontSize: '0.68rem', color: e.color, fontWeight: 600 }}>{e.flag}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: 10 }}
          >
            {phishingStats.map((s, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                style={{ flex: 1, textAlign: 'center', padding: '12px 10px' }}
              >
                <span style={{ fontSize: '1.2rem' }}>{s.icon}</span>
                <motion.div
                  style={{
                    fontSize: '1.2rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                    margin: '4px 0',
                  }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {s.value}
                </motion.div>
                <div style={{ fontSize: '0.68rem', color: '#64748b' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Security sections */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ width: 340, flexShrink: 0 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sections.map((section, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ borderColor: `${section.color}40` }}
                style={{ borderTop: `3px solid ${section.color}`, padding: '14px 16px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.1rem' }}>{section.icon}</span>
                  <h3 style={{ fontSize: '0.88rem', fontWeight: 700, color: section.color }}>
                    {section.title}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {section.items.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 + j * 0.05 }}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 6,
                        fontSize: '0.75rem', color: '#94a3b8',
                      }}
                    >
                      <span style={{ color: '#10b981', fontSize: '0.7rem', marginTop: 2 }}>✓</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick tip */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{ marginTop: 12, textAlign: 'center' }}
          >
            <p style={{ fontSize: '0.82rem', fontWeight: 600, color: '#34d399' }}>
              💡 Эргэлзвэл → Утсаар шалгах!
            </p>
            <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 2 }}>
              Өөр сувгаар баталгаажуулах нь хамгийн найдвартай
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
