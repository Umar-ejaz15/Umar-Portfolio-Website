import React, { useState, useEffect } from 'react'

const MouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringText, setIsHoveringText] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  useEffect(() => {
    let timeoutId
    
    const handleMouseMove = (e) => {
      setIsMoving(true)
      clearTimeout(timeoutId)
      
      timeoutId = setTimeout(() => {
        setIsMoving(false)
      }, 100)

      setPosition({ x: e.clientX, y: e.clientY })
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      if (hoveredElement?.tagName === 'P' || 
          hoveredElement?.tagName === 'H1' || 
          hoveredElement?.tagName === 'H2' || 
          hoveredElement?.tagName === 'H3' || 
          hoveredElement?.tagName === 'SPAN' ||
          hoveredElement?.tagName === 'A' ||
          hoveredElement?.tagName === 'BUTTON' ||
          hoveredElement?.tagName === 'INPUT') {
        setIsHoveringText(true)
      } else {
        setIsHoveringText(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div 
      className="fixed z-50 pointer-events-none select-none rounded-full bg-white/30 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHoveringText ? '50px' : '22px',
        height: isHoveringText ? '50px' : '22px',
        opacity: isMoving ? 0.9 : 0.6,
        transform: `translate(-50%, -50%) scale(${isMoving ? 0.8 : 1})`,
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, transform 0.3s ease',
        mixBlendMode: 'difference',
      }}
    />
  )
}

export default MouseFollow