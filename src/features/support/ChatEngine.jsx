import React from 'react'

import { ChatEngineWrapper, ChatFeed, Socket } from 'react-chat-engine'

import { styles } from './styles'

export default function ChatEngine({ chat, user, visible }) {
  console.table(chat?.id, user?.username, user?.secret)

  return (
    <div
      style={{
        transition: 'all 0.5s ease',
        WebkitTransition: 'all 0.5s ease',
        backgroundColor: 'white',
      }}
    >
      {visible && (
        <ChatEngineWrapper>
          <Socket
            projectID="ec4aec11-bc6a-4cd8-af58-5976c58d0553"
            userName={user.email}
            userSecret={user.email}
          />
          <ChatFeed activeChat={chat?.id} />
        </ChatEngineWrapper>
      )}
    </div>
  )
}
