import { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import {Footer} from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
     <Footer></Footer>
    </div>
  );
}

export default App;
