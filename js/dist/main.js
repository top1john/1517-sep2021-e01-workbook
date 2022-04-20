function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Lab4A - Hung Yi Yang
import StockSearchForm from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js";
import SymbolList from "./components/SymbolList.js";
import { Stock } from "./stock.js";

var App = function App() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      stockSymbol = _React$useState2[0],
      setStockSymbol = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      stockList = _React$useState4[0],
      setStockList = _React$useState4[1];

  React.useEffect(function () {}, [stockSymbol]);
  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h1", null, "Assignment 4"),
    /*#__PURE__*/
    React.createElement(StockSearchForm, {
      setStockSymbolCallback: setStockSymbol
    }),
    /*#__PURE__*/
    React.createElement(StockPriceDisplay, {
      stock: new Stock({
        symbol: stockSymbol
      }),
      stockItemList: stockList,
      setStockListCallback: setStockList
    }),
    /*#__PURE__*/
    React.createElement(SymbolList, {
      listStocks: stockList
    }))
  );
};

var reactContainer = document.querySelector("#react-container");
ReactDOM.render(
/*#__PURE__*/
React.createElement(App, null), reactContainer);