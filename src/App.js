import React, { Component } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/header";
import NewAccountForm from "./components/NewAccountForm_Component/NewAccountForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewAccountForm />
      </div>
    );
  }
}

export default App;
