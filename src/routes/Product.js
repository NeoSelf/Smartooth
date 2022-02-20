import NewHeader from '../components/NewHeader'
import ProductCSS from "./Product.module.css";
import Subtitle from "../components/Subtitle";
import WhatIsSmartooth from "../components/Product/WhatIsSmartooth";
import Explanation from "../components/Product/Explanation";
import GuideVideo from "../components/Product/GuideVideo";
import Cradle from "../components/Product/Cradle";
import Footer from "../components/Footer";
function Product() {
  return (
    <div className={ProductCSS.content}>
      <div className={ProductCSS.ref}>
        {/* <img src="img/Product.png" alt="ex" /> */}
      </div>
      <NewHeader />
      <br />
      <WhatIsSmartooth />
      <Explanation />
      <Subtitle text="How to use Smartooth?" />
      <GuideVideo />
      <Subtitle text="Cradle" />
      <Cradle />
      <Footer />
    </div>
  );
}
export default Product;
