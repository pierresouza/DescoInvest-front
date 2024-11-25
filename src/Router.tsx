import { ReactNode, lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import App from "./App";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";
import LandingPage from "./pages/LandingPage";
import LinkSent from "./pages/LinkSent";
import Credits from "./pages/Credits";
import RedefinePassword from "./pages/RedefinePassword";
import Privacity from "./pages/PoliticPrivacy";
import Home from "./pages/dashboard/home";

import { Wallet } from "./pages/dashboard/wallet";
import { Funds } from "./pages/dashboard/funds";
import { Subscriptions } from "./pages/dashboard/subscriptions";
import { Indications } from "./pages/dashboard/indications";
import { Community } from "./pages/dashboard/community";

import { useAuthUser } from "./zustand/user";
import { Loading } from "./components/decorations/Loading";

import PageNotFound from "./PageNotFound";

const Dashboard = lazy(() => import("./components/layouts/dashboard"));

export interface PrivateProps {
  children: ReactNode;
}
export interface LoggedProps extends PrivateProps {}

const Private = ({ children }: PrivateProps) => {
  const isAuth = useAuthUser((store) => store.token);

  if (!isAuth) window.location.replace("/login");
  return isAuth && (children as JSX.Element);
};

const IsLogged = ({ children }: LoggedProps) => {
  const isAuth = useAuthUser((store) => store.token);
  if (isAuth) {
    window.location.replace("/dashboard");
  } else {
    return !isAuth && (children as JSX.Element);
  }
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route
            path="login"
            element={
              <IsLogged>
                <LoginPage />
              </IsLogged>
            }
          />
          <Route path="esqueci-senha" element={<ForgetPassword />} />
          <Route
            path="cadastro"
            element={
              <IsLogged>
                <RegisterPage />
              </IsLogged>
            }
          />
          <Route path="esqueci-senha-confirmacao" element={<LinkSent />} />
          <Route path="creditos" element={<Credits />} />
          <Route path="redefinir-a-senha" element={<RedefinePassword />} />
          <Route path="politica-privacidade" element={<Privacity />} />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={
              <Private>
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              </Private>
            }
          >
            <Route index element={<Home />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="funds" element={<Funds />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="indications" element={<Indications />} />
            <Route path="community" element={<Community />} />
          </Route>

          {/*No assinged*/}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
