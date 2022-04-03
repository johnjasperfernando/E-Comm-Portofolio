import "./App.css";
import HomePage from "./components/pages/homepage/homepage.component";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ShopPage from "./components/pages/Shop/shoppage.component";
import Header from "./components/header/header.component";
import SingInAndSingUp from "./components/signInAndSingUp/SignInAndSingOut.Component";
import { auth } from "./components/FireBase/FireBase.utill";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentDidWillUnMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shops" element={<ShopPage />} />
          <Route exact path="/singin" element={<SingInAndSingUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
