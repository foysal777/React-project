
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './componets/Pages/Home'
import Blog from './componets/Pages/Blog'
import Service from './componets/Pages/Service'
import Error from './componets/Pages/Error'
import Navbar from './componets/Pages/Navbar'

function App() {


  return (
    <>

      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/home' element = {<Home></Home> }> </Route>
          <Route path='/blog' element = {<Blog></Blog>} ></Route>
          <Route path='/service'  element={<Service></Service>} > </Route>
          <Route path='*' element = {<Error></Error>} ></Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
