import pageNotFound from "../src/assets/pageNotFound.svg";

export const PageNotFound = () => {
  return (
    <>
      <div className="flex h-full items-center justify-center p-20">
        <img src={pageNotFound} alt="#" />
      </div>
      <div className="flex h-full items-center justify-center">
        <p className="">
          Parece que algo deu errado! Tente{" "}
          <span
            onClick={() => location.reload()}
            className="text-orange-500 underline cursor-pointer"
          >
            recarregar a página.
          </span>
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
