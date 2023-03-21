import React from "react";
import Navbar from "../Components/Navbar";
import Smallnavbar from "../Components/Smallnavbar";
import { useState } from "react";
import Products1 from "../Components/Products1";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AddPro = styled.div`
  float: right;
`;
const Button = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
  border: none;
  border-radius: 5px;
  background-color: #7c7cc2;
  color:white;
`;

const Operator = () => {
  const [listOfProducts, setProducts] = useState([]);

  fetch("http://localhost:4000/api/products")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      setProducts(data);
    });

  return (
    <>
      <Navbar />
      <Smallnavbar />
      <AddPro>
        <Link to={"/AddProducts"}><Button>Add Product</Button></Link>
      </AddPro>
      <Products1 item={listOfProducts} />
    </>
  );
};

export default Operator;
