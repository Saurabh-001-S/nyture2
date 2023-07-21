import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import {
   Navbar,
   Footer,
   ShoppingCart,
   Shop,
   Home,
   BuyNow,
   Contact,
   Account,
   Login,
   Search,
} from "./Components/index";
import { Loading } from "./Constant/index";

function App() {
   return (
      <Router>
         <div className="App">
            <Suspense fallback={<Loading />}>
               <Navbar />
               <Routes>
                  <Route exact path="/shopCart" element={<ShoppingCart />} />
                  <Route exact path="/userinfo" element={<Account />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/search" element={<Search />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/buy" element={<BuyNow />} />
                  <Route exact path="/shop" element={<Shop />} />
                  <Route path="/" element={<Home />} />
               </Routes>
               <Footer />
            </Suspense>
         </div>
      </Router>
   );
}

export default App;

