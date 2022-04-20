import currencyFormatter from "./CurrencyFormatter.js";

const StockHistoryDisplay =(props) =>{

    React.useEffect(()=>{
    },[props.stockHistory])

    return(
        <React.Fragment>
            {
                props.stockHistory.map(day=>(
                    <div className="day-details" key={day.date}>
                        <div className="date">Date: {day.date}</div>
                        <div className="details">Open: {currencyFormatter(day.open)}, High: {currencyFormatter(day.high)}, Low: {currencyFormatter(day.low)}, Close: {currencyFormatter(day.close)}</div>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
export default StockHistoryDisplay;


