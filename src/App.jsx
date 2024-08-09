import { Container } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import QrCodeComp from "./Components/QrCodeComp";

function App() {
  return (
    <>
      <Header />
      <Container>
        <QrCodeComp />
      </Container>
    </>
  );
}

export default App;
