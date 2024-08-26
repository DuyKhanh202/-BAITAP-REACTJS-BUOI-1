import React from 'react';

import BaiTapThucHanhLayout from './components';
import Header from './components/header';
import Banner from './components/banner';
import ListItem from './components/list-item';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BaiTapThucHanhLayout />
      <Header />
      <Banner />
      <ListItem />
      <Footer />
    </div>
  );
}

export default App;
