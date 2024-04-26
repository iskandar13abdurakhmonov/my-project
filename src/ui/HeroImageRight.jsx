import { Container, Title, Text, Button } from '@mantine/core'
import classes from './HeroImageRight.module.css'
import { useNavigate } from 'react-router-dom'

export function HeroImageRight() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className={classes.root}>
      <Container size="md">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Beautifully{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                Delicious
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              MDIST bakery is where dreams rise and delicious memories are made
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={handleClick}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
