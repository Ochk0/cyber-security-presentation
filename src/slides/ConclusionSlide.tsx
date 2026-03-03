import { motion } from 'framer-motion'

const keyPoints = [
  { num: '1', title: 'ТА бол анхны хамгаалалт', desc: 'Технологи тусалдаг, гэхдээ хүний анхаарал чухал', color: '#3b82f6', icon: '🛡️' },
  { num: '2', title: 'Дарахаас өмнө БОДОХ', desc: 'Сэжигтэй email, link, хүсэлтийг шалгах', color: '#ef4444', icon: '🧠' },
  { num: '3', title: 'Сэжигтэй зүйлийг МЭДЭГДЭХ', desc: 'Эрт мэдэгдэх нь том incident-ээс сэргийлнэ', color: '#10b981', icon: '📢' },
]

const reminders = [
  { text: 'Халдагчид төрийн ажилтнуудыг тусгайлан бай болгодог', icon: '🎯' },
  { text: 'Phishing бол №1 халдлагын арга - сонор сэрэмжтэй байх', icon: '🎣' },
  { text: 'Хүчтэй password + MFA = хүчтэй хамгаалалт', icon: '🔐' },
  { text: 'Физик аюулгүй байдал бол кибер аюулгүй байдал', icon: '🏢' },
  { text: 'Эргэлзвэл өөр сувгаар шалгах', icon: '📞' },
  { text: 'Нэг товшилт бүхэл сүлжээг эвдэж болно', icon: '💥' },
  { text: 'Аюулгүй байдал бол ХҮН БҮРИЙН үүрэг', icon: '👥' },
]

const quickActions = [
  { label: 'Password шинэчлэх', color: '#3b82f6' },
  { label: 'MFA идэвхжүүлэх', color: '#8b5cf6' },
  { label: 'IT-д мэдэгдэх', color: '#ef4444' },
  { label: 'Bookmark ашиглах', color: '#10b981' },
]

export default function ConclusionSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Гол Дүгнэлтүүд
      </motion.h1>

      {/* Key points */}
      <div className="grid-3" style={{ gap: 18, marginBottom: 24 }}>
        {keyPoints.map((kp, i) => (
          <motion.div
            key={i}
            className="glass-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.15, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -6 }}
            style={{
              textAlign: 'center', padding: '24px 18px',
              borderTop: `3px solid ${kp.color}`,
            }}
          >
            <motion.div
              style={{ fontSize: '2.5rem', marginBottom: 8 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              {kp.icon}
            </motion.div>
            <motion.div
              style={{
                fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-mono)',
                color: kp.color, lineHeight: 1, marginBottom: 8,
              }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              {kp.num}
            </motion.div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 6 }}>
              {kp.title}
            </h3>
            <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
              {kp.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 20 }}>
        {/* Reminders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ flex: 1 }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#60a5fa', marginBottom: 10 }}>
            Санаарай
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {reminders.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                whileHover={{ x: 8, background: 'rgba(59,130,246,0.05)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '5px 12px', borderRadius: 8, transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1rem' }}>{r.icon}</span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{r.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ width: 320, flexShrink: 0 }}
        >
          {/* Quick actions */}
          <div className="glass-card info" style={{ marginBottom: 16 }}>
            <div className="card-title info">⚡ Одоо Хийх Зүйлс</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
              {quickActions.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '6px 10px', borderRadius: 8,
                    background: `${a.color}10`, border: `1px solid ${a.color}20`,
                    cursor: 'default',
                  }}
                >
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%', background: a.color,
                  }} />
                  <span style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goal */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            style={{ textAlign: 'center' }}
          >
            <div className="card-title success" style={{ justifyContent: 'center' }}>
              🎯 Зорилго
            </div>
            <p className="card-text" style={{ fontSize: '0.82rem' }}>
              Өөрийгөө, хамт ажиллагчдаа, иргэдээ, үндэсний аюулгүй байдлаа хамгаалах.
              <br />
              <strong style={{ color: '#34d399' }}>Таны хийсэн үйлдэл бүр чухал.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
