import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import NextProject from './Components/Projects/NextProject';
import Project1 from './Components/Projects/Project1';
import Project2 from './Components/Projects/Project2';
import Project3 from './Components/Projects/Project3';
import Project4 from './Components/Projects/Project4';
import Project5 from './Components/Projects/Project5';

function App() {
  return (
    <div className="App max-w-screen-2xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/project2' element={<Project2></Project2>}></Route>
        <Route path='/project3' element={<Project3></Project3>}></Route>
        <Route path='/project4' element={<Project4></Project4>}></Route>
        <Route path='/project5' element={<Project5></Project5>}></Route>
        <Route path='/nextProject' element={<NextProject></NextProject>}></Route>
      </Routes>
    </div>
  );
}

export default App;
