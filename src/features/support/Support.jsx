import React, { useRef, useEffect, useState } from 'react'
import Avatar from './Avatar'
import SupportWindow from './SupportWindow'

export default function Support() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div ref={ref}>
      <SupportWindow visible={visible} />
      <Avatar
        onClick={() => setVisible(true)}
        style={{ position: 'fixed', bottom: '24px', right: '24px' }}
      />
    </div>
  )
}
