import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { mobile } from "../responsive";
import { Tablet } from "../responsive";
import { Large } from "../responsive";
import { useSelector } from "react-redux";
import { persistor } from "../redux/store";
import logo from "../pics/logo.jpeg";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "auto" })}
  ${Tablet({ height: "auto" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({ paddingTop: "10px", flexWrap:"wrap", justifyContent:"center" })}
  ${Tablet({ paddingTop: "10px", display: "block" })}
`;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   ${mobile({ width: "50%", display: "inline-block" })}
// `;
// const Language = styled.span`
//   font-style: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   width: 100%;
//   border: 2px solid black;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   ${mobile({ marginLeft: "5px" })}
// `;
// const Input = styled.input`
//   border: none;
//   font-size: 15px;
//   width: 100%;
//   :focus {
//     outline: none !important;
//   }
// `;

const Image = styled.img`
  width: 45px;
  height: 45px;
  ${mobile({ marginLeft:"50px"})}
`;

const Center = styled.div`
  flex: 2;
  text-align: left;
  ${Tablet({ textAlign: "left",display: "inline-block" })}
  ${Large({ textAlign: "left" })}
`;

const Logo = styled.h1`
  font-style: italic;
  ${mobile({ fontSize: "24px", marginTop: "10px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", marginTop: "10px" })}
  ${Tablet({ justifyContent: "center", marginTop: "10px" })}
  ${Large({ flex: "2" })}
`;
const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "15px", marginLeft: "10px" })}
  ${Tablet({ fontSize: "15px", marginLeft: "10px" })}
  ${Large({ fontSize: "15px", marginLeft: "20px" })}
`;
const Button1 = styled.button`
  display: none;
`;
const Button2 = styled.button`
  background: none;
  border: none;
  color: blue;
`;

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const quantity = useSelector((state) => state.cart.quantity);
  const user1 = useSelector((state) => state.user.currentUser);
  console.log(user1);
  const handlepurg = () => {
    persistor.purge();
    window.location.reload();
  };
  return (
    <>
      <Container>
        <Wrapper>
          {/* <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search
                style={{
                  color: "black",
                  fontSize: 30,
                }}
              />
            </SearchContainer>
          </Left> */}
          <Image src={logo}/>
          <Center>
            <Logo>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                TRADING-HUB
              </Link>
            </Logo>
          </Center>
          <Right>
            <MenuItem>
              <Link to={"/Home"} style={{ textDecoration: "none" }}>
                HOME
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/Products"} style={{ textDecoration: "none" }}>
                PRODUCTS
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/Register"} style={{ textDecoration: "none" }}>
                REGISTER
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/Signin"} style={{ textDecoration: "none" }}>
                SIGNIN
              </Link>
            </MenuItem>
            {/* {user1 ? (
              <MenuItem>
                <Link to={"/Admin"} style={{ textDecoration: "none" }}>
                  ADMIN
                </Link>
              </MenuItem>
            ) : (
              <Button1>nothing</Button1>
            )} */}
            {user1 ? (
              <MenuItem>
                <Button2 onClick={handlepurg}>LOGOUT</Button2>
              </MenuItem>
            ) : (
              <Button1>nothing</Button1>
            )}
            <MenuItem>
              <Link
                to={"/Cart"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
