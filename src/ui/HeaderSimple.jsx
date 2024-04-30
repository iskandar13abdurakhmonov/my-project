import { useState } from 'react'
import { Container, Group, Burger, Button, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useLocation } from 'react-router-dom'

import classes from './HeaderSimple.module.css'
import Logout from '../features/auth/Logout'
import CartButton from '../features/cart/CartButton'

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
]

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const location = useLocation()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image w={100} src="./logo.png" />
        <Group style={{ marginTop: '20px'}} gap={5} visibleFrom="xs">
          {items}
        </Group>

        
        <Logout />
        {location.pathname === '/menu' && <CartButton/>}

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}
