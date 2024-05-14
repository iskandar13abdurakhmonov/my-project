import React, { useState } from 'react'

import { styles } from './styles'

export default function Avatar(props) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={props.style}>
      <span
        style={{ ...styles.avatarHello, ...{ opacity: hovered ? '1' : '0' } }}
      >
        Hey it`s Admin
      </span>

      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? '1px solid #f9f0ff' : '4px solid #FCC419' },
          transition: 'all 0.33s ease',
          WebkitTransition: 'all 0.5s ease',
        }}
      ></button>
    </div>
  )
}
