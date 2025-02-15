import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
   /*  const { data } = useGetCryptosQuery(100) */;
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory:'Cryptocurrency', count: simplified? 6:12 });

    
    if(!cryptoNews?.value) return 'Loading....'
    
  return (
    <Row gutter={[24,24]}>
        {cryptoNews.map((news, i)=>(
            <Col key={i} xs={24} sm={12} lg={8}>
                <Card hoverable className='news-card'>
                    <a href={news.url} target='_blank' rel='noreferre'>
                        <Title className='news-title' level={4}>{news.name}</Title>
                    </a>
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default News
