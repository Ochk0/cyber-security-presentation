import { motion } from 'framer-motion'

const urls = [
  { url: 'https://www.agency.gov/login', real: true, label: 'Жинхэнэ' },
  { url: 'https://www.agency-gov.com/login', real: false, label: 'Сэжигтэй', note: 'Зураас (-) ашигласан' },
  { url: 'https://agency.gov.bad-site.com/login', real: false, label: 'Сэжигтэй', note: 'Өөр домэйн' },
  { url: 'https://www.agenccy.gov/login', real: false, label: 'Сэжигтэй', note: 'Typosquatting' },
]

const habits = [
  { text: 'Browser, plugin-ийг шинэчилж байх', icon: '🔄' },
  { text: 'Ажлын сүлжээг зөвхөн ажлын зорилгоор', icon: '💼' },
  { text: 'Нийтийн WiFi-д аль болох холбогдохгүй', icon: '📶' },
  { text: 'Browser-т password хадгалахгүй', icon: '🔐' },
  { text: 'Browsing history тогтмол цэвэрлэх', icon: '🧹' },
]

const signs = [
  { text: 'HTTPS анхааруулга', icon: '🔓' },
  { text: 'Олон pop-up, redirect', icon: '💥' },
  { text: 'Санамсаргүй татах хүсэлт', icon: '⬇️' },
  { text: '"Таны компьютер Хортой!" гэх мэт', icon: '⚠️' },
]

const browserTips = [
  { label: 'HTTPS шалгах', desc: 'Түгжээний дүрс байгаа эсэх', icon: '🔒', color: '#10b981' },
  { label: 'Ad blocker', desc: 'uBlock Origin суулгах', icon: '🚫', color: '#3b82f6' },
  { label: 'Incognito горим', desc: 'Хувийн хайлтад ашиглах', icon: '👤', color: '#8b5cf6' },
  { label: 'VPN ашиглах', desc: 'Нийтийн сүлжээнд заавал', icon: '🌐', color: '#f97316' },
]

export default function SafeInternetSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-blue"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Аюулгүй Интернет Хэрэглээ
      </motion.h1>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* URL Check */}
          <motion.div
            className="glass-card info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title info">🔍 URL Шалгалт</div>
            <p className="card-text" style={{ marginBottom: 10, fontSize: '0.78rem' }}>
              Нэвтрэх эрх оруулахаас өмнө бүтэн URL шалгах:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {urls.map((u, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 12px',
                    borderRadius: 8,
                    background: u.real ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                    border: `1px solid ${u.real ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}`,
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>
                    {u.real ? '✅' : '⚠️'}
                  </span>
                  <code style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: u.real ? '#34d399' : '#fca5a5',
                    flex: 1,
                  }}>
                    {u.url}
                  </code>
                  {u.note && (
                    <span style={{ fontSize: '0.65rem', color: '#f87171', fontStyle: 'italic' }}>
                      {u.note}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Browser tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#60a5fa', marginBottom: 10 }}>
              🌐 Browser Аюулгүй Байдал
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {browserTips.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ y: -3, borderColor: `${t.color}40` }}
                  style={{
                    padding: '10px 12px', borderRadius: 10,
                    background: `${t.color}05`,
                    border: `1px solid ${t.color}15`,
                    display: 'flex', alignItems: 'center', gap: 10,
                    transition: 'all 0.2s',
                  }}
                >
                  <motion.div
                    style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${t.color}15`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {t.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: t.color }}>{t.label}</div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b' }}>{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          style={{ width: 320, flexShrink: 0 }}
        >
          {/* HTTPS visual */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginBottom: 14, borderTop: '3px solid #10b981' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 6 }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ fontSize: '1.8rem' }}
              >
                🔒
              </motion.div>
              <span style={{
                fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                color: '#10b981',
              }}>
                HTTPS
              </span>
              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>vs</span>
              <span style={{
                fontSize: '1.1rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                color: '#ef4444', textDecoration: 'line-through',
              }}>
                HTTP
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              HTTPS = шифрлэгдсэн холболт
              <br />
              HTTP = нууц үг задрах боломжтой
            </p>
          </motion.div>

          {/* Safe habits */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ borderTop: '3px solid #10b981', marginBottom: 14 }}
          >
            <div className="card-title success">🛡️ Аюулгүй Зуршил</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {habits.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.06 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '3px 0',
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>{h.icon}</span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{h.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Danger signs */}
          <motion.div
            className="glass-card danger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="card-title danger">🚩 Хортой Сайтын Шинжүүд</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {signs.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.06 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '3px 0',
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>{s.icon}</span>
                  <span style={{ fontSize: '0.78rem', color: '#fca5a5' }}>{s.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
