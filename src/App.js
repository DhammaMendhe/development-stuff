import './App.css';
import Alert from './componets/Alert';
import Navbar from './componets/Navbar';
import Home from './componets/Home'
import News from './componets/News'
import About from './componets/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nothing from './componets/Nothing';
import NewsState from './context/NewsState';
import { useState } from 'react';
import Singlenews from './componets/Singlenews';
import NewsItem from './componets/NewsItem';
function App() {

  const [alert, setalert] = useState(null);
  const showalert = (type, msg) => {

    setalert({
      message: msg,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  return (
    <div className="App">
      <NewsState>
        <Router>
          <Navbar />
          <Alert Alert={alert} />
          <Routes>
            <Route path="/" element={<Home showalert={showalert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />}/>
              {/* <Route path="/NewsItem" element={< NewsItem />} > */}

                {/* <Route path="/Singlenews" element={< Singlenews />} /> */}
              {/* </Route> */}
              <Route path="/Singlenews" element={< Singlenews />}/> 
            <Route path='nothing' element={<Nothing />} />
          </Routes>
        </Router>
      </NewsState>
    </div>

  );
}

export default App;
