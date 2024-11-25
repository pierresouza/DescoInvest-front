import { Card } from "../components/CardTeam";
import Footer from "../components/Footer";
import { Navbar } from "../components/NavBar";
import { TeamSlider } from "../components/TeamSlider";
import { members_design, members_dev } from "../data/membersInfo";

const Credits = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container sm:px-6 mb-32">
        <h1 className="mt-14 text-[1.375rem] font-medium text-center leading-normal mb-16 xl:text-[2rem] xl:text-left">
          Dê um <span className="text-primary-500">Alô!</span> as mentes
          brilhantes deste projeto.
        </h1>

        <div className="sm:hidden ">
          <div className="mb-12 relative">
            <h2 className="text-center text-[1.375rem] leading-normal sm:text-left">
              Equipe de design
            </h2>
            <TeamSlider members={members_design} />
          </div>

          <div className="relative">
            <h2 className="text-center text-[1.375rem] leading-normal sm:text-left">
              Equipe de desenvolvimento
            </h2>
            <TeamSlider members={members_dev} />
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="mt-12">
            <h3 className="text-secondary-800 text-center xl:text-left font-default text-2xl font-normal leading-normal">
              Equipe de design
            </h3>
            <div className="mt-12 grid grid-cols-[auto_auto] justify-center gap-[1.125rem] xl:grid-cols-3 xl:gap-9 xl:max-w-[1000px]">
              {members_design.map((member) => {
                return (
                  <Card
                    {...member}
                    key={member.name}
                    className={
                      member.name !== "Victor Hugo" ? "shadow-sm" : undefined
                    }
                  />
                );
              })}
            </div>
          </div>
          <div>
            <div className="container mt-12">
              <h3 className="text-secondary-800 text-center xl:text-left font-default text-2xl font-normal leading-normal">
                Equipe de desenvolvedores
              </h3>
              <div className="mt-12 grid grid-cols-[auto_auto] justify-center gap-[1.125rem] xl:grid-cols-3 xl:gap-9 xl:max-w-[1000px]">
                {members_dev.map((member) => {
                  return (
                    <Card
                      {...member}
                      key={member.name}
                      className={
                        member.name !== "Jonathan Rodrigo"
                          ? "shadow-sm"
                          : undefined
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Credits;
