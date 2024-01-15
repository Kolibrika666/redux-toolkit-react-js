import { useEffect, useState } from "react"


const useCounter = (option = "increment") => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(prev => {
        // if (option === "increment") return prev + 1
        // if (option === "decrement") return prev - 1
        switch (option) {
          case "increment": return prev + 1
          case "decrement": return prev - 1
        }
      })
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [option])
  return count
}

export default useCounter
