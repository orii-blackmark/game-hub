import Alert from "./components/alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("button clicked")}>My button</Button>
    </div>
  );
}

export default App;
