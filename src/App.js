import React from "react";
import { observer } from "mobx-react";
import Header from "./components/header";
import Title from "./components/title";
import Form from "./components/form";

const App = observer(props => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Form store={props.store} />
    </div>
  );
});

export default App;
