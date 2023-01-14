import React from 'react'
import styled from 'styled-components'
import Product2 from './Product2';
import { PopularProducts2 } from '../data'
import {Tablet} from '../responsive'

const Container = styled.div`
 padding: 20px;
 display: flex;
 flex-wrap:wrap;
 justify-content:space-between;
 ${Tablet({justifyContent:"space-evenly"})}
`;
const Heading1 = styled.h1`
  font-size: 2rem;
  margin: 30px 0px 0px 30px;
  font-weight:500;
  font-family:san;
`;

const Products2 = () => {
  return (
    <>
    <Heading1>Electronics:</Heading1>
    <Container>
        {PopularProducts2.map((item)=>(
            <Product2 item={item} key={item.id}/>
        ))}
    </Container>
    </>
  )
}

export default Products2