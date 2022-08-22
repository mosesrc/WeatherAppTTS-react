import React, { Component } from "react";
import "./App.css";
import Header from "./components/HeaderComponent/header";
import Footer from "./components/FooterComponent/Footer";
import NewAccountForm from "./components/NewAccountForm_Component/NewAccountForm";
import LoginForm from "./components/LoginComponent/LoginForm";
import PageView from "./components/PageViewComponent/page-view";
import MobileNav from "./components/MobileNavComponent/mobile-nav";

class App extends Component {
  render() {
    return (
      <div className='position-relative'>
        <MobileNav />
        <Header />
        <PageView />
      </div>
    );
  }
}

export default App;

/* ---📌 COMMENT---: Just for production purposes  */
// ✅: Sign up And Login Forms
/*
        <div>
          <NewAccountForm />
          <LoginForm />
        </div>
 */

// ✅: Footer
// <Footer />
