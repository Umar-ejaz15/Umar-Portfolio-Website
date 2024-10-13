import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-zinc-900 z-50">
      <div className="flex space-x-4 w-full h-full">
        <div className="flex-1 bg-zinc-900 animate-pulse animate-curtain"></div>
        <div className="flex-1 bg-zinc-400 animate-pulse animate-curtain" style={{ animationDelay: '0.1s' }}></div>
        <div className="flex-1 bg-zinc-900 animate-pulse animate-curtain" style={{ animationDelay: '0.1s' }}></div>
        <div className="flex-1 bg-zinc-400 animate-pulse animate-curtain" style={{ animationDelay: '0.2s' }}></div>
        <div className="flex-1 bg-zinc-900 animate-pulse animate-curtain" style={{ animationDelay: '0.3s' }}></div>
      </div>
      <motion.div
        className="absolute text-zinc-100 text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        We are loading the site for you
      </motion.div>
    </div>
  )
}

export default Loader