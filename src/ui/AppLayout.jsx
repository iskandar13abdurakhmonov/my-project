import React from 'react'
import { HeaderSimple } from './HeaderSimple'
import { Outlet } from 'react-router-dom'
import { FooterLinks } from './FooterLinks'

export default function AppLayout() {
  return (
    <>
      <HeaderSimple />
      <main>
        <Outlet />
      </main>
      <FooterLinks />
    </>
  )
}
