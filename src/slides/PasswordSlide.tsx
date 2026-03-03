import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

function getStrength(pw: string): { score: number; label: string; color: string; time: string } {
  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (pw.length >= 16) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[a-z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++

  if (score <= 2) return { score: 1, label: 'Маш Сул', color: '#ef4444', time: 'Секундэд' }
  if (score <= 4) return { score: 2, label: 'Сул', color: '#f97316', time: 'Минутанд' }
  if (score <= 5) return { score: 3, label: 'Дунд', color: '#eab308', time: 'Цагуудад' }
  if (score <= 6) return { score: 4, label: 'Хүчтэй', color: '#10b981', time: 'Жилүүдэд' }
  return { score: 5, label: 'Маш Хүчтэй', color: '#06b6d4', time: 'Зуун жилд' }
}

const weakExamples = [
  { pw: 'Password123', time: '< 1 сек' },
  { pw: 'Welcome1', time: '< 1 сек' },
  { pw: 'Qwerty12345', time: '3 сек' },
  { pw: 'Таны нэр + он', time: '5 мин' },
]

const strongRules = [
  { rule: 'Хамгийн багадаа 16 тэмдэгт', icon: '📏' },
  { rule: 'Том/жижиг үсэг холилдсон', icon: '🔤' },
  { rule: 'Тоо, тусгай тэмдэгт орсон', icon: '🔢' },
  { rule: 'Хувийн мэдээлэл ороогүй', icon: '🚫' },
  { rule: 'Account бүрт өөр өөр', icon: '🔑' },
]

const crackTimes = [
  { length: '6 тэмдэгт', lower: '< 1 сек', mixed: '10 мин', all: '5 цаг', color: '#ef4444' },
  { length: '8 тэмдэгт', lower: '5 мин', mixed: '8 цаг', all: '2 сар', color: '#f97316' },
  { length: '12 тэмдэгт', lower: '3 жил', mixed: '200 жил', all: '34K жил', color: '#eab308' },
  { length: '16 тэмдэгт', lower: '100K жил', mixed: '2М жил', all: '92 тэрбум жил', color: '#10b981' },
]

export default function PasswordSlide() {
  const [testPw, setTestPw] = useState('')
  const strength = useMemo(() => getStrength(testPw), [testPw])

  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-blue"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Password-ийн Аюулгүй Байдал
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Сул эсвэл давтагдсан password нь халдлагын <span className="highlight">81%</span>-д шалтгаан болдог
      </motion.p>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left column */}
        <div style={{ flex: 1 }}>
          {/* Interactive password tester */}
          <motion.div
            className="glass-card info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title info">🔐 Password Шалгагч</div>
            <input
              type="text"
              value={testPw}
              onChange={e => setTestPw(e.target.value)}
              placeholder="Password оруулж шалгах..."
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                color: '#f1f5f9',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                outline: 'none',
                marginBottom: 10,
              }}
            />
            {testPw && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 6 }}>
                  {[1, 2, 3, 4, 5].map(level => (
                    <motion.div
                      key={level}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      style={{
                        flex: 1, height: 6, borderRadius: 3,
                        background: level <= strength.score ? strength.color : 'rgba(255,255,255,0.08)',
                        transformOrigin: 'left', transition: 'background 0.3s',
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: strength.color }}>
                    {strength.label}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    Эвдэх хугацаа: <strong style={{ color: strength.color }}>{strength.time}</strong>
                  </span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Crack time table */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ borderTop: '3px solid #f97316' }}
          >
            <div className="card-title warning">⏱️ Эвдэх Хугацааны Харьцуулалт</div>
            <div style={{ marginTop: 10 }}>
              {/* Header */}
              <div style={{
                display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr',
                gap: 8, marginBottom: 6,
              }}>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700 }}>Урт</span>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textAlign: 'center' }}>Жижиг үсэг</span>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textAlign: 'center' }}>+Том үсэг</span>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: 700, textAlign: 'center' }}>+Тоо+Тэмдэгт</span>
              </div>
              {crackTimes.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  style={{
                    display: 'grid', gridTemplateColumns: '80px 1fr 1fr 1fr',
                    gap: 8, padding: '6px 0',
                    borderBottom: i < crackTimes.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: c.color, fontFamily: 'var(--font-mono)' }}>
                    {c.length}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#fca5a5', textAlign: 'center' }}>{c.lower}</span>
                  <span style={{ fontSize: '0.72rem', color: '#fbbf24', textAlign: 'center' }}>{c.mixed}</span>
                  <span style={{ fontSize: '0.72rem', color: '#34d399', textAlign: 'center' }}>{c.all}</span>
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
          style={{ width: 340, flexShrink: 0 }}
        >
          {/* Strong rules */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title success">✅ ХҮЧТЭЙ Password Шаардлага</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {strongRules.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '4px 8px', borderRadius: 6,
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>{r.icon}</span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>{r.rule}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Weak examples */}
          <motion.div
            className="glass-card danger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title danger">❌ СУЛ Password</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {weakExamples.map((ex, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '5px 10px', borderRadius: 6,
                    background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.12)',
                  }}
                >
                  <code style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#fca5a5',
                  }}>
                    {ex.pw}
                  </code>
                  <span style={{ fontSize: '0.68rem', color: '#ef4444', fontWeight: 600 }}>{ex.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Passphrase method */}
          <motion.div
            className="glass-card info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="card-title info">💡 Passphrase Арга</div>
            <p className="card-text" style={{ marginTop: 6, fontSize: '0.75rem' }}>
              Санахад хялбар өгүүлбэр бүтээж хөрвүүлэх:
            </p>
            <div style={{
              marginTop: 8, padding: 10,
              background: 'rgba(59,130,246,0.08)', borderRadius: 8,
              border: '1px solid rgba(59,130,246,0.15)', textAlign: 'center',
            }}>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                "Би өглөө 3 аяга Кофе уудаг!"
              </div>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ fontSize: '0.72rem', color: '#64748b', margin: '4px 0' }}
              >
                ↓
              </motion.div>
              <motion.div
                style={{
                  fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-mono)',
                  background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Bo3аKу!
              </motion.div>
            </div>

            {/* Password manager recommendation */}
            <div style={{
              marginTop: 10, padding: '8px 10px', borderRadius: 6,
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                🔐 Password Manager ашиглаарай!
              </span>
              <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: 2 }}>
                Bitwarden, 1Password, KeePass
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
