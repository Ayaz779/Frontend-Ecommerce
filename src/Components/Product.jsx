import React from "react";
import styled from "styled-components";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import Search from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

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
const Button = styled.button`
  padding: 5px 20px;
  background-color: White;
  color: black;
  border-radius: 10px;
  :hover {
    background-color: #1e272e;
    color: white;
  }
`;

const Product = ({ item }) => {
  return (
    //state={item.img}
    <>
      <Link to={`/Product/${item._id}`}>
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
        <Button
          style={{
            cursor: "pointer",
            padding: "10px 20px",
            marginLeft: "80px",
          }}
        >
          ORDER NOW
        </Button>
      </Link>
    </>
  );
};

export default Product;
