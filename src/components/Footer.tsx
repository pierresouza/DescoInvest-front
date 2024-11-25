import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

import logo from "../assets/logo-footer.svg";

const socialLinks = [
  {
    label: "Facebook",
    Icon: FaFacebookSquare,
    href: "https://www.facebook.com",
  },
  {
    label: "Instagram",
    Icon: FaInstagramSquare,
    href: "https://www.instagram.com",
  },
  { label: "Linkedin", Icon: FaLinkedin, href: "https://www.linkedin.com" },
  { label: "Youtube", Icon: FaYoutube, href: "https://www.youtube.com" },
];

const featuredLinks = [
  {
    label: "Beca AI",
    Icon: TbExternalLink,
    href: "/#beca-ai",
  },
  {
    label: "Simulador de aporte",
    Icon: TbExternalLink,
    href: "/#simulador",
  },
  {
    label: "Carteira inteligente",
    Icon: TbExternalLink,
    href: "/dashboard/carteira",
  },
  {
    label: "Análises estratégicas",
    Icon: TbExternalLink,
    href: "/dashboard/analises",
  },
];

const teamLinks = [
  {
    label: "Founder",
    Icon: TbExternalLink,
    href: "/creditos#",
  },
  {
    label: "Desenvolvedores",
    Icon: TbExternalLink,
    href: "/creditos#desenvolvedores",
  },
  {
    label: "Designers",
    Icon: TbExternalLink,
    href: "/creditos#designers",
  },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-800 w-full h-full pt-8 pb-6">
      <div className="max-w-[900px] w-full mx-auto px-4 mb-16 text-white">
        <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-[repeat(3,auto)] xl:justify-center sm:gap-9 xl:gap-20 justify-items-center sm:justify-items-start">
          <div>
            <img
              src={logo}
              width={230}
              height={89}
              alt="Logo marca da DescoInvest"
              className="xl:mb-12"
            />
            <div className="hidden xl:block space-y-5">
              <h3>Rede sociais</h3>
              <ul className="flex gap-3.5">
                {socialLinks.map(({ href, Icon, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">
                      <Icon size={26} />
                      <span className="sr-only">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 order-2 text-center sm:text-left sm:order-1 xl:hidden">
            <h3>Rede sociais</h3>
            <ul className="flex gap-3.5">
              {socialLinks.map(({ href, Icon, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon size={26} />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:block sm:order-2 xl:order-1">
            <h2 className="mb-9">Funcionalidades</h2>
            <ul className="grid gap-9">
              {featuredLinks.map(({ href, Icon, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="inline-flex underline font-light gap-x-4 justify-start items-center"
                  >
                    {label}
                    <Icon size={18} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 text-center sm:text-left sm:order-3 xl:order-2">
            <h2 className="mb-9">Equipe</h2>
            <ul className="grid gap-9">
              {teamLinks.map(({ href, Icon, label }) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="inline-flex underline font-light gap-x-4 justify-start items-center"
                  >
                    {label}
                    <Icon size={18} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-secondary-400 px-4 text-[10px] leading-normal lg:text-xs lg:font-light max-w-[900px] text-left mx-auto">
        © 2023 Descoinvest. Todos os direitos reservados.
        <br /> <br /> Aviso Legal: A Descoinvest é uma plataforma de
        investimentos que tem o compromisso de fornecer informações precisas e
        confiáveis para nossos usuários. No entanto, lembramos que todas as
        informações apresentadas neste site são apenas para fins informativos e
        educacionais. Não constituem consultoria financeira, e qualquer decisão
        de investimento deve ser baseada em sua avaliação pessoal e
        aconselhamento profissional, se necessário.
      </p>
    </footer>
  );
};

export default Footer;
