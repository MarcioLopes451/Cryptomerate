import React,{useState, useEffect} from 'react';
import axios from 'axios';

export default function PopularCrypto() {

    const [data, setData] = useState(null)
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    console.log(data);
    if(!data) return null;

  return (
    <div className='popular'>
        <h2>Popular Cryptos</h2>
        <table className='cryptoTable'>
            <tr>
                <th>Name</th>
                <th>Current Price</th>
                <th>24H Change</th>
                <th>Market Cap</th>
            </tr>
            <tr>
                <td>
                  <img src={data[0].image} alt=''/>
                  <h3>{data[0].id}</h3>
                  <p>{data[0].symbol}</p>
                </td>
                <td>
                    <p>£{data[0].current_price.toLocaleString()}</p>
                </td>
                <td>
                    {data[0].price_change_percentage_24h < 0 ? (
                        <p style={{color: 'red'}}>{data[0].price_change_percentage_24h.toFixed(2)}%</p> 
                    ) : (
                        <p style={{color: 'green'}}>{data[0].price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                </td>
                <td>
                    <p>£{data[0].market_cap.toLocaleString()}</p>
                </td>
            </tr>
            <tr>
            <td>
                  <img src={data[1].image} alt=''/>
                  <h3>{data[1].id}</h3>
                  <p>{data[1].symbol}</p>
                </td>
                <td>
                    <p>£{data[1].current_price.toLocaleString()}</p>
                </td>
                <td>
                    {data[1].price_change_percentage_24h < 0 ? (
                        <p style={{color: 'red'}}>{data[1].price_change_percentage_24h.toFixed(2)}%</p> 
                    ) : (
                        <p style={{color: 'green'}}>{data[1].price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                </td>
                <td>
                    <p>£{data[1].market_cap.toLocaleString()}</p>
                </td> 
            </tr>
            <tr>
            <td>
                  <img src={data[2].image} alt=''/>
                  <h3>{data[2].id}</h3>
                  <p>{data[2].symbol}</p>
                </td>
                <td>
                    <p>£{data[2].current_price.toLocaleString()}</p>
                </td>
                <td>
                    {data[2].price_change_percentage_24h < 0 ? (
                        <p style={{color: 'red'}}>{data[2].price_change_percentage_24h.toFixed(2)}%</p> 
                    ) : (
                        <p style={{color: 'green'}}>{data[2].price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                </td>
                <td>
                    <p>£{data[2].market_cap.toLocaleString()}</p>
                </td>
            </tr>
            <tr>
            <td>
                  <img src={data[3].image} alt=''/>
                  <h3>{data[3].id}</h3>
                  <p>{data[3].symbol}</p>
                </td>
                <td>
                    <p>£{data[3].current_price.toLocaleString()}</p>
                </td>
                <td>
                    {data[3].price_change_percentage_24h < 0 ? (
                        <p style={{color: 'red'}}>{data[3].price_change_percentage_24h.toFixed(2)}%</p> 
                    ) : (
                        <p style={{color: 'green'}}>{data[3].price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                </td>
                <td>
                    <p>£{data[3].market_cap.toLocaleString()}</p>
                </td>
            </tr>
            <tr>
            <td>
                  <img src={data[4].image} alt=''/>
                  <h3>{data[4].id}</h3>
                  <p>{data[4].symbol}</p>
                </td>
                <td>
                    <p>£{data[4].current_price.toLocaleString()}</p>
                </td>
                <td>
                    {data[4].price_change_percentage_24h < 0 ? (
                        <p style={{color: 'red'}}>{data[4].price_change_percentage_24h.toFixed(2)}%</p> 
                    ) : (
                        <p style={{color: 'green'}}>{data[4].price_change_percentage_24h.toFixed(2)}%</p>
                    )}
                </td>
                <td>
                    <p>£{data[4].market_cap.toLocaleString()}</p>
                </td>
            </tr>
        </table>
    </div>
  )
}
