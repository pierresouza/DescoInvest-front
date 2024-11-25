import { Navbar } from "../components/NavBar";
import { Hero } from "../ladingPage/Hero";
import { SecondPart } from "../ladingPage/SecondPart";
import { ThirdPart } from "../ladingPage/ThirdPart";
import Footer from "../components/Footer";
import { CookiesNotice } from "../components/CookiesNotice";
import { FourthPart } from "../ladingPage/FourthPart";
import { FifthPart } from "../ladingPage/FifthPart";

const LandingPage = () => {
  return (
    <>
      <CookiesNotice />
      <Navbar />
      <Hero />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart />
      <Footer />
    </>
  );
};

export default LandingPage;
