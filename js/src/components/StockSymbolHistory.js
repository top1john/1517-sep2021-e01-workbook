const StockSymbolHistory=(props)=>{
    

    React.useEffect(()=>{
        if(!props.listStocks.find(stock => stock.symbol == props.stockObject.symbol))
        {
            props.setListCallback([props.stockObject, ...(props.listStocks.slice(0,4))]);
        }
    },[props.stockObject])

    return (
        <></>
    );

}

export default StockSymbolHistory;