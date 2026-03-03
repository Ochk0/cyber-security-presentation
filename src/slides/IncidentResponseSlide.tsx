import { motion } from 'framer-motion'

const signs = [
  { text: 'Санамсаргүй password reset email', icon: '📧' },
  { text: 'Танихгүй газраас нэвтэрсэн мэдэгдэл', icon: '📍' },
  { text: 'Систем ер бусын удаан ажиллах', icon: '🐌' },
  { text: 'Санамсаргүй pop-up эсвэл программ', icon: '💥' },
  { text: 'Файл алга болсон / encrypt хийгдсэн', icon: '🔒' },
  { text: 'Хамт ажиллагчид хачин email авсан', icon: '😟' },
  { text: 'Webcam, микрофон идэвхжсэн', icon: '📸' },
]

const steps = [
  { num: 1, label: 'Сандрахгүй', icon: '🛡️', gradient: 'linear-gradient(135deg, #059669, #34d399)', desc: 'Тайван байж нөхцөл байдлыг үнэлэх' },
  { num: 2, label: 'Салгах', icon: '🔌', gradient: 'linear-gradient(135deg, #d97706, #f59e0b)', desc: 'Сүлжээнээс кабель салгах, WiFi унтраах' },
  { num: 3, label: 'Мэдэгдэх', icon: '📞', gradient: 'linear-gradient(135deg, #dc2626, #ef4444)', desc: 'IT Security хэлтэст яаралтай залгах' },
  { num: 4, label: 'Баримтжуулах', icon: '📝', gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)', desc: 'Дэлгэцийн зураг авах, алхмуудыг бичих' },
]

const doNots = [
  'Компьютер УНТРААХГҮЙ (нотолгоо алдагдана)',
  'Төлбөр ТӨЛӨХГҮЙ (ransomware)',
  'Өөрөө засах оролдлого ХИЙХГҮЙ',
  'Бусдад НУУХГҮЙ (хурдан мэдэгдэх)',
]

export default function IncidentResponseSlide() {
  return (
    <div style={{ paddingBottom: 40 }}>
      <motion.h1
        className="slide-heading gradient-red"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
      >
        Асуудал Гарвал Яах Вэ
      </motion.h1>

      <div style={{ display: 'flex', gap: 24 }}>
        {/* Left: Signs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f87171', marginBottom: 10 }}>
            Эвдрэлийн Шинжүүд
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {signs.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(239,68,68,0.4)' }}
                style={{
                  padding: '8px 12px', borderRadius: 8,
                  background: 'rgba(239,68,68,0.04)',
                  border: '1px solid rgba(239,68,68,0.1)',
                  fontSize: '0.85rem', color: '#fca5a5',
                  display: 'flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s',
                }}
              >
                <span>{s.icon}</span>
                {s.text}
              </motion.div>
            ))}
          </div>

          {/* DO NOT section */}
          <motion.div
            className="glass-card danger"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ marginTop: 14 }}
          >
            <div className="card-title danger">🚫 ХИЙЖ БОЛОХГҮЙ</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 6 }}>
              {doNots.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  style={{
                    fontSize: '0.82rem', color: '#fca5a5',
                    padding: '4px 0', display: 'flex', alignItems: 'center', gap: 6,
                  }}
                >
                  <span style={{ color: '#ef4444', fontSize: '0.9rem' }}>✕</span>
                  {d}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Response Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ width: 440, flexShrink: 0 }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#60a5fa', marginBottom: 14 }}>
            Шууд Хийх Алхамууд
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.12, type: 'spring' }}
                whileHover={{ scale: 1.03, x: -4 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  borderRadius: 14, overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <div style={{
                  background: step.gradient,
                  padding: '18px 16px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 4,
                  minWidth: 80,
                }}>
                  <motion.div
                    style={{ fontSize: '1.8rem' }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.82rem', fontWeight: 800, color: '#fff',
                  }}>
                    {step.num}
                  </div>
                </div>
                <div style={{ padding: '10px 14px 10px 0' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 2 }}>
                    {step.label}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key message */}
          <motion.div
            className="glass-card success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{ marginTop: 14, textAlign: 'center' }}
          >
            <p className="card-text" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#34d399' }}>
              Эрт мэдэгдэх нь том incident-ээс сэргийлнэ.
            </p>
            <p className="card-text" style={{ fontSize: '0.82rem', marginTop: 4 }}>
              Сэжигтэй зүйлийг шууд IT Security-д мэдэгдээрэй.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
