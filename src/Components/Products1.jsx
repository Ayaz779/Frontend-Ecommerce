import React from "react";
import styled from "styled-components";
import { PopularProducts } from "../data";
import Product from "./Product";
import { Tablet } from "../responsive";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${Tablet({ justifyContent: "space-evenly" })}
`;
const Heading1 = styled.h1`
  font-size: 2rem;
  margin: 30px 0px 0px 30px;
  font-weight: 500;
  font-family: san;
`;

const Products1 = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(cat);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat.cat
            ? `https://ecommerce-two-ruddy.vercel.app/api/products?category=${cat.cat}`
            : "https://ecommerce-two-ruddy.vercel.app/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat.cat]);
  useEffect(() => {
    cat.cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(cat.filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat.cat, cat.filters]);

  useEffect(() => {
    if (cat.sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (cat.sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [cat.sort]);

  return (
    <>
    {cat.cat!=null ? <Heading1>{cat.cat}:</Heading1> : <Heading1>Products:</Heading1>}
      <Container>
        {cat.cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products.map((item) => <Product item={item} key={item.id} />)}
      </Container>
    </>
  );
};

export default Products1;