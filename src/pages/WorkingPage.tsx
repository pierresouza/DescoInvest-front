import { Link, useNavigate } from "react-router-dom";
import { Working } from "../components/Working";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useAuthUser } from "../zustand/user";

const WorkingPage = () => {
  const handleLogoutUser = useAuthUser((store) => store.handleLogoutUser);

  const navigate = useNavigate();
  const getRefreToken = () => {
    const tokenResult = localStorage.getItem("access");
    if (tokenResult) return JSON.parse(tokenResult);
  };

  const handleLogout = async (refreshToken: string) => {
    try {
      const result = await handleLogoutUser(refreshToken);
      navigate("/");
      console.log(result);
    } catch (error) {
      alert("Algo deu errado, por favor tente novamente mais tarde");
      console.log(error);
    }
  };

  const { refresh } = getRefreToken().state;

  return (
    <div className="h-screen flex justify-center items-center">
      <Link
        className="hover:text-primary-600 text-primary-black font-medium flex items-center
         gap-2 absolute top-5 left-5 text-secondary-700"
        to="/"
      >
        <AiOutlineArrowLeft />
        Voltar para Home
      </Link>
      <button
        onClick={() => handleLogout(refresh as string)}
        className="hover:text-primary-600 text-primary-black font-medium flex text-lg items-center
         gap-2 absolute top-5 right-5 text-secondary-700"
      >
        <LuLogOut />
        Logout
      </button>
      <Working />
    </div>
  );
};

export default WorkingPage;
