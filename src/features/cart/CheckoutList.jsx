import React from 'react'
import { useSelector } from 'react-redux'

import { getCart } from './cartSlice'
import { Image, List, Title } from '@mantine/core'
import { CheckoutItem } from './CheckoutItem'

import classes from './CheckoutList.module.css'

export default function CheckoutList() {
  const cart = useSelector(getCart)

  if (!cart.length)
    return (
      <List
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className={classes.list}
      >
        <Image mr={60} w={130} src='./dont-know.png'/>
        <Title order={3}>Empty Cart!</Title>
      </List>
    )

  return (
    <List className={classes.list}>
      {cart.map((cartItem) => (
        <List.Item className={classes.item} key={cartItem.id}>
          <CheckoutItem cartItem={cartItem} />
        </List.Item>
      ))}
    </List>
  )
}
