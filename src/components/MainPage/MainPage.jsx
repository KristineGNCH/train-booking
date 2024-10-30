import { HashLink } from "react-router-hash-link";

import Header from "../../components/Header/Header";
import AboutUs from "./AboutUs";
import HowItsWork from "./HowItsWork";
import Feedbacks from "./Feedbacks";
import Footer from "../Footer/Footer";
import './MainPage.css'

export default function MainPage() {

  return (
    <>
      <Header />
      <main className="main">
              <AboutUs />
              <HowItsWork />
              <Feedbacks />
      </main>
      <Footer />
    </>
  );
}