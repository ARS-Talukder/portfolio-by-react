import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App max-w-7xl mx-auto" style={{"backgroundColor":"#3D4451"}}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
