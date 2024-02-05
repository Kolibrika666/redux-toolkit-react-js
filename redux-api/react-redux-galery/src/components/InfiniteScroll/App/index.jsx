import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getRange } from '../getRange.js'
import { Typography } from '@mui/material'

export default function InfiniteScroll() {
  const [lastNumber, setLastNumber] = useState(100)

  const numbers = getRange(0, lastNumber)

  const { ref , inView  } = useInView({
    onChange: (inView) => {
      if (inView) {
        setLastNumber(lastNumber + 10)
        window.scrollBy(0, -200)
      }
    },
  })

  return (
    <>
      {numbers.map( (item) => (
        <Typography key={Math.random()}>{item}</Typography>
      ))}
      <Typography ref={ref}>Видимость - {inView ? "видно" : "не видно"}</Typography>
    </>
  )
}
