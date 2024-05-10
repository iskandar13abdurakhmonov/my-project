import { Container, Flex, Group, Progress, Text } from '@mantine/core';
import React from 'react';
import { useOrder } from '../features/auth/useOrder';
import Spinner from '../ui/Spinner';
import toast from 'react-hot-toast';

const statuses = [
  { status: 'unconfirmed', value: 10 },
  { status: 'preparing', value: 50 },
  { status: 'ready', value: 100 },
];

export default function Status() {
  const { order, isLoading } = useOrder();

  if (isLoading) return <Spinner />;

  // Find the corresponding value and color for the current order status
  const currentStatus = statuses.find((item) => item.status === order.status);
  const progressValue = currentStatus ? currentStatus.value : 0;
  const progressBarColor = order.status === 'ready' ? 'green' : 'yellow';

  if(order.status === 'ready') {
    toast.success('Your order is ready, come and pick it up!')
  }

  return (
    <Container pt={50} pb={100}>
      <Flex direction="column" mb={50}>
        <Text>Your order #{order.id}</Text>
        <Text>Placed at: {order.created_at}</Text>
      </Flex>
      <Progress
        color={progressBarColor}
        radius="xl"
        size="xl"
        value={progressValue}
        striped
        animated={order.status === 'unconfirmed' || order.status === 'preparing'}
      />
      <Group mt={20} justify="space-between">
        <Text>Unconfirmed</Text>
        <Text>Preparing</Text>
        <Text>Ready</Text>
      </Group>
    </Container>
  );
}
