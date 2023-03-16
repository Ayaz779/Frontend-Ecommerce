import React ,{ useState,useEffect } from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import {useLocation} from 'react-router-dom'
import { mobile } from "../responsive";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({flexDirection:"column",padding:"10px"})};
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({height:"40vh"})};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})};
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})};
`;
const Filter = styled.div`
 display: flex;
 align-items: center;
`;
const FilterTitle = styled.span`
 font-style: 20px;
 font-weight: 200;
`;
const FilterColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius:50%;
 background-color: ${props=>props.color};
 margin: 0px 5px;
 cursor:pointer;
`;
const FilterSize = styled.select`
 margin-left: 10px;
 padding: 5px;
`;
const FilterSizeOption = styled.option`
 
`;
const AddContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 50%;
 ${mobile({width:"100%"})};
`;
const AmountContainer = styled.div`
 display: flex;
 align-items: center;
 font-weight: 700;
`;
const Amount = styled.span`
 width: 30px;
 height: 30px;
 border-radius:10px;
 border:1px solid teal;
 display: flex;
 align-items: center;
 justify-content: center;
 margin:0px 5px;
`;
const Button = styled.button`
 padding: 15px;
 border:2px solid teal;
 background-color:white;
 cursor:pointer;
 font-weight: 500;

 &:hover{
    background-color:#f8f4f4;
 }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product,setProducts]=useState([]);
  const [quantity,setQuantity]=useState(1);
  const [color,setColor]=useState("");
  const [size,setSize]=useState("");
  const dispatch = useDispatch()


  useEffect(() => {
    const getProduct =  async ()=>{
      try {
        const res = await axios.get("https://ecommerce-two-ruddy.vercel.app/api/products/find/"+id);
        setProducts(res.data);
      } catch {}
    };
    getProduct()
  }, [id])
  const handleQuantity = (type)=>{
    if(type==="dec"){
      quantity > 1 && setQuantity(quantity-1)
    }else{
      setQuantity(quantity+1)
    }
  };
  const handleCart=()=>{
    dispatch(addProduct({...product,quantity,color,size}));
  }
  
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} PKR</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c)=>(
                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onClick={(e)=>setSize(e.target.value)}>
                {product.size?.map((s)=>(
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove onClick={()=>handleQuantity("dec")}/>
                <Amount>{quantity}</Amount>
                <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleCart}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
