'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '@/constants/contact'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.04, y: -3 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-shadow duration-200"
      style={{
        backgroundColor: '#25d366',
        boxShadow: '0 6px 28px rgba(37,211,102,0.45)',
      }}
    >
      <MessageCircle size={24} className="text-white" />
    </motion.a>
  )
}
