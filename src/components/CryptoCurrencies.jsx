import React from "react";
import { useState, useEffect} from "react";

import millify from "millify";
import { Card, Row, Col,Spin,Input} from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/api";

const CryptoCurrencies = ({simplified}) => {
  const count=simplified?10:100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] =  useState();;
const[searchTerm,setSearchTerm]=useState('');
 //useeffext accepts callback and dependencues array
 //whenever depency wali will value the callbak function this useeffect will get executed
useEffect(() => {
  setCryptos(cryptosList?.data?.coins);
  const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  setCryptos(filteredData);
}, [cryptosList,searchTerm])


  if (isFetching) return <Spin size="large" />;

  // console.log(cryptos);
  return (
    <>
  {!simplified && (
    <div className="search-crypto">
    <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
    </div>
  )}   
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Changes: {millify(currency.change)}</p>

                <p>Name: {millify(currency.name)}</p>
                <p>Rank: {millify(currency.rank)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>

  );
};

export default CryptoCurrencies;
