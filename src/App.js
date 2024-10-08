import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import ShowHideButton from "./ShowHideButton";
import TaskContainer from "./TaskContainer";
import InfoButton from "./InfoButton";

function App() {
  const [showDescriptions, setShowDescriptions] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>NEWTODO</h1>
      </header>

      <body className="App-body">
        <Stack direction="column" justifyContent="start">
          <InfoButton />
          <ShowHideButton
            showDescriptions={showDescriptions}
            setShowDescriptions={setShowDescriptions}
          />
          <br></br>
          <TaskContainer extended={showDescriptions} />
        </Stack>
      </body>
    </div>
  );
}

export default App;
