import { useParams } from "react-router"
import { useState, useEffect } from "react";

function Show () {
    const { symbol } = useParams();
    console.log(symbol)

    const[coin, setCoin] = useState(null);

    async function fetchCoinInfo() {
        try {
            let data = await fetch(`http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=24C124E2-3648-42DD-B2E3-AD41425A2338`)
            data = await data.json()
            setCoin(data)
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCoinInfo();
    }, [])

    function loaded () {
        return(
            <h1>The coin {symbol} has a value of ${coin.rate.toFixed(3)} in {coin.asset_id_quote}</h1>
        )
    }

    function loading () {
        <h1>Loading...</h1>
    }


    return (
        <>
            {coin ? loaded() : loading()}
        </>
    )
}

export default Show