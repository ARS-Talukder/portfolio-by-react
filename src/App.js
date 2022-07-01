import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs';
import Header from './Components/Header';
import Home from './Components/Home';
import NextProject from './Components/NextProject';
import Project1 from './Components/Project1';
import Project2 from './Components/Project2';
import Project3 from './Components/Project3';

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto" style={{"backgroundColor":"#3D4451"}}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/project2' element={<Project2></Project2>}></Route>
        <Route path='/project3' element={<Project3></Project3>}></Route>
        <Route path='/nextProject' element={<NextProject></NextProject>}></Route>
      </Routes>
    </div>
  );
}

export default App;
