import React,{Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './pages/profile.component';
import Help from './pages/help.component';
import Header from './layout/header.component';
import Sidebar from './layout/sidebar.component';
import Footer from './layout/footer.component';
import Main from './layout/main.component';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <div className="wrapper">
        <Suspense fallback={<Loader />}>
       <Header/>
      <Sidebar/>
       <Main/>
      <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
