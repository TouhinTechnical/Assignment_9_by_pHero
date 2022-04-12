import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Review from './component/Review/Review';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';
import Error404 from './component/Error404/Error404';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<Error404/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
