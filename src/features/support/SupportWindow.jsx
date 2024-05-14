import React, { useState } from 'react'

import { styles } from './styles'
import EmailForm from './EmailForm'
import ChatEngine from './ChatEngine'

export default function SupportWindow(props) {
  const [user, setUser] = useState(null)
  const [chat, setChat] = useState(null)

  console.log('user', user)
  console.log('chat', chat)

  if (user && chat)
    return (
      <div
        style={{
          ...styles.supportWindow,
          ...{ opacity: props.visible ? '1' : '0' },
          transition: 'all 0.5s ease',
          WebkitTransition: 'all 0.5s ease',
        }}
      >
        <ChatEngine
          visible={user !== null || chat !== null}
          chat={chat}
          user={user}
        />
      </div>
    )

  return (
    <div
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? '1' : '0' },
        transition: 'all 0.5s ease',
        WebkitTransition: 'all 0.5s ease',
      }}
    >
      <EmailForm
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
        visible={user === null || chat === null}
      />
    </div>
  )
}
