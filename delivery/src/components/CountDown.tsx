'use client'

import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date('2025-05-15')

const CountDown = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  
  if (!mounted) {
    return null 
  }

  return (
    <Countdown
      className="text-yellow-300 text-5xl font-bold"
      date={endingDate}
    />
  )
}

export default CountDown
