function CryptoTicker() {
  const topTicker = [
    "24/7 Expert Assistance Available",
    "Trusted by 14M+ Users Worldwide",
    "Instant Support for All Major Digital Wallet Platforms",
    "24/7 Expert Assistance Available",
    "Trusted by 14M+ Users Worldwide",
  ];

  const bottomTicker = [
    { coin: "BTC", price: "$77,251", change: "-0.37%" },
    { coin: "ETH", price: "$2,113", change: "-0.92%" },
    { coin: "SOL", price: "$85.85", change: "+0.99%" },
    { coin: "BNB", price: "$649.54", change: "+0.83%" },
    { coin: "XRP", price: "$1.37", change: "-0.48%" },
    { coin: "ADA", price: "$0.2471", change: "-1.04%" },
  ];

  return (
    <div className="bg-[#101c36] border-y border-[#223454] overflow-hidden">
      {/* TOP LINE */}
      <div className="ticker-wrapper border-b border-[#223454]">
        <div className="ticker-track">
          {[...topTicker, ...topTicker].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-[#c7d2e4] min-w-max text-sm"
            >
              <span className="text-cyan-400">◆</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[...bottomTicker, ...bottomTicker].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-white min-w-max"
            >
              <span className="font-semibold">{item.coin}</span>

              <span className="text-gray-400">{item.price}</span>

              <span
                className={
                  item.change.includes("+") ? "text-green-400" : "text-red-400"
                }
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoTicker;
