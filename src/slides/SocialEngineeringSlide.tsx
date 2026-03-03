import { motion } from 'framer-motion'
import { useState } from 'react'

const attacks = [
  {
    title: 'Pretexting (Хуурамч Нөхцөл Байдал)',
    desc: 'Халдагч мэдээлэл авахын тулд зохиомол түүх бүтээнэ.',
    example: '"Сайн байна уу, би IT help desk-ийн Болд. Системийг шинэчилж байгаа учраас таны нэвтрэх мэдээллийг баталгаажуулах хэрэгтэй байна."',
    icon: '🎭',
    color: '#3b82f6',
    response: 'IT хэлтэст мэдэгддэг дугаараар утасдаж шалгаарай!',
  },
  {
    title: 'Baiting (Өгөөш)',
    desc: 'Хортой төхөөрөмжийг олдохоор орхих.',
    example: '"Ажилтнуудын Цалин 2024" гэсэн шошготой USB зогсоолд орхих.',
    icon: '🪤',
    color: '#f97316',
    response: 'Үл мэдэгдэх USB-г хэзээ ч залгахгүй!',
  },
  {
    title: 'Tailgating (Хойноос Орох)',
    desc: 'Зөвшөөрөлтэй хүний хойноос хамгаалалттай бүсэд орох.',
    example: '"Хаалгаа барьж өгөөч, картаа мартчихлаа, дарга дээр хурал хоцорчихлоо."',
    icon: '🚪',
    color: '#8b5cf6',
    response: 'Хаалгаа барихгүй, өөрсдийн картаар ороорой!',
  },
]

const psychTactics = [
  { name: 'Яаралтай байдал', desc: '"Одоо хийхгүй бол данс хаагдана!"', icon: '⏰', color: '#ef4444' },
  { name: 'Эрх мэдэл', desc: '"Захирал шууд хийхийг зааварчилсан"', icon: '👔', color: '#f97316' },
  { name: 'Сэтгэл хөдлөл', desc: '"Та хүнд тусалж чадна"', icon: '❤️', color: '#ec4899' },
  { name: 'Итгэлцэл', desc: '"Би хамт ажилладаг Бат"', icon: '🤝', color: '#3b82f6' },
]

const stats = [
  { value: '98%', label: 'халдлага social engineering ашигладаг', color: '#ef4444' },
  { value: '12с', label: 'phishing email нээх дундаж хугацаа', color: '#f97316' },
  { value: '$4.1М', label: 'BEC (Business Email Compromise) хохирол', color: '#8b5cf6' },
]

export default function SocialEngineeringSlide() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-purple"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Social Engineering: Хүний Итгэлийг Ашиглах
      </motion.h1>
      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Хүний тусламж үзүүлэх хүсэл, итгэлийг ашигладаг
      </motion.p>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left: Attack types */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {attacks.map((attack, i) => (
              <motion.div
                key={i}
                className="glass-card"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.12 }}
                whileHover={{ borderColor: `${attack.color}50` }}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  borderLeft: `3px solid ${attack.color}`,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  padding: '14px 16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <motion.span
                    style={{ fontSize: '1.8rem' }}
                    animate={active === i ? { scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {attack.icon}
                  </motion.span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: attack.color, marginBottom: 3 }}>
                      {attack.title}
                    </h3>
                    <p className="card-text" style={{ fontSize: '0.78rem' }}>{attack.desc}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: active === i ? 180 : 0 }}
                    style={{ color: '#64748b', fontSize: '1.2rem' }}
                  >
                    ▾
                  </motion.span>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: active === i ? 'auto' : 0,
                    opacity: active === i ? 1 : 0,
                    marginTop: active === i ? 12 : 0,
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{
                    background: `${attack.color}10`,
                    borderRadius: 10,
                    padding: 14,
                    borderLeft: `3px solid ${attack.color}40`,
                  }}>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: 8, fontStyle: 'italic' }}>
                      "{attack.example}"
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '6px 12px', background: 'rgba(16,185,129,0.1)',
                      borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)',
                    }}>
                      <span>✅</span>
                      <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                        {attack.response}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Psychology + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 340, flexShrink: 0 }}
        >
          {/* Stats */}
          <div className="glass-card" style={{ marginBottom: 14, borderTop: '3px solid #ef4444' }}>
            <div className="card-title danger">📊 Тоон Мэдээлэл</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <motion.span
                    style={{
                      fontSize: '1.3rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                      color: s.color, minWidth: 60,
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {s.value}
                  </motion.span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Psychology */}
          <div className="glass-card" style={{ borderTop: '3px solid #8b5cf6' }}>
            <div className="card-title purple">🧠 Сэтгэл Зүйн Арга</div>
            <p style={{ fontSize: '0.72rem', color: '#64748b', marginTop: 4, marginBottom: 10 }}>
              Халдагчид эдгээр сэтгэл зүйн аргыг ашигладаг:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {psychTactics.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ x: 4, background: `${t.color}08` }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 10px', borderRadius: 8,
                    border: `1px solid ${t.color}15`,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: `${t.color}15`, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.95rem', flexShrink: 0,
                  }}>{t.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: t.color }}>{t.name}</div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', fontStyle: 'italic' }}>{t.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
