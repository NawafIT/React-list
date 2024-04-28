import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const list = ["Jeddah", "Makkah", "Riyadh", "Yanbu"];
  const handleClick = (item:string) =>{
    console.log(item)
  }
  return (
    <>
      <ListGroup items={list} heading={"Cities"} onSelectItem={handleClick} />
    </>
  );
}

export default App;
