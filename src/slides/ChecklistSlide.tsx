import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = [
  {
    title: 'Account Аюулгүй Байдал',
    icon: '🔐',
    color: '#3b82f6',
    items: [
      'Бүх account-д хүчтэй, өвөрмөц password',
      'Боломжит бүх account-д MFA идэвхжүүлсэн',
      'Password manager хэрэглэж байгаа',
      'Password бичиж хадгалаагүй, хуваалцаагүй',
    ],
  },
  {
    title: 'Төхөөрөмжийн Аюулгүй Байдал',
    icon: '💻',
    color: '#8b5cf6',
    items: [
      'Бүх төхөөрөмж encrypt хийгдсэн',
      'Автомат дэлгэц түгжээ идэвхтэй',
      'Үйлдлийн систем шинэчлэгдсэн',
      'Зөвхөн батлагдсан программ суусан',
      'Remote wipe боломж идэвхтэй',
    ],
  },
  {
    title: 'Мэдээллийн Хамгаалалт',
    icon: '📁',
    color: '#10b981',
    items: [
      'Мэдээллийн ангилалын түвшинг ойлгосон',
      'Ангиллын дагуу мэдээлэл зохицуулж байгаа',
      'Зөвхөн шаардлагатай мэдээлэлд хандаж байгаа',
      'Нууц материалыг зөв устгаж байгаа',
      'Ажлын мэдээлэл хувийн төхөөрөмжид байхгүй',
    ],
  },
  {
    title: 'Incident Response',
    icon: '🚨',
    color: '#ef4444',
    items: [
      'Incident мэдэгдэх аргыг мэдэж байгаа',
      'IT Security-ийн холбоо барих мэдээллийг мэдэж байгаа',
      'Хариу арга хэмжээний журмыг ойлгож байгаа',
    ],
  },
]

function getGrade(pct: number) {
  if (pct === 100) return { grade: 'A+', color: '#10b981', label: 'Маш Сайн!' }
  if (pct >= 80) return { grade: 'A', color: '#10b981', label: 'Сайн!' }
  if (pct >= 60) return { grade: 'B', color: '#3b82f6', label: 'Дунд' }
  if (pct >= 40) return { grade: 'C', color: '#eab308', label: 'Сайжруулах Хэрэгтэй' }
  return { grade: 'D', color: '#ef4444', label: 'Аюултай!' }
}

export default function ChecklistSlide() {
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = checked.size
  const progress = totalItems > 0 ? (checkedCount / totalItems) * 100 : 0
  const grade = getGrade(progress)

  const toggleItem = (key: string) => {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  // Per-category progress
  const catProgress = categories.map((cat, ci) => {
    const catChecked = cat.items.filter((_, ii) => checked.has(`${ci}-${ii}`)).length
    return { checked: catChecked, total: cat.items.length, pct: Math.round((catChecked / cat.items.length) * 100) }
  })

  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-green"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Хувийн Аюулгүй Байдлын Шалгах Хуудас
      </motion.h1>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Left: Checklist */}
        <div style={{ flex: 1 }}>
          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: 16 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Дүүрэлт</span>
              <span style={{
                fontSize: '0.78rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                color: progress === 100 ? '#10b981' : '#3b82f6',
              }}>
                {checkedCount}/{totalItems} ({Math.round(progress)}%)
              </span>
            </div>
            <div style={{
              height: 8, background: 'rgba(255,255,255,0.05)',
              borderRadius: 4, overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: progress === 100
                    ? 'linear-gradient(90deg, #10b981, #06b6d4)'
                    : 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                  borderRadius: 4,
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>

          <div className="grid-2" style={{ gap: 12 }}>
            {categories.map((cat, ci) => (
              <motion.div
                key={ci}
                className="glass-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + ci * 0.08 }}
                style={{ borderTop: `3px solid ${cat.color}`, padding: '12px 14px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: '1.1rem' }}>{cat.icon}</span>
                  <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: cat.color, flex: 1 }}>
                    {cat.title}
                  </h3>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                    color: catProgress[ci].pct === 100 ? '#10b981' : '#64748b',
                  }}>
                    {catProgress[ci].checked}/{catProgress[ci].total}
                  </span>
                </div>
                {/* Mini progress */}
                <div style={{
                  height: 3, background: 'rgba(255,255,255,0.05)',
                  borderRadius: 2, overflow: 'hidden', marginBottom: 8,
                }}>
                  <motion.div
                    style={{ height: '100%', background: cat.color, borderRadius: 2 }}
                    animate={{ width: `${catProgress[ci].pct}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`
                    const isChecked = checked.has(key)
                    return (
                      <motion.div
                        key={ii}
                        onClick={() => toggleItem(key)}
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 8,
                          padding: '4px 8px', borderRadius: 6,
                          cursor: 'pointer',
                          background: isChecked ? `${cat.color}10` : 'transparent',
                          transition: 'background 0.2s',
                        }}
                      >
                        <motion.div
                          animate={{
                            background: isChecked ? cat.color : 'transparent',
                            borderColor: isChecked ? cat.color : 'rgba(255,255,255,0.2)',
                          }}
                          style={{
                            width: 18, height: 18, borderRadius: 4,
                            border: '2px solid', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            fontSize: '0.65rem', color: 'white', flexShrink: 0,
                          }}
                        >
                          {isChecked && '✓'}
                        </motion.div>
                        <span style={{
                          fontSize: '0.75rem',
                          color: isChecked ? '#f1f5f9' : '#94a3b8',
                          textDecoration: isChecked ? 'line-through' : 'none',
                          transition: 'all 0.2s',
                        }}>
                          {item}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Score panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          style={{ width: 260, flexShrink: 0 }}
        >
          {/* Grade */}
          <motion.div
            className="glass-card"
            style={{ textAlign: 'center', marginBottom: 14, borderTop: `3px solid ${grade.color}` }}
          >
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: 4 }}>Таны Аюулгүй Байдлын Үнэлгээ</div>
            <motion.div
              style={{
                fontSize: '4rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                color: grade.color, lineHeight: 1,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {grade.grade}
            </motion.div>
            <motion.div
              style={{
                fontSize: '0.85rem', fontWeight: 700, color: grade.color,
                marginTop: 4,
              }}
            >
              {grade.label}
            </motion.div>
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  marginTop: 8, fontSize: '2rem',
                }}
              >
                🎉
              </motion.div>
            )}
          </motion.div>

          {/* Category breakdown */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ marginBottom: 14 }}
          >
            <div className="card-title info" style={{ marginBottom: 10 }}>📊 Хэсгийн Үнэлгээ</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {categories.map((cat, ci) => (
                <div key={ci}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{cat.icon} {cat.title}</span>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-mono)',
                      color: catProgress[ci].pct === 100 ? '#10b981' : cat.color,
                    }}>
                      {catProgress[ci].pct}%
                    </span>
                  </div>
                  <div style={{
                    height: 4, background: 'rgba(255,255,255,0.05)',
                    borderRadius: 2, overflow: 'hidden',
                  }}>
                    <motion.div
                      style={{ height: '100%', background: cat.color, borderRadius: 2 }}
                      animate={{ width: `${catProgress[ci].pct}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Motivation */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{ fontSize: '0.78rem', color: '#34d399', fontWeight: 600 }}>
              💡 Зөвлөмж
            </p>
            <p style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: 4, lineHeight: 1.4 }}>
              {progress < 50
                ? 'Хувийн аюулгүй байдлаа сайжруулахын тулд шалгах хуудсыг бөглөж дуусгаарай!'
                : progress < 100
                  ? 'Сайн байна! Үлдсэн зүйлсийг бөглөж дуусгаарай!'
                  : 'Гайхалтай! Та бүх шалгуурыг хангалаа! Энэ түвшинг хадгалаарай!'}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
