import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import { Alert } from "./components/Alert/alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu
          mode={"vertical"}
          onSelect={(index) => {
            alert(index);
          }}
        >
          <MenuItem index={1}>1</MenuItem>
          <MenuItem index={2} disabled>
            2
          </MenuItem>
          <MenuItem index={3}>3</MenuItem>
        </Menu>
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
