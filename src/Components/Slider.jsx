import React, { useState } from "react";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import { sliderItems } from "../data";
import {Tablet} from '../responsive'
import {mobile} from '../responsive'
import {Large} from '../responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({height:"100vh"})};
  ${Tablet({height:"60vh"})};
  ${Large({height:"70vh"})};
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #efdfdf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex*-100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({height:"100vh"})};
  ${Tablet({height:"60vh"})};
  ${Large({height:"70vh"})};
`;
const ImgContainer = styled.div`
  flex: 1;
  text-align: center;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(slideIndex);

  const handleClick = (direction) => {

    if (direction==="left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }

  };
  return (
    <Container>
      <Arrow direction="left"  onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
