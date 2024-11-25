import FirstPlace from "../assets/ranking-ouro.png";
import SecondPlace from "../assets/ranking-prata.png";
import ThirdPlace from "../assets/ranking-bronze.png";

export function TopTenSmartInvestors() {
  interface Top10Item {
    posicao: string;
    imagem?: string;
    backgroundColor: string;
    numero?: string;
  }

  const data: Top10Item[] = [
    { posicao: "Lady", imagem: FirstPlace, backgroundColor: "#fff6dd" },
    { posicao: "Rihanna", imagem: SecondPlace, backgroundColor: "#eaeef2" },
    { posicao: "Madonna", imagem: ThirdPlace, backgroundColor: "#f8ece4" },
    { posicao: "Michael", numero: "4°", backgroundColor: "#fff8f2" },
    { posicao: "Pedro", numero: "5°", backgroundColor: "#fff8f2" },
    { posicao: "Freddy", numero: "6°", backgroundColor: "#fff8f2" },
    { posicao: "Axel", numero: "7°", backgroundColor: "#fff8f2" },
    { posicao: "Claudia", numero: "8°", backgroundColor: "#fff8f2" },
    { posicao: "Fernanda", numero: "9°", backgroundColor: "#fff8f2" },
    { posicao: "joão", numero: "10°", backgroundColor: "#fff8f2" },
  ];

  return (
    <div className="flex items-center justify-center background: var(--secundary-color-secundary-100, #FFF);">
      <div className="flex justify-center items-center w-[360px] h-[611px] border rounded-3xl">
        <div className="w-[328px]">
          <p className="flex justify-center">
            Top 10 investidores inteligentes
          </p>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <span className="flex items-center border h-9 mb-4 mt-4 rounded-lg ">
                  {item.imagem ? (
                    <img
                      src={item.imagem}
                      alt={`Item ${item.posicao}`}
                      className="flex items-center justify-center w-6 h-6 mr-2 ml-1"
                    />
                  ) : (
                    <span className="flex items-center justify-center h-6 w-6 text-[10px] bg-orange-500 mr-2 ml-1 rounded-3xl text-sky-50">
                      {item.numero}
                    </span>
                  )}
                  <span className="flex items-center justify-center ">
                    {item.posicao}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
