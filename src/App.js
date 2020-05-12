import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile.component';
import Help from './pages/help.component';
import Header from './layout/header.component';
import Sidebar from './layout/sidebar.component';
import Footer from './layout/footer.component';
import Main from './layout/main.component';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Sidebar/>
       <Main/>
      <Footer/>
     
    </div>
  );
}

export default App;
