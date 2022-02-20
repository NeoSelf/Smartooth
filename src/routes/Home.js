import NewHeader from '../components/NewHeader'
import KickStarter from "../components/KickStarter";
import MainVanner from "../components/MainVanner";
import Subtitle from "../components/Subtitle";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import HomeCSS from "./Home.module.css";
import MobileApp from "../components/Product/MobileApp";

function Home() {
  return (
    <div className={HomeCSS.base}>
      <div className={HomeCSS.ref}>
        {/* <img src="img/Home.png" alt="ex" /> */}
      </div>
      <div>
        <NewHeader />
        <div className={HomeCSS.content}>
          <MainVanner />
          <KickStarter />
          <Subtitle text="It really is this simple" />
          <Steps />
          <Subtitle text="Mobile application" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MobileApp />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
