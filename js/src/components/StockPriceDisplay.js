import StockHistoryDisplay from "./StockHistoryDisplay.js";
import currencyFormatter from "./CurrencyFormatter.js";
import StockSymbolHistory from "./StockSymbolHistory.js";

const StockPriceDisplay=(props)=>{

    const [stockData,SetStockData]=React.useState({});

    React.useEffect(()=>{
        props.stock.getStockPrice()
        .then((priceData)=>{
            if(priceData instanceof Object)
            {
                SetStockData({...priceData});
                console.log(stockData);
            }else
            {
                SetStockData({error:priceData})
            }
            
        }).catch((error)=>{
            SetStockData({error:error});
        })
    }, [props.stock])

    React.useEffect(()=>{
    },[ stockData ])

   
    const historyButtonHandler = ()=> {
        props.stock.getStockFiveDayHistory()
        .then((stockDataWithHistory)=>{
            SetStockData({...stockDataWithHistory});
        })
    }

    return(
            <section className="stock-display">
                { stockData.symbol?
                    <React.Fragment>
                        <h1>Stock Viewer</h1>
                        <div className="details">symbol: {stockData.symbol}</div>
                        <div className="details">price: {currencyFormatter(stockData.price)}</div>

                        <StockSymbolHistory 
                            stockObject = {stockData}
                            listStocks={props.stockItemList}
                            setListCallback={props.setStockListCallback}
                        />

                        <div>
                            <button 
                            onClick={historyButtonHandler}
                            className="btn-history">Previous 5 Days</button>
                        </div>
                        <div className="history">
                            {
                                stockData.history &&  
                                <StockHistoryDisplay stockHistory={stockData.history}/>
                            }
                        </div>
                        <div className="history"></div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h2>No data found</h2>
                        {
                            stockData.error && <h3>{stockData.error}</h3>
                        }
                    </React.Fragment>
                }
            </section>
    )
}

export default StockPriceDisplay;