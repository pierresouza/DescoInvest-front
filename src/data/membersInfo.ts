import { CardProps } from "../interfaces/ICard";
import victor_hugo from "../assets/image 19.png";
import maria_julia from "../assets/image 18.png";
import jonathan_rodrigo from "../assets/image 21.png";
import augusto_cesar from "../assets/image 20.png";
import marcos_reis from "../assets/image 32.png";
import felipe_daniel from "../assets/image 25.png";
import alice_frança from "../assets/image 24.png";
import andre_frança from "../assets/image 22.png";
import pierre_souza from "../assets/image 33.png";

export const members_design: CardProps[] = [
  {
    photo: victor_hugo,
    office: "Product Design",
    alt: "Vitor Hugo, Fundador e Product Designer na DescoInvest",
    name: "Victor Hugo",
    techs: ["Figma", "Product Discovery", "UX Research", "Design Thinking"],
    description:
      "Victor Hugo é nosso Product Designer, Ele é o mestre por trás dos visuais incríveis e funcionais do projeto. Transformando estratégias em designs elegantes, ele cria interfaces que fazem os olhos brilharem e os cliques fluírem.",
    links: {
      linkedIn: "https://www.linkedin.com/in/vitor-hugo-dev/",
      behance: "https://www.behance.net/victorhugo_design",
    },
    options: {
      highlight: true,
      title: "Co-Founder",
    },
  },
  {
    photo: maria_julia,
    office: "UX/UI Design",
    name: "Maria Julia",
    alt: "Maria Julia, UX UI Designer na DescoInvest",
    techs: ["Figma", "User Centered Design", "UX Writing", "UI Design"],
    description:
      "Maria Julia, nossa UX Designer, coloca os usuários em primeiro lugar. Projetando jornadas perfeitas, com pesquisas aprofundadas e protótipos interativos, ela garante que cada interação seja uma dança suave entre o usuário e a tecnologia.",
    links: {
      linkedIn: "https://www.linkedin.com/in/mariajuliamachadocarneiro/",
      behance: "https://www.behance.net/MariaJuliaMachado",
    },
  },
];

export const members_dev: CardProps[] = [
  {
    photo: jonathan_rodrigo,
    alt: "Jonathan Rodrigo, Fundador e Desenvolvedor FullStack na DescoInvest",
    office: "Desenvolvedor FullStack",
    name: "Jonathan Rodrigo",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Conheça Jonathan, a mente por trás da criação deste projeto inovador e também um desenvolvedor front-end excepcional. Sua visão e habilidades combinadas tornam o projeto um sucesso.",
    links: {
      linkedIn: "https://www.linkedin.com/in/jonathan-rodrigo/",
      github: "https://github.com/JonathanFerreirar",
    },
    options: {
      highlight: true,
      isDev: true,
      title: "Founder",
    },
  },
  {
    photo: augusto_cesar,
    alt: "Augusto César, Desenvolvedor FullStack na DescoInvest",
    office: "Desenvolvedor FullStack",
    name: "Augusto César",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Augusto, nosso desenvolvedor fullstack. Desde a construção de interfaces envolventes até a implementação de funcionalidades complexas no backend, Augusto é movido por desafios.",
    links: {
      linkedIn: "https://www.linkedin.com/in/augusto-cesarti/",
      github: "https://github.com/AugustoTI",
    },
    options: {
      highlight: false,
      isDev: true,
    },
  },
  {
    photo: marcos_reis,
    alt: "Marcos Orlando, Desenvolvedor FullStack na DescoInvest",
    office: "Desenvolvedor FullStack",
    name: "Marcos Reis",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Marcos, apaixonado por criar sistemas coesos e eficazes! Sua capacidade de navegar entre o front-end e o back-end com facilidade é uma prova de sua habilidade técnica abrangente.",
    links: {
      linkedIn: "https://www.linkedin.com/in/marcosorlando/",
      github: "https://github.com/Mnwz",
    },
    options: {
      isDev: true,
    },
  },
  {
    photo: felipe_daniel,
    alt: "Felipe Daniel, Desenvolvedor FullStack na DescoInvest",
    office: "Desenvolvedor FullStack",
    name: "Felipe Daniel",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Felipe, dedicado a construir sistemas versáteis e robustos. Desenvolve soluções inovadoras com excelência. Desde a arquitetura do banco de dados até a criação de interfaces responsivas.",
    links: {
      linkedIn: "https://www.linkedin.com/in/felipehelpnet/",
      github: "https://github.com/felipeHELPNET",
    },
    options: {
      isDev: true,
    },
  },
  {
    photo: alice_frança,
    alt: "Alice França, Desenvolvedora Front-end na DescoInvest",
    office: "Desenvolvedora Front-end",
    name: "Alice França",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Alice, uma desenvolvedora front-end excepcionalmente talentosa. Ela transforma designs complexos em interfaces digitais elegantes e intuitivas.",
    links: {
      linkedIn: "https://www.linkedin.com/in/alicefv/",
      github: "https://github.com/AliceFVidal",
    },
    options: {
      isDev: true,
    },
  },
  {
    photo: andre_frança,
    alt: "Andre França, Desenvolvedor Front-end na DescoInvest",
    office: "Desenvolvedor Front-end",
    name: "Andre França",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "André é um desenvolvedor front-end dedicado, com um olhar afiado para detalhes e usabilidade. Sua habilidade em transformar wireframes em interfaces interativas é notável.",
    links: {
      linkedIn: "https://www.linkedin.com/in/andrecfranca/",
      github: "https://github.com/AndreCFranca",
    },
    options: {
      isDev: true,
    },
  },
  {
    photo: pierre_souza,
    alt: "Pierre Souza, Desenvolvedor Front-end na DescoInvest",
    office: "Desenvolvedor FullStack",
    name: "Pierre Souza",
    techs: ["Typescript", "Tailwind CSS", "React", "Firebase", "Radix UI"],
    description:
      "Pierre, o criador de experiências, dando vida ao front-end com estilo único. Transforma ideias em realidade digital com talento e paixão, fundindo código e criatividade.",
    links: {
      linkedIn: "https://www.linkedin.com/in/pierre-souza-45420217b/",
      github: "https://github.com/pierresouza",
    },
    options: {
      isDev: true,
    },
  },
];
