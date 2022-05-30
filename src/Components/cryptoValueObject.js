import Ispis from "./dashboard.js";

export default function CryptoData() {
    const btc = {
        imevalute: "BTC",
        vrijednost: "33280$",
    };
    const eth = {
        imevalute: "ETH",
        vrijednost: "3023$",
    };
    const dog = {
        imevalute: "DOG",
        vrijednost: "0.001$",
    };
    const shib = {
        imevalute: "SHIB",
        vrijednost: "0.05$",
    };
    const sol = {
        imevalute: "SOL",
        vrijednost: "136$",
    };
    const alg = {
        imevalute: "ALG",
        vrijednost: "17$",
    };
    return (
      <div>
        <Ispis btc1={btc} eth1={eth} dog1={dog} shib1={shib} sol1={sol} alg1={alg} />
      </div>
    );
  }