import React from "react";
import Send from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-style: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-style: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign:"center"})}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width:"80%"})}
`;
const Input = styled.input`
  letter-spacing: 5px;
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor:pointer;
`;

const NewsLetter = () => {
  const [news4,setNews4] = useState("");
  const news5 ={
    email:news4
  }
  const handle_news = ()=>{
    fetch("http://localhost:4000/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(news5),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      window.location.reload();
  }
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Enter Your Email" onChange={(e)=>setNews4(e.target.value)}/>
        <Button onClick={handle_news}>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
