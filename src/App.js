import React, { Component } from "react";
import ContactCard from "./ContactCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <ContactCard
          name="Nora"
          mobile="2125555555"
          work="8002222222"
          email="hello@example.com"
        />
        <ContactCard
          name="Banana"
          mobile="7185555555"
          work="7182222222"
          email="itsme@example.org"
        />
        <ContactCard
          name="Pineapple"
          mobile="3475555555"
          work="5552222222"
          email="goodbye@example.com"
        />
      </>
    );
  }
}

export default App;