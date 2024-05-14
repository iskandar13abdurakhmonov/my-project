import React from 'react'
import { HeaderSimple } from './HeaderSimple'
import { Outlet } from 'react-router-dom'
import { FooterLinks } from './FooterLinks'
import Support from '../features/support/Support'

export default function AppLayout() {
  return (
    <>
      <HeaderSimple />
      <main>
        <Outlet />
        <Support/>
      </main>
      <FooterLinks />
    </>
  )
}
