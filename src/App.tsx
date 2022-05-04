import React from 'react';
import './styles/App.scss';
import Header from "./pages/header"
import Stories from "./pages/stories"
import Chat from "./pages/Chat"
import Tabs from "./pages/Tabs"
function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Chat />
      <Tabs />
  
    </div>
  );
}

export default App;
