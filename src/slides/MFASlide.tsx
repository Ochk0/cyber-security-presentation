import { motion } from 'framer-motion'

const factors = [
  {
    title: 'Мэдэх Зүйл',
    items: 'Password, PIN код, Нууц асуулт',
    icon: '🔑',
    gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
  },
  {
    title: 'Эзэмших Зүйл',
    items: 'Утас, Security Key, Authenticator App',
    icon: '📱',
    gradient: 'linear-gradient(135deg, #059669, #34d399)',
  },
  {
    title: 'Биометрик',
    items: 'Хурууны хээ, Нүүр таних, Нүдний торлог',
    icon: '👤',
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  },
]

const methods = [
  { name: 'Hardware Security Keys (FIDO2)', level: 'Хамгийн аюулгүй', color: '#10b981', width: 100 },
  { name: 'Authenticator Apps (Google, Microsoft)', level: 'Аюулгүй', color: '#3b82f6', width: 82 },
  { name: 'Push Notifications', level: 'Аюулгүй багатай', color: '#eab308', width: 65 },
  { name: 'SMS Code', level: 'Муугаас дээр, гэхдээ сул', color: '#f97316', width: 40 },
]

const attacks = [
  { name: 'MFA Fatigue / Push Bombing', desc: 'Password мэдсэн халдагч MFA хүсэлтийг олон удаа илгээж, залхаж зөвшөөрөхийг хүлээнэ', defense: 'Өөрөө хүсээгүй MFA хүсэлтийг ХЭЗЭЭ Ч зөвшөөрөхгүй', example: 'Uber 2022', color: '#ef4444' },
  { name: 'SIM Swapping', desc: 'Утасны компанийг итгүүлж дугаарыг өөрийн SIM-д шилжүүлнэ', defense: 'Authenticator app хэрэглэх. Утасны данстаа PIN нэмэх', example: 'Twitter CEO 2019', color: '#f97316' },
  { name: 'Real-Time Phishing', desc: 'Хуурамч сайт MFA кодыг бодит цагт хулгайлна', defense: 'URL-ийг үргэлж шалгах. Hardware key хэрэглэх', example: 'EvilProxy 2023', color: '#8b5cf6' },
]

export default function MFASlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-green"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Multi-Factor Authentication (MFA)
      </motion.h1>
      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        MFA нь хоёр буюу түүнээс дээш баталгаажуулалтын арга шаарддаг
      </motion.p>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* Factor cards */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'stretch' }}>
            {factors.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{
                  flex: 1, borderRadius: 12, overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{
                  background: f.gradient, padding: '16px 10px', textAlign: 'center',
                }}>
                  <motion.div
                    style={{ fontSize: '1.8rem', marginBottom: 4 }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {f.icon}
                  </motion.div>
                  <div style={{ fontWeight: 800, fontSize: '0.82rem', color: 'white' }}>{f.title}</div>
                </div>
                <div style={{
                  padding: '10px', background: 'rgba(255,255,255,0.02)',
                  textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4,
                }}>
                  {f.items}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 99.9% stat */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            <motion.div
              style={{
                fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                background: 'linear-gradient(135deg, #34d399, #06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              99.9%
            </motion.div>
            <p className="card-text" style={{ fontSize: '0.82rem' }}>
              MFA нь автомат халдлагыг хаадаг
            </p>
          </motion.div>

          {/* MFA Methods ranking */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>
              MFA Аргууд (Аюулгүй байдлаар)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {methods.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <span style={{
                    width: 24, height: 24, borderRadius: '50%', background: `${m.color}20`,
                    border: `2px solid ${m.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.72rem', fontWeight: 800, color: m.color, fontFamily: 'var(--font-mono)', flexShrink: 0,
                  }}>{i + 1}</span>
                  <div style={{ flex: 1, fontSize: '0.82rem', fontWeight: 600, color: '#e2e8f0' }}>{m.name}</div>
                  <span className="tag" style={{ background: `${m.color}15`, color: m.color, fontSize: '0.65rem' }}>{m.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: MFA Attacks */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 380, flexShrink: 0 }}
        >
          <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f87171', marginBottom: 10 }}>
            ⚠️ MFA-г Тойрох Халдлагууд
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {attacks.map((a, i) => (
              <motion.div
                key={i}
                className="glass-card danger"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                style={{
                  padding: '14px 16px',
                  borderColor: `${a.color}30`,
                  background: `${a.color}05`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: a.color, flex: 1 }}>
                    {a.name}
                  </h4>
                  <span className="tag" style={{ background: `${a.color}15`, color: a.color, fontSize: '0.62rem' }}>
                    {a.example}
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4, marginBottom: 6 }}>
                  {a.desc}
                </p>
                <div style={{
                  padding: '5px 8px', borderRadius: 6,
                  background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)',
                  fontSize: '0.72rem', color: '#10b981', fontWeight: 600,
                }}>
                  ✅ {a.defense}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
