import './App.css';
import { Navbar, Footer, Shop, ShoppingCart, Home, BuyNow, Contact, Account, Login, Search } from "./Components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
   // console.log = () => { }
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route exact path='/shop' element={<Shop />} />
               <Route exact path='/shopCart' element={<ShoppingCart />} />
               <Route exact path='/buy' element={<BuyNow />} />
               <Route exact path='/contact' element={<Contact />} />
               <Route exact path='/userinfo' element={<Account />} />
               <Route exact path='/login' element={<Login />} />
               <Route exact path='/search' element={<Search />} />
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
