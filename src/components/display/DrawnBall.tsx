import { Circle, type CircleProps } from 'styled-system/jsx'

interface DrawnBallProps extends CircleProps {
  number: number
  isDrawn?: boolean
}

const DrawnBall = (props: DrawnBallProps) => {
  const { number, isDrawn, ...circleProps } = props

  return (
    <Circle
      borderWidth={isDrawn ? '1px' : '0'}
      aspectRatio={1}
      color={isDrawn ? 'fg.subtle' : 'fg.muted'}
      {...circleProps}
    >
      {number}
    </Circle>
  )
}

export default DrawnBall
