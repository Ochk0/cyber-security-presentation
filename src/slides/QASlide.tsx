import { motion } from 'framer-motion'

export default function QASlide() {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        position: 'relative',
      }}
      initial="initial"
      animate="animate"
    >
      {/* Background orbs */}
      <div className="bg-gradient-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, #8b5cf6, transparent)', top: '-10%', right: '-10%' }} />
      <div className="bg-gradient-orb" style={{ width: 400, height: 400, background: 'radial-gradient(circle, #3b82f6, transparent)', bottom: '-5%', left: '-5%' }} />

      {/* Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ marginBottom: 32 }}
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 40px rgba(139,92,246,0.2)',
              '0 0 80px rgba(139,92,246,0.4)',
              '0 0 40px rgba(139,92,246,0.2)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '2px solid rgba(139,92,246,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(139,92,246,0.06)',
          }}
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: '3.5rem' }}
          >
            💬
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: '4rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #a78bfa, #818cf8, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: 16,
        }}
      >
        Асуулт & Хэлэлцүүлэг
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          fontSize: '1.3rem',
          color: '#94a3b8',
          marginBottom: 40,
          maxWidth: 600,
          lineHeight: 1.5,
        }}
      >
        Аюулгүй Байдалд Хандсан Таны Хүчин Чармайлтад Баярлалаа
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{
          height: 3,
          background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
          borderRadius: 2,
          marginBottom: 32,
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          fontSize: '1rem',
          color: '#64748b',
          lineHeight: 1.6,
        }}
      >
        Санаарай: Аюулгүй байдал зөвхөн IT-ийн үүрэг биш.
        <br />
        <strong style={{ color: '#a78bfa' }}>Энэ бол хүн бүрийн үүрэг.</strong>
      </motion.p>

      {/* Subtle tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        style={{
          marginTop: 40,
          padding: '8px 24px',
          borderRadius: 24,
          border: '1px solid rgba(139,92,246,0.2)',
          background: 'rgba(139,92,246,0.06)',
          color: '#64748b',
          fontSize: '0.82rem',
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        Албан Хэрэгцээнд
      </motion.div>
    </motion.div>
  )
}
