import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Users from "./views/Users.js";
import Contact from "./views/Contact.js";
import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.app}>
        <Route path="/" exact component={Users} />
        <Route path="/contact" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
