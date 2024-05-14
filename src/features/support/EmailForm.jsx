import React, { useState } from 'react'

import { styles } from './styles'

import { LoadingOutlined } from '@ant-design/icons'
import Avatar from './Avatar'
import axios from 'axios'

export default function EmailForm(props) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const getOrCreateUser = (callback) => {
    axios
      .put(
        'https://api.chatengine.io/users/',
        {
          "username": email,
          'secret': email,
          'email': email
        },
        { headers: { 'Private-Key': 'c81f5e6b-584c-4ada-a61a-c9ee108dfcd9' } }
      )
      .then((r) => callback(r.data))
      .catch((error) => console.error('Error creating/getting user:', error))
  }

  const getOrCreateChat = (callback) => {
    axios
      .put(
        'https://api.chatengine.io/chats/',
        {
          "usernames": ['canteenAdmin', email],
          "is_direct_chat": true,
        },
        { headers: { 'Private-Key': 'c81f5e6b-584c-4ada-a61a-c9ee108dfcd9' } }
      )
      .then((r) => callback(r.data))
      .catch((error) => console.error('Error creating/getting chat:', error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
    console.log('Sending email', email)

    getOrCreateUser(
      (user) => {
        props.setUser(user)
        setLoading(false)
        getOrCreateChat(
          (chat) => props.setChat(chat),
          (error) => console.error('Error creating/getting chat:', error)
        )
      },
      (error) => console.error('Error creating/getting user:', error)
    )
  }

  return (
    <div
      style={{
        ...styles.emailFormWindow,
        
      }}
    >
      <div style={{ height: '0px' }}>
        <div style={styles.stripe}></div>
      </div>

      <div
        style={{
          ...styles.loadingDiv,
          ...{ zIndex: loading ? '10' : '-1', opacity: loading ? '0.33' : '0' },
          transition: 'all 0.33s ease',
          WebkitTransition: 'all 0.5s ease',
        }}
      ></div>
      <LoadingOutlined
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? '10' : '-1',
            opacity: loading ? '1' : '0',
            fontSize: '82px',
            top: 'calc(50% - 41px)',
            left: 'calc(50% - 41px)',
          },
          transition: 'all 0.5s ease',
          WebkitTransition: 'all 0.5s ease',
        }}
      />

      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Avatar style={{ position: 'relative', top: '10%' }} />
        <div style={styles.topText}>Welcome to my support</div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: 'relative', width: '100%', top: '10%' }}
        >
          <input
            type="text"
            style={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
        </form>

        <div style={styles.bottomText}>Enter your email to get started</div>
      </div>
    </div>
  )
}
