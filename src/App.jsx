import { Box, Button, Paper, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clear, increment } from "./store/likes/likesSlice"
import InfiniteScroll from "./components/InfiniteScroll/App"

function App() {
  const likesAmount = useSelector(store => store.likes.likesAmount)
  const dispatch = useDispatch()

  const handleLike = () => {
    dispatch(increment())
    window.scrollBy(0, 200)
  }
  const handleClear = () => {
    dispatch(clear())
  }
  return (
    <Paper elevation={0}>
      
      <Box m={3}>
        <Typography variant="h1">{likesAmount}</Typography>
        <Button onClick={handleLike} variant="outlined">Like</Button>
        <Button onClick={handleClear} variant="outlined">Clear</Button>
      </Box>
      <Box>
        <InfiniteScroll />
      </Box>
    </Paper>
  )
}

export default App
