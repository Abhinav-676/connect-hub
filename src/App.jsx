import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Connect from './pages/Connect'

import './index.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>} />
        <Route path='about-us' element={<About/>}/>
        <Route path='connect' element={<Connect/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App