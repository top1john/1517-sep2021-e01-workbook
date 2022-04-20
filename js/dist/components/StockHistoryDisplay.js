import currencyFormatter from "./CurrencyFormatter.js";

var StockHistoryDisplay = function StockHistoryDisplay(props) {
  React.useEffect(function () {}, [props.stockHistory]);
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null, props.stockHistory.map(function (day) {
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: "day-details",
          key: day.date
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: "date"
        }, "Date: ", day.date),
        /*#__PURE__*/
        React.createElement("div", {
          className: "details"
        }, "Open: ", currencyFormatter(day.open), ", High: ", currencyFormatter(day.high), ", Low: ", currencyFormatter(day.low), ", Close: ", currencyFormatter(day.close)))
      );
    }))
  );
};

export default StockHistoryDisplay;