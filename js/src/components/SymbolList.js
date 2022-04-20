import currencyFormatter from "./CurrencyFormatter.js";

const SymbolList=(props)=>{
    return (
        <div className="stocksymbolhistory">
        <h2>Recent Stocks</h2>

        <ul>
            {
               props.listStocks.map(stock => (
                    <li className="stock-details" key={stock.symbol} data-symbol={stock.symbol}>
                        {stock.symbol}: {currencyFormatter(stock.price)}
            
                    </li>))            
            }
          </ul>
        </div>

        
    );

}

export default SymbolList;