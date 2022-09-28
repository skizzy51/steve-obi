import { Route, Routes } from "react-router-dom";
import { BettingBackend } from "./pages/Betting-backend";
import { EdenSupermarket } from "./pages/Eden-supermarket";
import { Home } from "./pages/Home";
import { ShoppingBackend } from "./pages/Shopping-backend";
import { SteveBetting } from "./pages/Steve-betting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/eden-supermarket" element={ <EdenSupermarket/> }/>
        <Route path="/steve-betting" element={ <SteveBetting/> }/>
        <Route path="/shopping-backend" element={ <ShoppingBackend/> }/>
        <Route path="/betting-backend" element={ <BettingBackend/> }/>
      </Routes>
    </>
  );
}

export default App;
