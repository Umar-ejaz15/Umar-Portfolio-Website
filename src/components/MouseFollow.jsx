import React, { useState, useEffect } from 'react'

const MouseFollow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHoveringText, setIsHoveringText] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
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
        hoveredElement.style.color = '#6366f1'
      } else {
        setIsHoveringText(false)
        document.querySelectorAll('p, h1, h2, h3, span, a, button, input').forEach(el => {
          el.style.color = ''
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div 
      className="fixed z-50 pointer-events-none select-none rounded-full bg-zinc-800/70 transform -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHoveringText ? '50px' : '22px',
        height: isHoveringText ? '50px' : '22px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    />
  )
}

export default MouseFollow