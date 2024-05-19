import React, { useEffect, useState } from 'react'

import classes from './PaymentMethod.module.css'
import { Button, Group, Text, Textarea, Title } from '@mantine/core'
import ModalWindow from '../../ui/ModalWindow'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart, getTotalCartPrice } from './cartSlice'
import { useNavigate } from 'react-router-dom'
import { useMenu } from '../menu/useMenu'
import toast from 'react-hot-toast'
import { useCurrentUser } from '../auth/useCurrentUser'
import { supabase } from '../../services/supabase'

export default function PaymentMethod() {
  const [selected, setSelected] = useState('cash')
  const [note, setNote] = useState('')
  const totalCartPrice = useSelector(getTotalCartPrice)
  const { userData } = useCurrentUser()

  const user = userData?.at(0)
  console.log(user)

  const [latestOrderId, setLatestOrderId] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector(getCart)

  const { data: menuData } = useMenu()

  useEffect(() => {
    async function fetchLatestOrderID() {
      const { data, error } = await supabase
        .from('orders')
        .select('id')
        .order('id', { ascending: false })
        .limit(1)

      if (error) {
        throw new Error(error.message)
      }

      if (data.length > 0) {
        setLatestOrderId(data[0].id + 1)
      } else {
        setLatestOrderId(1)
      }
    }

    fetchLatestOrderID()
  }, [])

  async function onSubmit() {
    if (cart.length === 0) {
      toast.error('Your cart is empty. Add items before placing an order')
      return
    }

    const newOrder = {
      id: latestOrderId,
      total_price: totalCartPrice,
      status: 'unconfirmed',
      paymentMethod: selected,
      note,
      customer_id: user?.id,
    }

    const newOrderItems = cart.map((cartItem) => {
      const menuItem = menuData.find((item) => item.id === cartItem.id)
      return {
        order_id: latestOrderId,
        food_id: menuItem ? menuItem.id : null,
        quantity: cartItem.quantity,
        sub_total: cartItem.totalPrice,
      }
    })

    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert([newOrder])

    const { data: orderItemsData, error: orderItemsError } = await supabase
      .from('orderItems')
      .insert(newOrderItems)

    dispatch(clearCart())
    toast.success(`Order: ${latestOrderId} placed successfully`)
    navigate(`/status/${latestOrderId}`)

    if (orderError) {
      toast.error(orderError.message)
      throw new Error(orderError.message)
    }

    if (orderItemsError) {
      toast.error(orderItemsError.message)
      throw new Error(orderItemsError.message)
    }

    return { orderData, orderItemsData }
  }

  return (
    <div className={classes.paymentMethod}>
      <Group>
        <Title order={3}>Payment Method</Title>
      </Group>
      <Group>
        <Text>{selected}</Text>
        <ModalWindow selected={selected} setSelected={setSelected} />
      </Group>
      <Textarea
        onChange={(e) => setNote(e.target.value)}
        label="Note"
        placeholder="Input placeholder"
      />
      <Group>
        <Text>Total: {totalCartPrice}</Text>
        <Button onClick={onSubmit} fullWidth color="yellow">
          Order
        </Button>
      </Group>
    </div>
  )
}
