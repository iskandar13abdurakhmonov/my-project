import React, { useState } from 'react'

import classes from './PaymentMethod.module.css'
import { Button, Group, Text, Textarea, Title } from '@mantine/core'
import ModalWindow from '../../ui/ModalWindow'
import { useSelector } from 'react-redux'
import { getTotalCartPrice } from './cartSlice'

export default function PaymentMethod() {
  const [selected, setSelected] = useState('cash')
  const totalCartPrice = useSelector(getTotalCartPrice)

  return (
    <div className={classes.paymentMethod}>
      <Group>
        <Title order={3}>Payment Method</Title>
      </Group>
      <Group>
        <Text>{selected}</Text>
        <ModalWindow selected={selected} setSelected={setSelected} />
      </Group>
      <Textarea label="Note" placeholder="Input placeholder" />
      <Group>
        <Text>Total: {totalCartPrice}</Text>
        <Button fullWidth color="yellow">
          Order
        </Button>
      </Group>
    </div>
  )
}
