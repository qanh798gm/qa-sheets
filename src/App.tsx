import "./App.css";
import { Header } from "./components/sheets/Header";
import { FormulaBar } from "./components/sheets/FormulaBar";
import { Rows } from "./components/sheets/body/Rows";

function App() {
  return (
    <>
      <Header />
      <FormulaBar />
      <Rows rowNumber={30} />
    </>
  );
}

export default App;
