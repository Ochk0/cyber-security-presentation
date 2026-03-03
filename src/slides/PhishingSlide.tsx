import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const pipeline = [
  { label: 'Судалгаа', color: '#1e3a5f', num: 1 },
  { label: 'Email Бэлтгэх', color: '#2563eb', num: 2 },
  { label: 'Илгээх', color: '#0284c7', num: 3 },
  { label: 'Хохирогч дарна', color: '#d97706', num: 4 },
  { label: 'Эвдрэл!', color: '#dc2626', num: 5 },
]

const phishingTopics = [
  'IT-ээс password шинэчлэх хүсэлт',
  'Яаралтай аюулгүй байдлын анхааруулга',
  'HR-ээс тэтгэмж/бодлогын шинэчлэл',
  'Удирдлагаас яаралтай хүсэлт (CEO fraud)',
]

/* ── SVG eye icons exactly matching the real khanbank page ── */
const EyeOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1854b" strokeWidth="2" width="20" height="20">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const EyeClosed = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1854b" strokeWidth="2" width="20" height="20">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
)

export default function PhishingSlide() {
  const [showDemo, setShowDemo] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [captured, setCaptured] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const isFormValid = username.trim() !== '' && password.trim() !== ''

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (isFormValid) {
      setCaptured(true)
      setShowAlert(true)
    }
  }

  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-red"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Phishing: №1 Аюул Занал
      </motion.h1>

      <AnimatePresence mode="wait">
        {!showDemo ? (
          <motion.div
            key="info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <motion.p className="slide-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Phishing Халдлагын Үе Шатууд
            </motion.p>

            {/* Pipeline */}
            <div className="pipeline" style={{ maxWidth: 800, marginBottom: 28 }}>
              {pipeline.map((step, i) => (
                <motion.div key={i} style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}>
                  <motion.div
                    className="pipeline-step"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                      boxShadow: `0 4px 20px ${step.color}40`,
                      flex: 1,
                    }}
                  >
                    <div className="step-num">{step.num}</div>
                    <div className="step-text">{step.label}</div>
                  </motion.div>
                  {i < pipeline.length - 1 && (
                    <motion.div
                      className="pipeline-arrow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      style={{ color: i >= 3 ? '#ef4444' : '#64748b' }}
                    >
                      ▸
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#60a5fa', marginBottom: 10 }}>
                Phishing-ийн Түгээмэл Сэдэв
              </h3>
              <div className="grid-2" style={{ gap: 10, maxWidth: 700 }}>
                {phishingTopics.map((topic, i) => (
                  <motion.div
                    key={i}
                    className="glass-card"
                    style={{ padding: '12px 16px', fontSize: '0.88rem', color: '#94a3b8' }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{ borderColor: '#ef444440' }}
                  >
                    <span style={{ color: '#ef4444', marginRight: 8 }}>›</span>
                    {topic}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Demo button */}
            <motion.button
              onClick={() => setShowDemo(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239,68,68,0.3)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                marginTop: 28,
                padding: '14px 36px',
                borderRadius: 12,
                border: '1px solid rgba(239,68,68,0.4)',
                background: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))',
                color: '#f87171',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.5px',
              }}
            >
              🎯 Phishing Demo Үзэх →
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="demo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              display: 'flex',
              gap: 32,
              alignItems: 'flex-start',
              marginTop: 8,
            }}
          >
            {/* ────────────────────────────────────────────
                EXACT Khan Bank Clone
                Pixel-perfect replica of the real login page
            ──────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                width: 460,
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 12,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* ── Full-page wrapper matching khanbank bg ── */}
              <div style={{
                background: '#fbfbfb',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* ── Header bar with language ── */}
                <div style={{
                  background: '#fff',
                  padding: '10px 24px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  <div style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    borderRadius: 4,
                    color: '#04715e',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-sans)',
                  }}>
                    🇬🇧 EN
                  </div>
                </div>

                {/* ── Login card ── */}
                <div style={{
                  padding: '24px 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    background: 'white',
                    borderRadius: 15,
                    boxShadow: '0 10px 40px rgba(60, 120, 187, 0.15)',
                    padding: '40px 42px',
                    width: '100%',
                    maxWidth: 400,
                    margin: '0 20px',
                  }}>
                    {/* ── Logo ── */}
                    <div style={{ textAlign: 'center', marginBottom: 32 }}>
                      <img
                        src="https://e.khanbank.com/images/svg/signin/logo-mn.svg"
                        alt="Khan Bank"
                        style={{ height: 52 }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling!.removeAttribute('style')
                        }}
                      />
                      {/* Fallback if external image fails */}
                      <div style={{ display: 'none', marginBottom: 8 }}>
                        <div style={{
                          width: 52, height: 52, background: '#04715e', borderRadius: 8,
                          margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'white', fontWeight: 900, fontSize: '1.3rem',
                        }}>KB</div>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {!captured ? (
                        <motion.form
                          key="form"
                          onSubmit={handleLogin}
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                        >
                          {/* Username */}
                          <div style={{ marginBottom: 20, position: 'relative' }}>
                            <label style={{
                              display: 'block', marginBottom: 6, color: '#606060',
                              fontSize: '0.72rem', fontWeight: 500,
                            }}>
                              Нэвтрэх нэр / Username
                            </label>
                            <input
                              type="text"
                              value={username}
                              onChange={e => setUsername(e.target.value)}
                              placeholder="Нэвтрэх нэр"
                              style={{
                                width: '100%', padding: '12px 14px', border: '1px solid #e5e9ec',
                                borderRadius: 8, fontSize: '0.88rem', transition: 'all 0.3s',
                                outline: 'none', fontFamily: 'var(--font-sans)', color: '#333',
                                background: '#fff',
                              }}
                              onFocus={e => { e.target.style.borderColor = '#04715e'; e.target.style.boxShadow = '0 0 0 3px rgba(4,113,94,0.1)' }}
                              onBlur={e => { e.target.style.borderColor = '#e5e9ec'; e.target.style.boxShadow = 'none' }}
                            />
                          </div>

                          {/* Password */}
                          <div style={{ marginBottom: 20, position: 'relative' }}>
                            <label style={{
                              display: 'block', marginBottom: 6, color: '#606060',
                              fontSize: '0.72rem', fontWeight: 500,
                            }}>
                              Нууц үг / Password
                            </label>
                            <div style={{ position: 'relative' }}>
                              <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Нууц үг"
                                style={{
                                  width: '100%', padding: '12px 42px 12px 14px', border: '1px solid #e5e9ec',
                                  borderRadius: 8, fontSize: '0.88rem', transition: 'all 0.3s',
                                  outline: 'none', fontFamily: 'var(--font-sans)', color: '#333',
                                  background: '#fff',
                                }}
                                onFocus={e => { e.target.style.borderColor = '#04715e'; e.target.style.boxShadow = '0 0 0 3px rgba(4,113,94,0.1)' }}
                                onBlur={e => { e.target.style.borderColor = '#e5e9ec'; e.target.style.boxShadow = 'none' }}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                                  background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}
                              >
                                {showPassword ? <EyeClosed /> : <EyeOpen />}
                              </button>
                            </div>
                          </div>

                          {/* Remember & Forgot */}
                          <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            marginBottom: 20, fontSize: '0.78rem',
                          }}>
                            <label style={{
                              display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', color: '#606060',
                            }}>
                              <input type="checkbox" style={{ width: 16, height: 16, accentColor: '#04715e' }} />
                              <span>Сануулах</span>
                            </label>
                            <a href="#" onClick={e => e.preventDefault()} style={{
                              color: '#04715e', textDecoration: 'none', fontSize: '0.72rem', fontWeight: 500,
                            }}>
                              Нууц үг сэргээх
                            </a>
                          </div>

                          {/* Login Button */}
                          <button
                            type="submit"
                            disabled={!isFormValid}
                            style={{
                              width: '100%', padding: '14px', border: 'none', borderRadius: 15,
                              fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase',
                              cursor: isFormValid ? 'pointer' : 'not-allowed', fontFamily: 'var(--font-sans)',
                              background: isFormValid ? '#04715e' : '#c4c2cd', color: 'white',
                              transition: 'all 0.3s', marginBottom: 16, letterSpacing: '0.5px',
                            }}
                          >
                            Нэвтрэх / Login
                          </button>

                          {/* Register */}
                          <a href="#" onClick={e => e.preventDefault()} style={{
                            display: 'block', textAlign: 'center', color: '#04715e',
                            textDecoration: 'none', fontWeight: 600, fontSize: '0.78rem',
                            padding: '10px', marginBottom: 16,
                          }}>
                            БҮРТГҮҮЛЭХ / REGISTER
                          </a>

                          {/* Corp */}
                          <div style={{
                            textAlign: 'center', fontSize: '0.72rem', color: '#606060', lineHeight: 1.6,
                          }}>
                            Байгууллагын систем руу нэвтрэх бол{' '}
                            <a href="#" onClick={e => e.preventDefault()} style={{ color: '#04715e', textDecoration: 'underline' }}>
                              ЭНД
                            </a>{' '}
                            дарна уу.
                          </div>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="captured"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: 'spring' }}
                          style={{ textAlign: 'center', padding: '20px 0' }}
                        >
                          <motion.div
                            animate={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            style={{ fontSize: '3.5rem', marginBottom: 12 }}
                          >
                            🚨
                          </motion.div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#dc2626', marginBottom: 12 }}>
                            МЭДЭЭЛЭЛ ХУЛГАЙЛАГДЛАА!
                          </div>
                          <div style={{
                            background: '#fff3cd', border: '2px solid #ffc107', borderRadius: 8,
                            padding: 14, fontSize: '0.82rem', color: '#856404', textAlign: 'left',
                            fontFamily: 'var(--font-mono)', marginBottom: 12,
                          }}>
                            <div style={{ marginBottom: 4 }}>✅ username: <strong>{username}</strong></div>
                            <div style={{ marginBottom: 4 }}>✅ password: <strong>{password}</strong></div>
                            <div style={{ marginBottom: 4 }}>✅ ip: [logged]</div>
                            <div>✅ device: [collected]</div>
                          </div>
                          <div style={{
                            background: '#d4edda', border: '2px solid #28a745', borderRadius: 8,
                            padding: 12, fontSize: '0.78rem', color: '#155724', textAlign: 'left', lineHeight: 1.6,
                          }}>
                            <strong style={{ display: 'block', marginBottom: 4 }}>🛡️ Protection Tips:</strong>
                            ✓ ALWAYS verify website URLs before logging in<br />
                            ✓ Look for HTTPS and official domain names<br />
                            ✓ Enable two-factor authentication
                          </div>
                          <button
                            onClick={() => { setCaptured(false); setShowAlert(false); setUsername(''); setPassword('') }}
                            style={{
                              marginTop: 14, padding: '10px 24px', borderRadius: 8, border: 'none',
                              background: '#667eea', color: 'white', fontSize: '0.85rem', fontWeight: 600,
                              cursor: 'pointer', fontFamily: 'var(--font-sans)', transition: 'background 0.3s',
                            }}
                          >
                            Дахин оролдох
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Right side: Education panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {/* Reveal alert overlay */}
              <AnimatePresence>
                {showAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="glass-card danger"
                    style={{ borderColor: 'rgba(239,68,68,0.5)', padding: 20 }}
                  >
                    <div style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: 6 }}>⚠️</div>
                    <div style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 800, color: '#f87171', marginBottom: 8 }}>
                      SECURITY AWARENESS ALERT
                    </div>
                    <p className="card-text" style={{ textAlign: 'center', marginBottom: 10 }}>
                      This is a <strong style={{ color: '#f87171' }}>PHISHING EXAMPLE</strong> for educational purposes.
                    </p>
                    <button
                      onClick={() => setShowAlert(false)}
                      style={{
                        width: '100%', padding: '8px', borderRadius: 8, border: 'none',
                        background: 'rgba(239,68,68,0.2)', color: '#fca5a5', fontSize: '0.82rem',
                        fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-sans)',
                      }}
                    >
                      I Understand
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="glass-card danger">
                <div className="card-title danger">🔍 Юу болж байна вэ?</div>
                <p className="card-text">
                  Энэ бол жинхэнэ Хаан Банкны сайт шиг харагдах хуурамч сайт.
                  Нэвтрэх мэдээллээ оруулбал халдагч бүгдийг хулгайлна.
                </p>
              </div>

              <div className="glass-card info">
                <div className="card-title info">🚩 Улаан Тугнууд</div>
                <ul className="styled-list red" style={{ margin: 0 }}>
                  <li>URL шалгаагүй — жинхэнэ <code style={{ color: '#34d399', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>e.khanbank.com</code> биш</li>
                  <li>HTTP ашиглаж байна (HTTPS биш)</li>
                  <li>Домэйн нэр жинхэнэ банкных биш</li>
                  <li>Анхааруулах тэмдэг алга байж болно</li>
                </ul>
              </div>

              <div className="glass-card success">
                <div className="card-title success">✅ Хамгаалалт</div>
                <ul className="styled-list green" style={{ margin: 0 }}>
                  <li>URL-ийг үргэлж нягтлах</li>
                  <li>Bookmark-оос нэвтрэх</li>
                  <li>MFA идэвхжүүлэх</li>
                  <li>Password manager хэрэглэх</li>
                </ul>
              </div>

              <motion.button
                onClick={() => { setShowDemo(false); setCaptured(false); setShowAlert(false); setUsername(''); setPassword('') }}
                whileHover={{ scale: 1.03 }}
                style={{
                  marginTop: 4, padding: '10px 24px', borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                  color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-sans)',
                }}
              >
                ← Буцах
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
