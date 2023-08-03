import { lazy } from "react";
import LazyImgLoad from "./LazyImgLoad/LazyImgLoad";
import Loading from "./Loading/Loading";
import MainContact from "./Contact/MainContact";

const ShopCartItem = lazy(() => import('./ShopCart/ShopCartItem'))
const ShopItem = lazy(() => import('./ShopItem/ShopItem'))
const ImageSlider = lazy(() => import('./ImageSlide/ImageSlider'))
const BuyItem = lazy(() => import('./BuyItem/BuyItem'))
// const MainContact = lazy(() => import('./Contact/MainContact'))
const QuesContact = lazy(() => import('./Contact/QuesContact'))
const LoginSetion = lazy(() => import('./AuthPage/LoginSetion'))
const SignUpPage = lazy(() => import('./AuthPage/SignUpPage'))
const ProductSlider = lazy(() => import('./ProductSlider/ProductSlider'))

export {
      BuyItem,
      ImageSlider,
      MainContact,
      QuesContact,
      ShopCartItem,
      ShopItem,
      SignUpPage,
      LoginSetion,
      ProductSlider,
      LazyImgLoad,
      Loading
}