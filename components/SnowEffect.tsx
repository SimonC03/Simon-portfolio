'use client'

import React, { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'
import { useTheme } from 'next-themes'

const SnowEffect = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Vänta tills komponenten är mountad för att undvika hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Snowfall
      // Vit snö i Dark Mode, Blå-grå snö i Light Mode så det syns
      color={resolvedTheme === 'dark' ? '#ffffff' : '#A3B8C2'}
      snowflakeCount={150}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 50, // Ligger ovanpå bakgrunden men under modaler/menyer
        pointerEvents: 'none', // Gör att man kan klicka igenom snön
      }}
    />
  )
}

export default SnowEffect
