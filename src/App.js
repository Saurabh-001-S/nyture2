import './App.css';
import { Navbar, Footer, Shop, ShoppingCart, Home, BuyNow, Contact } from "./Components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
            </Routes>
            <Footer />
         </div>
      </Router>
   );
}

export default App;
