import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Search from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Container1 = styled.div`
  margin: 5px;
  min-width: 280px;
  height: 450px;
  display: flex;
  flex-direction:column;
  justify-content:center;
  
  
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  width: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #eff5f5;
    transform: scale(1.1);
  }
`;
const Button1 = styled.div`
width: 100%;
display: flex;
justify-content: center;
text-decoration:none !important;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: White;
  color: black;
  border-radius: 10px;
  text-decoration:none !important;
  cursor: pointer;
  :hover {
    background-color: #1e272e;
    color: white;
  }
`;

const Product2 = ({ item }) => {
  return (
    <>
    <Link style={{textDecoration: 'none'}} to={"/Product"} state={item.img}>
      <Container1>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Search />
          </Icon>
          <Icon>
            <FavoriteBorder />
          </Icon>
        </Info>
      </Container>
      <Button1>
      <Button >
        ORDER NOW
      </Button>
      </Button1>
      </Container1>
    </Link>
  </>
  )
}

export default Product2