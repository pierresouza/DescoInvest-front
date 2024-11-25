import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { cn } from "../../../functions/twMerge";
import { FaCoins } from "react-icons/fa";
import { GoHome, GoPeople } from "react-icons/go";
import { LuWallet } from "react-icons/lu";
import { SlPresent } from "react-icons/sl";
import { RxExit } from "react-icons/rx";
import { PiChartBarHorizontal, PiCurrencyCircleDollar } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthUser } from "../../../zustand/user";

const sidebarLinks = [
  { href: "/dashboard", label: "Página inicial", icon: GoHome },
  { href: "wallet", label: "Carteira", icon: LuWallet },
  {
    href: "/dashboard/funds",
    label: "Fundos",
    icon: PiChartBarHorizontal,
  },
  {
    href: "/dashboard/subscriptions",
    label: "Assinaturas",
    icon: PiCurrencyCircleDollar,
  },
  {
    href: "/dashboard/indications",
    label: "Indique e ganhe",
    icon: SlPresent,
  },
  { href: "/dashboard/community", label: "Comunidade", icon: GoPeople },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();
  const handleLogoutUser = useAuthUser((store) => store.handleLogoutUser);
  const refresh = useAuthUser((store) => store.refresh);

  const handleExpandedSidebar = () => setIsExpanded((prevState) => !prevState);

  const handleLogout = async () => {
    try {
      const result = await handleLogoutUser(refresh);
      navigate("/login");
      console.log(result);
    } catch (error) {
      alert("Algo deu errado, por favor tente novamente mais tarde");
      console.log(error);
    }
  };

  return (
    <aside
      className={cn(
        "bg-white pt-9 relative transition-all duration-300 hidden flex-col md:flex",
        isExpanded ? "w-[17.5rem]" : "w-20",
      )}
    >
      <button
        onClick={handleExpandedSidebar}
        className={cn(
          "bg-white transition-transform duration-500 text-secondary-700 shadow-[1px_1px_8px_#0000001A] rounded-full h-6 w-6 flex items-center justify-center absolute -right-3 top-1/2",
          !isExpanded && "rotate-180",
        )}
      >
        <BiLeftArrowAlt aria-hidden />
      </button>

      <header className="flex items-center px-4 overflow-hidden">
        <div className="min-w-[64px]">
          <img
            src="https://fakeimg.pl/48x48"
            alt="Profile image"
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>

        <div className="whitespace-nowrap text-secondary-800">
          <p>Fulano</p>
          <p className="flex items-center mt-2 gap-2 text-sm">
            0 Pontos
            <i className="text-warning-300" aria-hidden>
              <FaCoins size={10} />
            </i>
          </p>
        </div>
      </header>

      <nav className="px-4 mt-9 flex-1">
        <ul className="space-y-6">
          {sidebarLinks.map(({ href, icon: Icon, label }) => (
            <li
              key={href}
              className="h-[46px] rounded-[10px] flex items-center whitespace-nowrap overflow-hidden"
            >
              <NavLink
                to={href}
                className="flex items-center h-full flex-1 bg-secondary-200/20 text-secondary-700 transition-colors hover:bg-secondary-300/70 [&.active]:bg-primary-100/20 [&.active]:text-primary-500"
                end
              >
                <i className="min-w-[64px] flex items-center pl-3">
                  <Icon size={24} />
                </i>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <hr className="border-secondary-300" />

      <footer className="px-4 py-4 flex flex-col gap-6 whitespace-nowrap overflow-hidden">
        <button
          onClick={handleLogout}
          className="flex items-center h-[46px] bg-secondary-200/20 text-secondary-700 transition-colors hover:bg-secondary-300/70 rounded-[10px]"
        >
          <i className="min-w-[64px] flex items-center pl-3">
            <RxExit size={24} />
          </i>
          Sair
        </button>
      </footer>
    </aside>
  );
}
