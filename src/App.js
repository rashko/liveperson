import React from "react";
import { observer } from "mobx-react";
import Header from "./components/header";
import Form from "./components/form";
import Success from "./components/success";
import Fail from "./components/fail";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = observer(props => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Form store={props.store} />} />
        <Route path="/success" render={() => <Success store={props.store} />} />
        <Route path="/fail" render={() => <Fail store={props.store} />} />
      </div>
    </Router>
  );
});

export default App;
