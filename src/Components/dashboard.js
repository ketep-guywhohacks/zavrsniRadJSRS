import "./style.css";
import SlikaBtc from "./btc.png";
import SlikaEth from "./eth.png";
import SlikaAlg from "./alg.png";
import SlikaDog from "./dog.png";
import SlikaShib from "./shib.png";
import SlikaSol from "./sol.png";

export default function dashboard({ btc1, eth1, dog1, shib1, sol1, alg1 }) {
    return (
      <div className="container">
      <div className="upperHeader"><h1>Dobrodosao Jan</h1></div>
      <div className="middle">
      <h2 className="cryptoAssets">Tvoji Favoriti</h2>
          <table className="tableCrypto">
              <tr>
                  <td className="tableLeft"><div className="leftCryptoValue"><img src={SlikaBtc} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{btc1.imevalute}</div><div className="cryptoValue">{btc1.vrijednost}</div></span></div></td>
                  
                  <td className="tableRight"><div className="rightCryptoValue"><img src={SlikaAlg} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{alg1.imevalute}</div><div className="cryptoValue">{alg1.vrijednost}</div></span></div></td>
              </tr>
              <tr>
                  <td className="tableLeft"><div className="leftCryptoValue"><img src={SlikaShib} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{shib1.imevalute}</div><div className="cryptoValue">{shib1.vrijednost}</div></span></div></td>
                  <td className="tableRight"><div className="rightCryptoValue"><img src={SlikaDog} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{dog1.imevalute}</div><div className="cryptoValue">{dog1.vrijednost}</div></span></div></td>
              </tr>
              <tr>
                  <td className="tableLeft"><div className="leftCryptoValue"><img src={SlikaEth} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{eth1.imevalute}</div><div className="cryptoValue">{eth1.vrijednost}</div></span></div></td>
                  <td className="tableRight"><div className="rightCryptoValue"><img src={SlikaSol} className="cryptoImg"/><span className="innerText"><div className="cryptoName">{sol1.imevalute}</div><div className="cryptoValue">{sol1.vrijednost}</div></span></div></td>
              </tr>
          </table>
      <a href="https://www.coinbase.com/" className="botun">Zelis nesto novo? Kupi novu valutu ovdje!</a>
      </div>
      <div className="lowerHeader"><h1>Novosti Iz Crypto Svijeta</h1></div>
      <div className="cryptoNews">
          <div className="newsParagraph">
              <h2 className="newsH">The luna cryptocurrency has been resurrected after its $40 billion collapse.</h2>
              A new version of the collapsed luna cryptocurrency is already live on major exchanges — and it’s gotten off to a bad start.

Last week, supporters of the Terra blockchain project voted to revive luna but not terraUSD, a so-called “stablecoin” that plunged below its intended peg to the dollar, causing panic in the crypto market.

TerraUSD, or UST, is what’s known as an algorithmic stablecoin. It relied on code and a sister token, luna, to maintain a $1 value. But as digital currency prices fell, investors fled the stablecoin, sending UST tumbling — and taking luna down with it.

At its height, the old luna — now known as “luna classic” — had a circulating supply of over $40 billion.

Now, luna has a new iteration, which investors are calling Terra 2.0. It is already trading on exchanges including Bybit, Kucoin and Huobi. Binance, the world’s largest crypto exchange, says it will list luna on Tuesday.

Its launch has not gone well.</div>
          <div className="newsParagraph">
              <h2 className="newsH">Bitcoin Reclaims $30,000 Level as Crypto Market Turns Green</h2>
              After a tumultuous month for the crypto markets, Bitcoin (BTC) was poised to extend its losing streak to a record nine weeks. However, that scenario has been narrowly avoided after the leading cryptocurrency jumped in the late hours on Sunday to hit a seven-day high of $30,723.

Though a modest correction brought Bitcoin down to $30,594 by press time, it is still up 5.5% on the last day, according to CoinMarketCap.

Despite the latest positive sentiment, data from Coinglass shows that Bitcoin is down 18.63% so far this month, following a 17.3% loss in gains in April. The major question now is whether the industry's largest asset can maintain its momentum after the latest price action.

According to a recent report by CoinShares, the recent collapse of the TerraUST stablecoin has seen investors favoring Bitcoin, with as many as 39% of respondents saying the benchmark cryptocurrency has the most compelling growth outlook.

"Markets are long overdue for a relief rally," Hayden Hughes, CEO of social media trading platform Alpha Impact, told Bloomberg. "Bitcoin just went through eight consecutive weeks in red territory and got technically oversold to levels we traditionally only see at the bottom of bear markets."</div>
          <div className="newsParagraph">
              <h2 className="newsH">$60 billion collapse of major cryptocurrency is not the industry’s Bear Stearns moment — senators and regulators explain why</h2>
              WASHINGTON — It’s been a brutal few weeks for the crypto market.

Half a trillion dollars was wiped off the sector’s market cap as terraUSD, one of the most popular U.S. dollar-pegged stablecoins, imploded virtually overnight.

Meanwhile, digital coins such as ether continue to take a beating on the price charts, as the sell-off keeps hammering the industry.

Some investors have called the events of the last month a Bear Stearns moment for crypto, comparing the contagion effect of a failed stablecoin project to the fall of a major Wall Street bank that ultimately foretold the 2008 mortgage debt and financial crisis.

“It really revealed some deeper vulnerabilities in the system,” said Michael Hsu, acting Comptroller of the Currency for the U.S. Treasury Department.

“Clearly, you saw contagion, not just from terra to the broader crypto ecosystem, but to tether, to other stablecoins, and I think that’s something that wasn’t assumed. And I think that’s something people have to really pay attention to.”

But so far, government officials don’t seem to be worried about a crypto crash taking down the broader economy.</div>
      </div>
      </div>
    );
  }