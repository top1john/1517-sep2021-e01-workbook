//Lab4A - Hung Yi Yang

import StockSearchForm  from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js";
import SymbolList from "./components/SymbolList.js";
import { Stock } from "./stock.js";


const App=()=>{
    const[stockSymbol,setStockSymbol]=React.useState("")
    const[stockList,setStockList] = React.useState([]);

    React.useEffect(()=>{
    },[stockSymbol])

    return (
        <div>
            <h1>
                Assignment 4
            </h1>
            <StockSearchForm setStockSymbolCallback={setStockSymbol}/>
            <StockPriceDisplay 
                stock={new Stock({symbol:stockSymbol})} 
                stockItemList={stockList}
                setStockListCallback={setStockList}
                />

            <SymbolList listStocks = {stockList} />
        </div>
    );
}


let reactContainer = document.querySelector("#react-container");
ReactDOM.render(<App/>, reactContainer);