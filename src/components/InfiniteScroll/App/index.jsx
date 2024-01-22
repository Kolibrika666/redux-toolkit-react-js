import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { getRange } from '../getRange.js'

export default function InfiniteScroll() {
  const [lastNumber, setLastNumber] = useState(100)

  const numbers = getRange(0, lastNumber)

  const { ref: target } = useInView({
    onChange: (inView) => {
      if (inView) {
        // something
        setLastNumber(lastNumber + 10)
      }
    },
  })

  return (
    <>
      {numbers.map((number, index) => (
        <div
        key={Math.random() + index}
          // ref={(node) => {
          //   if (index === numbers.length - 1) {
          //     target(node)
          //   }
          // }}
        >
          {number}
        </div>
      ))}
      <p ref={target}>last</p>
    </>
  )
}
