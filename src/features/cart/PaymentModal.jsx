import { Checkbox, Group } from '@mantine/core'
import React from 'react'
import { FcMoneyTransfer, FcSimCardChip } from 'react-icons/fc'

const paymentMethods = [
  { type: 'cash', icon: <FcMoneyTransfer size={40} /> },
  { type: 'card', icon: <FcSimCardChip size={40} /> },
]

export default function PaymentModal({ selected, setSelected }) {
  const handleChange = (type) => {
    if (selected !== type) {
      setSelected(type)
    } else {
      setSelected(null)
    }
  }

  return (
    <Group
      style={{
        margin: '50px 0 50px 0',
        width: '100%',
        justifyContent: 'space-evenly',
      }}
    >
      {paymentMethods.map((paymentMethod) => (
        <Group key={paymentMethod.type}>
          {paymentMethod.icon}
          <Checkbox
            labelPosition="left"
            label={paymentMethod.type}
            color="yellow"
            radius="xl"
            size="lg"
            value={paymentMethod.type}
            checked={selected === paymentMethod.type}
            onChange={() => handleChange(paymentMethod.type)}
          />
        </Group>
      ))}
    </Group>
  )
}
