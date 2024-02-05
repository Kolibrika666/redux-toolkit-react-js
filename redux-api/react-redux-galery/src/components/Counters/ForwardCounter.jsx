import { useEffect, useState } from "react";

const ForwardCounter = () => {
  const [count, setCount] = useState(0)
  useEffect( () => {
    const timerId = setInterval( () => {
      setCount(prev => prev + 1)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [])
  return (
    <div className="counter">
      <span>{count}</span>      
    </div>
  );
};

export default ForwardCounter;
