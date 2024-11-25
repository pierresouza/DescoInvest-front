import { Link } from "react-router-dom";
import logoDesktop from "../../assets/logoInsidePages.svg";
import GoBackArrow from "../../assets/go-back.svg";

export const Logo = () => {
  const navigateBack = () => history.go(-1);

  return (
    <>
      <Link to="/" className="absolute top-12 left-16 hidden xl:block">
        <img
          src={logoDesktop}
          alt="Logo da DescoInvest: Uma plataforma de investimentos inovadora com foco em inteligência artificial."
        />
      </Link>
      {/* MOBILE VERSION BELOW */}
      <img
        src={GoBackArrow}
        onClick={navigateBack}
        className="xl:hidden absolute top-[60px] left-[10%] "
        alt="Voltar"
      />
      <Link
        to="/"
        className="absolute  top-[60px] right-[50%] translate-x-[50%]  block xl:hidden "
      >
        <img
          src={logoDesktop}
          alt="Logo da DescoInvest: Uma plataforma de investimentos inovadora com foco em inteligência artificial."
        />
      </Link>
    </>
  );
};
