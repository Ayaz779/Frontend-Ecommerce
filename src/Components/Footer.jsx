import React from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram, Pinterest, Twitter } from '@mui/icons-material';
import Room from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import Email from '@mui/icons-material/Email';
import { mobile } from '../responsive';
import { Tablet } from '../responsive';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
  ${Tablet({flexDirection:"column"})}
`;
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight:600;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  color:white;
  background-color:#${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({display:"none"})}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style:none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom:10px;
`;

const Right = styled.div`
  flex:1;
  padding: 20px;
  ${mobile({backgroundColor:"#eee"})}
`;

const ContactItem = styled.div`
  margin-bottom:20px;
  display: flex;
  align-items: center;
`
const Pay = styled.div`
width: 350px;
display:flex;
justify-content:space-between;
`;
const Payment1 = styled.img`
  width: 80px;
  height: 50px;
`;
const Payment2 = styled.img`
  width: 150px;
  height: 50px;
`;

const Footer = () => {

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <Container>
      <Left>
        <Logo>SHOPPING STORE...</Logo>
        <Desc>There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
          <Link style={{color:'inherit'}} to={'/external'}><FacebookOutlinedIcon/></Link>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <Link style={{color:'inherit'}} to={'/internal1'}><Instagram/></Link>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

        <Title>USEFUL LINKS</Title>
        <List>
          <Listitem><Link to={"/"} style={{textDecoration:"none"}}>Home</Link></Listitem>
          <Listitem><Link to={"/Cart"} style={{textDecoration:"none"}}>Cart</Link></Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 950, left: 0, behavior: 'smooth'});
        }}>Man Fashion</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 950, left: 0, behavior: 'smooth'});
        }}>Women Fashion</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 950, left: 0, behavior: 'smooth'});
        }}>Accessories</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 950, left: 0, behavior: 'smooth'});
        }}>Clothes</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Products</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Register</Listitem>
          <Listitem style={{cursor:"pointer"}} onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}>Sign in</Listitem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us:</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          Ferozpur Road,Pakistan 54000
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>
          +92 34565676854
        </ContactItem>
        <ContactItem>
          <Email style={{marginRight:"10px"}}/>
          Contact@Shopping store.dev
        </ContactItem>
        {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/> */}
        <Pay>
            <Payment1 src="https://seeklogo.com/images/J/jazz-cash-logo-829841352F-seeklogo.com.jpg"/>
            <Payment1 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iI1-Q-BdRg3b0rnwnqU_NnkKxZdC6EUkOw&usqp=CAU"/>
            <Payment2 src="https://sadapay.pk/wp-content/uploads/2020/04/website-logo.png"/>
            </Pay>
      </Right>
    </Container>
  )
}

export default Footer