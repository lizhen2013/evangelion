import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import { Alert } from "./components/Alert/alert";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert("Hello");
          }}
        >
          hello
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
          Hello
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Hello
        </Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com">
          Baidu Link
        </Button>

        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>
          Baidu Link
        </Button>
        <Alert title={"This is Alert Title"}></Alert>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
