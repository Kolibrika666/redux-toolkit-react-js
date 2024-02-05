import { Paper } from "@mui/material";
import Header from "./components/Header";
import Galery from "./pages/galery/App";

function App() {
  return (
    <>
      {" "}
      <Paper elevation={0} mb={3}>
        <Header />
      </Paper>
      <Paper elevation={0} mb={3}>
        <Galery />
      </Paper>
    </>
  );
}

export default App;
