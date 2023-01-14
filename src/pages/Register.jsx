import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import Homepage from "./Homepage";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobile({ width: "65%" })}
`;

const H4 = styled.h4``;

const Register = () => {

  const [username1, setUsername] = useState("");
  const [email1, setEmail] = useState("");
  const [password1, setPassword] = useState("");
  const [admin, setAdmin] = useState();


  var RegName = new RegExp("[a-z,A-Z ]");
  var passwordEXP1 = new RegExp("[0-9]");
  var passwordEXP2 = new RegExp(`[!@#$%^&*()]`);
  var Admin_exp = new RegExp(`[true,false]`);


  var h41 = document.querySelector(".h4-1");
  var h42 = document.querySelector(".h4-2");
  var h43 = document.querySelector(".h4-3");
  var h44 = document.querySelector(".h4-4");
  var h45 = document.querySelector(".h4-5");


  const keyUp = (event) => {
    if (RegName.test(event.key)) {
      h41.style.display = "none";
    } else {
      h41.style.display = "block";
    }
  };


  const username3 = (event) => {
    if (!username1 == "") {
      h41.style.display = "none";
    } else h41.style.display = "block";
  };


  const focusout = (event) => {
    var indexOfCom = email1.slice(email1.indexOf(".com"));
    if (
      email1.length > 5 &&
      email1.indexOf("@") > 0 &&
      email1.indexOf(".com") > 0 &&
      indexOfCom.length == 4
    ) {
      h42.style.display = "none";
    } else h42.style.display = "block";
  };


  const focusout2 = (event) => {

    if(RegName.test(password1) && !passwordEXP1.test(password1) && !passwordEXP2.test(password1)){
      h43.style.display = 'block';
  }else if(!RegName.test(password1) && passwordEXP1.test(password1) && !passwordEXP2.test(password1)){
    h43.style.display = 'block';
  }
  else if(!RegName.test(password1) && !passwordEXP1.test(password1) && passwordEXP2.test(password1)){
    h43.style.display = 'block';
  }
  else if(RegName.test(password1) && passwordEXP1.test(password1) && !passwordEXP2.test(password1)){
    h44.style.display = 'block';
    h43.style.display = 'none';
  }else if(RegName.test(password1) && passwordEXP1.test(password1) && passwordEXP2.test(password1)){
    h44.style.display = 'block';
    h43.style.display = 'none';
  }
  else{
    h43.style.display = 'block';
  }
  };

  const keyUp2 = ()=>{
    if(Admin_exp.test(admin)){
      h45.style.display = 'none';
      h44.style.display = 'none';
    }else{
      h45.style.display = 'block';
      h44.style.display = 'none';
    }
  };


  const update = {
    username: username1,
    email: email1,
    password: password1,
    isAdmin: admin,
  };
  let navigate = useNavigate();
  const handlesignup = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/Home");
  };
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          {/* <Input placeholder="name"/>
                <Input placeholder="Last name"/> */}
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            onMouseLeave={username3}
            onKeyUp={keyUp}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            onMouseLeave={focusout}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            onMouseLeave={focusout2}
          />
          <Input
            placeholder="Admin: True / False"
            onChange={(e) => setAdmin(e.target.value)}
            onKeyUp={keyUp2}
          />
          <H4
            style={{
              fontSize: "15px",
              marginTop: "10px",
              color: "red",
              display: "none",
            }}
            className="h4-1"
          >
            Enter Correct Name(only text) & Name Field Could Not Be Empty.
          </H4>
          <H4
            style={{
              fontSize: "15px",
              marginTop: "10px",
              color: "red",
              display: "none",
            }}
            className="h4-2"
          >
            Enter Correct Email (exmaple123@gmail.com).
          </H4>
          <H4
            style={{
              fontSize: "15px",
              marginTop: "10px",
              color: "red",
              display: "none",
            }}
            className="h4-3"
          >
            Weak Password
          </H4>
          <H4
            style={{
              fontSize: "15px",
              marginTop: "10px",
              color: "green",
              display: "none",
            }}
            className="h4-4"
          >
            Strong Password
          </H4>
          <H4
            style={{
              fontSize: "15px",
              marginTop: "10px",
              color: "red",
              display: "none",
            }}
            className="h4-5"
          >
            Only Enter True or False(That tell you want to be admin and sell products)
          </H4>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordanc with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handlesignup}>Create Account</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
