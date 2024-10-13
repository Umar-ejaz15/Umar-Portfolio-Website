import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const SkillCard = ({ id, title, description }) => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setSelectedId(id)}
        className="bg-zinc-800 text-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.h3 className="text-xl font-semibold mb-2">{title}</motion.h3>
      </motion.div>

      <AnimatePresence>
        {selectedId === id && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 text-white rounded-lg shadow-md p-6 max-w-md"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >


              <motion.h3 className="text-2xl font-semibold mb-4">{title}</motion.h3>
              <motion.p className="mb-6 text-lg">{description}</motion.p>
              <motion.button
                onClick={() => setSelectedId(null)}

                className="bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-600 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="mr-2" />
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SkillCard