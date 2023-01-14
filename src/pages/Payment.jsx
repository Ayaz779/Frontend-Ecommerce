import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


const Container = styled.div`
width: 100vw;
height: 80vh;
`;
const Wrapper = styled.div`
background-color:#f5f6fa;
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`;
const Heading = styled.h2`
font-size: 20px;
margin-bottom:30px;
font-weight: 600;
`;
const Pay = styled.div`
/* background-color:white; */
width: 400px;
display:flex;
justify-content:space-between;
margin-bottom: 10px;
`;
const Payment1 = styled.img`
  width: 100px;
  height: 80px;
`;
const Payment2 = styled.img`
  width: 150px;
  height: 70px;
`;
const H1 = styled.h1`
  margin-top: 20px;
`;

const Payment = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
        
            <Pay>
            <Link to={'/pay0'}><Payment1 src="https://banner2.cleanpng.com/20180327/zdw/kisspng-television-jazz-download-android-cash-5ab9f04459d645.926325111522135108368.jpg"/></Link>
            <Link to={'/pay1'}><Payment1 src="https://crushlogo.com/files/preview/960x960/11664945262pae5jhgroh4mzk8lp9751fn89di34lr3esosoyw0oqivjdardq4wvuwaclcukfujd6m7a3s8yvjpprkxm0ysddkeztmmimfamdjm.png"/></Link>
            <Link to={'/pay2'}><Payment2 src="https://sadapay.pk/wp-content/uploads/2020/04/website-logo.png"/></Link>
            </Pay>
            <Heading>Please send the amount on this number: 03322240002</Heading>
            or
            <Pay>
            <H1>Cash on Delivery</H1>
            <Link to={'/pay'}><Payment1 src="https://www.pngitem.com/pimgs/m/111-1111293_cash-in-hand-icon-hd-png-download.png"/></Link>
            </Pay>
        </Wrapper>
    </Container>
    <Footer/>
    </>
  )
}

export default Payment