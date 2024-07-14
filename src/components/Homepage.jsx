import React from 'react'
import millify from 'millify'
import { Typography,Row,Col,Statistic,Spin } from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/api'
import {CryptoCurrencies, News} from '../components'

const {Title}=Typography;

//fetch data using redux toolkit
const Homepage = () => {
  const{data,isFetching}=useGetCryptosQuery(10);
  const globalStats=data?.data?.stats;
  
  // if(isFetching)return <h2>Loading...</h2>
  if (isFetching) return <Spin size="large" />;

  console.log(data);
  return (
  <>
    <Title level={2} className='heading'>
Global Crypto Statistic
    </Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
      <Col span={12}><Statistic title="Total 24th Volume" value={millify(globalStats.total24hVolume)}/></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>
    <div className='home-heading-container'>
    <Title level={2} className='home-title'>Top 10 crptocurrencies in the world</Title>
    <Title level={3} className='show-title'><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <CryptoCurrencies simplified/>
    <div className='home-heading-container'>
    <Title level={2} className='home-title'>Latest Crypto News</Title>
    <Title level={3} className='show-title'><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified/>
    
  </>
);}

export default Homepage