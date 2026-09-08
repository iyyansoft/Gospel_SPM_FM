import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({ children, className = '', style = {}, maxRotation = 10, ...props }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotX = ((y - centerY) / centerY) * -maxRotation
    const rotY = ((x - centerX) / centerX) * maxRotation

    setRotateX(rotX)
    setRotateY(rotY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
