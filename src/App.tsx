import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false) }>
          <strong>Holy Fuck!</strong> You should check this
        </Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
