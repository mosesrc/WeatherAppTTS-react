import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 📝: FETCHES

// 📝: COMPONENTS
import Header from './components/HeaderComponent/header';
import Footer from './components/FooterComponent/Footer';
import NewAccountForm from './components/NewAccountForm_Component/NewAccountForm';
import LoginForm from './components/LoginComponent/LoginForm';
import PageView from './components/PageViewComponent/page-view';
// import MobileNav from './components/MobileNavComponent/mobile-nav';

class App extends Component {
  render() {
    return (
      <div className="position-relative">
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/create_account" element={<NewAccountForm />} />
            <Route path="/page_view/*" element={<PageView />} />
          </Routes>
        </Router>
        <Footer />
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

// ✅: Other Completed components
/*
<MobileNav />
<PageView />
<NewAccountForm />
*/
