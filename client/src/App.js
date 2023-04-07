import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login';



function App() {
  return (
    <BrowserRouter>
    <Navigation

    />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/register" exact   element={<Register/>}/>
      <Route path="/login" exact element={<Login/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
