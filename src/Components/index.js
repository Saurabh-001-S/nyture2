import "./ShopCart/shoppingcart.css";
import './Contact/contact.css';
import './Account/account.css';
import './Navbar/navbar.css';
import './Footer/footer.css';
import './BuyNow/buyNow.css';
import { lazy } from 'react';
import './Search/search.css'
import './Login/login.css';
import './Home/home.css';
import './Shop/shop.css'

const ShoppingCart = lazy(() => import('./ShopCart/ShoppingCart'));
const Contact = lazy(() => import('./Contact/Contact'));
const Account = lazy(() => import('./Account/Account'));
const Navbar = lazy(() => import('./Navbar/Navbar'));
const Footer = lazy(() => import('./Footer/Footer'));
const BuyNow = lazy(() => import('./BuyNow/BuyNow'));
const Search = lazy(() => import('./Search/Search'));
const Login = lazy(() => import('./Login/Login'));
const Shop = lazy(() => import('./Shop/Shop'));
const Home = lazy(() => import('./Home/Home'));

export {
      ShoppingCart,
      Account,
      Contact,
      Navbar,
      Footer,
      BuyNow,
      Search,
      Login,
      Shop,
      Home
};
