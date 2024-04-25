import React from 'react'

import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import { HeroImageRight } from './ui/HeroImageRight'
import { FooterLinks } from './ui/FooterLinks'
import { HeaderSimple } from './ui/HeaderSimple'

export default function App() {
  return (
    <MantineProvider>
      <HeaderSimple/>
      <HeroImageRight />
      <FooterLinks />
    </MantineProvider>
  )
}
