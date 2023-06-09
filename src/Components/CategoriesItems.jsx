import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 10px;
  height: 70vh;
  position: relative;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #0b0303;
  color:white;
  cursor: pointer;
  font-weight: 600;
`;

const CategoriesItems = ({ item }) => {
  return (
    <Container>
      <Link to={`/Products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Show More</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoriesItems;
