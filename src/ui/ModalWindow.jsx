import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import PaymentModal from '../features/cart/PaymentModal'

export default function ModalWindow({ selected, setSelected }) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal opened={opened} onClose={close} title="PaymentMethod" centered>
        <PaymentModal selected={selected} setSelected={setSelected}/>
        <Button onClick={close} fullWidth color='yellow'>Select</Button>
      </Modal>
      <Button color='yellow' onClick={open}>Change</Button>
    </>
  )
}
