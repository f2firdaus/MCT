
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';



function App() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
      setColor(color=>!color);
          
      }


  return (
    <>
      <div style={{backgroundColor:color?"#042743":"",color:color?"white":"black"}} className="top"  >
      <Header changecolor={changeColor} />
        <Main />
        </div>
    </>
  );
}

export default App;
