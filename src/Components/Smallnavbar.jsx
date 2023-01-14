import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { mobile } from "../responsive";
import { Tablet } from "../responsive";

const Container = styled.div`
  height: 45px;
  margin-top: 5px;
  background-color: #222f3e;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.h1`
  color: White;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 6px;
  cursor: pointer;
  ${mobile({ marginLeft: "20px", display: "none" })}
  ${Tablet({ marginLeft: "20px", display: "none" })}
`;

const Smallnavbar = () => {
  return (
    <>
      <Container>
        <Wrapper>Deals</Wrapper>

        <DropdownButton
          style={{ marginLeft: "20px", fontSize: "24px" }}
          variant="light"
          id="dropdown-basic-button"
          title="Electronics"
        >
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Mobile`}>
              Mobile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Laptop`}>
              Laptop
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Tablet`}>
              Tablet
            </Link>
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          style={{ marginLeft: "20px", fontSize: "24px" }}
          variant="light"
          id="dropdown-basic-button"
          title="Books"
        >
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Science`}>
             Science Books
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/History`}>
              History Books
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link
              style={{ textDecoration: "none" }}
              to={`/Products/Novels`}
            >
              Novels
            </Link>
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          style={{ marginLeft: "20px", fontSize: "24px" }}
          variant="light"
          id="dropdown-basic-button"
          title="Clothes"
        >
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/women`}>
              Women Clothes
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Men`}>
              Men Clothes
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link style={{ textDecoration: "none" }} to={`/Products/Kids`}>
              Kids Clothes
            </Link>
          </Dropdown.Item>
        </DropdownButton>
        <Wrapper>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/Register"}
          >
            SIGN_UP
          </Link>
        </Wrapper>
      </Container>
    </>
  );
};

export default Smallnavbar;
