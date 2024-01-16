// import BackwardCounter from "./components/Counters/BackwardCounter"
// import ForwardCounter from "./components/Counters/ForwardCounter"
// import CounterWrapper from "./hocs/CounterWrapper"
// import useCounter from "./hooks/useCounter"
import Header from "./components/Header"
import Catalog from "./pages/catalog/App"

// import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment } from "./store/counter/counterSlice"

function App() {
  // const count = useCounter()
  // const reverseCount = useCounter("decrement")
  // const count = useSelector( state => state.counter.value)
  // const dispatch = useDispatch()
  return (
    <>  
      <Header />
      <Catalog />
      {/* <ForwardCounter />
      <BackwardCounter /> */}
      
      {/* <CounterWrapper>
        <span>{count}</span>
      </CounterWrapper>
      <CounterWrapper>
        <span>{reverseCount}</span>
      </CounterWrapper> */}

      {/* <div className="counter">
        <p>{count}</p>
      </div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
      
    </>
  ) 
}

export default App
