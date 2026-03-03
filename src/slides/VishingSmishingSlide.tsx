import { motion } from 'framer-motion'

const vishingSteps = [
  'Хуурамч caller ID ашиглан залгах',
  'Банк, засгийн газар мэт танилцуулах',
  'Яаралтай нөхцөл байдал үүсгэх',
  'Нууц мэдээлэл авах оролдлого',
]

const smishingExamples = [
  { msg: '"Таны банкны данс блоклогдлоо. Шалгахад энд дарна уу"', type: 'Банк' },
  { msg: '"Таны илгээмж хүргэгдэхгүй байна. Мэдээллээ шинэчлэнэ үү"', type: 'Хүргэлт' },
  { msg: '"Та урамшуулал хожлоо! 24 цагийн дотор авна уу"', type: 'Урамшуулал' },
]

const defenseRules = [
  { text: 'Банк/байгууллага ХЭЗЭЭ Ч нууц мэдээлэл утсаар асуудаггүй', icon: '🏦', color: '#3b82f6' },
  { text: 'SMS дахь link дарахгүй, app/website руу шууд орох', icon: '📱', color: '#10b981' },
  { text: 'Таних дугаар биш бол хариулахдаа болгоомжтой байх', icon: '📞', color: '#f97316' },
  { text: 'Яаралтай мэдэгдэлд сандрахгүй, шалгах', icon: '🧘', color: '#8b5cf6' },
]

export default function VishingSmishingSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-purple"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Утас болон SMS-ээр Халдах
      </motion.h1>

      <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
        {/* Vishing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
          }}>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, #ef4444, #f97316)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}
            >
              📞
            </motion.div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f87171' }}>Vishing</h2>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Утасны Phishing</span>
            </div>
          </div>

          {/* Phone mockup */}
          <motion.div
            className="glass-card danger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{
              background: '#1a1a2e', borderRadius: 16, padding: 16,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ width: 60, height: 5, background: '#333', borderRadius: 3, margin: '0 auto 12px' }} />
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                    margin: '0 auto 6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.3rem', boxShadow: '0 0 20px rgba(239,68,68,0.4)',
                  }}
                >
                  ☎️
                </motion.div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>Microsoft Security Center</div>
                <div style={{ color: '#64748b', fontSize: '0.72rem' }}>Incoming call...</div>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: 10,
                fontSize: '0.72rem', color: '#94a3b8', fontStyle: 'italic', lineHeight: 1.4,
              }}>
                "Таны компьютерээс гадаад руу malware илгээж байгааг илрүүллээ.
                Зайнаас нэвтэрч устгах хэрэгтэй..."
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>📱</div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>📵</div>
              </div>
            </div>
            <div style={{ marginTop: 10, fontSize: '0.72rem', color: '#94a3b8' }}>
              <strong style={{ color: '#f87171' }}>Алхмууд:</strong>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 4 }}>
                {vishingSteps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                  >
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', fontWeight: 800, color: '#f87171', flexShrink: 0,
                    }}>
                      {i + 1}
                    </span>
                    <span style={{ fontSize: '0.72rem' }}>{s}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Smishing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ flex: 1 }}
        >
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
          }}>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem',
              }}
            >
              💬
            </motion.div>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#a78bfa' }}>Smishing</h2>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>SMS Phishing</span>
            </div>
          </div>

          {/* SMS mockup with multiple messages */}
          <motion.div
            className="glass-card purple"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{
              background: '#1a1a2e', borderRadius: 16, padding: 16,
            }}>
              <div style={{ width: 60, height: 5, background: '#333', borderRadius: 3, margin: '0 auto 12px' }} />
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <div style={{ color: '#64748b', fontSize: '0.72rem' }}>SMS from</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.85rem' }}>+976 8800 XXXX</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {smishingExamples.map((ex, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, x: -10 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.15 }}
                    style={{
                      background: 'rgba(139,92,246,0.12)',
                      borderRadius: '12px 12px 12px 4px',
                      padding: 10,
                      fontSize: '0.72rem', color: '#e2e8f0',
                      lineHeight: 1.4,
                      border: '1px solid rgba(139,92,246,0.15)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <span style={{ flex: 1 }}>{ex.msg}</span>
                      <span className="tag" style={{
                        background: 'rgba(139,92,246,0.2)', color: '#a78bfa',
                        fontSize: '0.58rem', flexShrink: 0, marginLeft: 6,
                      }}>
                        {ex.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div style={{
              marginTop: 10, padding: '6px 10px',
              background: 'rgba(239,68,68,0.1)', borderRadius: 6,
              border: '1px solid rgba(239,68,68,0.2)',
              fontSize: '0.72rem', color: '#f87171', fontWeight: 600, textAlign: 'center',
            }}>
              ⚠️ Бүх link нь credential хулгайлах сайт руу аваачна
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Defense rules */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 280, flexShrink: 0 }}
        >
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title success">🛡️ Хамгаалах Дүрэм</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              {defenseRules.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '6px 8px', borderRadius: 8,
                  }}
                >
                  <span style={{
                    width: 30, height: 30, borderRadius: 8,
                    background: `${r.color}15`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', flexShrink: 0,
                  }}>{r.icon}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>{r.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Warning signs */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ borderTop: '3px solid #f97316' }}
          >
            <div className="card-title warning">🔍 Анхаарах Шинжүүд</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 8 }}>
              {[
                'Богиносгосон URL (bit.ly гэх мэт)',
                'Санамсаргүй илгээмжийн мэдэгдэл',
                'Яаралтай байдал үүсгэсэн мессеж',
                'Хувийн мэдээлэл асуусан',
                'Дугаар таних биш',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.06 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '3px 0', fontSize: '0.75rem', color: '#fbbf24',
                  }}
                >
                  <span style={{ color: '#f97316', fontSize: '0.7rem' }}>●</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick stat */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ marginTop: 14, textAlign: 'center' }}
          >
            <motion.div
              style={{
                fontSize: '2rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                background: 'linear-gradient(135deg, #f87171, #a78bfa)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +700%
            </motion.div>
            <p style={{ fontSize: '0.72rem', color: '#64748b' }}>
              Smishing халдлага 2021-2023 өссөн
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
