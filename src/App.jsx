// import './App.css'
import { Route, Routes } from 'react-router'
// import Electronic from './components/Electronics/Electronic'
import Header from './components/Header/Header'
import ProductSlide from './components/Productslide/ProductSlide'
import Home from './components/Home/Home'
// import View from './components/Cart/Cart'
import Cart from './components/Cart/Cart'
import Shoes from './components/Shoes/Shoes'
import Shirt from './components/Shirt/Shirt'
import Suit from './components/Suit/Suit'
import SignUp from './components/Sign up/Signup'
import SingIn from './components/Signin/signin'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Product' element={<ProductSlide />}></Route>
        <Route path='/shoes' element={<Shoes />}></Route>
        <Route path='/shirt' element={<Shirt />}></Route>
        <Route path='/suit' element={<Suit />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/signin' element={< SingIn/>}></Route>



        {/* <Route path='/view' element={<View/>}></Route> */}
        {/* <Route path='/edit' element={<Edit/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
