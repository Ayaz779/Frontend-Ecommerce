import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://media.istockphoto.com/id/1282801019/photo/money-transfer-online-send-funds-currency-exchange.jpg?s=612x612&w=0&k=20&c=vm8VpI_uGXH40RpLqm8CbGjLnIAGqpAfl_uVIPtvFVM=") center;
  background-size:cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width:40%;
  background-color:white;
`;

const Title = styled.h1`
  font-size:20px;
  font-weight: 300;
`;

const Form = styled.form`
 display: flex;
 flex-wrap:wrap;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
   font-size: 12px;
   margin:20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border:none;
  padding: 15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
`;
const Pay = () => {
  const [account,setName] = useState('');
  const [address1,setAddress] = useState('');
  const [password,setPassword] = useState('');

  const payment = {
    username:account,
    address:address1,
    contact:password
  }
  const navigate = useNavigate();

  const handle_Submit = ()=>{
    fetch("http://localhost:4000/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      navigate('/')
  }
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Title>Create An Account</Title>
            <Form>
                <Input type='text' placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <Input type='text' placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                <Input type='number' placeholder="Contact No." onChange={(e)=>setPassword(e.target.value)}/>
                <Agreement>
                    Carefully enter your number and password ,and hide your number
                    and password ,we can't responsible for this.<b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handle_Submit}>Submit</Button>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Pay