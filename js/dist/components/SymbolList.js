import currencyFormatter from "./CurrencyFormatter.js";

var SymbolList = function SymbolList(props) {
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "stocksymbolhistory"
    },
    /*#__PURE__*/
    React.createElement("h2", null, "Recent Stocks"),
    /*#__PURE__*/
    React.createElement("ul", null, props.listStocks.map(function (stock) {
      return (
        /*#__PURE__*/
        React.createElement("li", {
          className: "stock-details",
          key: stock.symbol,
          "data-symbol": stock.symbol
        }, stock.symbol, ": ", currencyFormatter(stock.price))
      );
    })))
  );
};

export default SymbolList;