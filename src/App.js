import "./App.css";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import { Routes, Route, Navigate} from "react-router-dom";
import Products2 from "./Components/Products2";
import Products1 from "./Components/Products1";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from 'react-redux';
import Payment from "./pages/Payment";
import Pay from "./Components/Pay";
import Operator from "./pages/Operator";
import Addproducts from "./pages/AddProduct";

function App() {
  const user = useSelector((state)=> state.user.currentUser);
  function External() {
    // const url = 'https://www.facebook.com/profile.php?id=100087945983319&mibextid=ZbWKwL';
    window.location.href = 'https://www.facebook.com/profile.php?id=100087945983319&mibextid=ZbWKwL';
    // window.open(url,'_blank')
    return null;
  };
  function Internal1() {
    // const url1 = 'https://www.instagram.com/p/CldlFe_t7Wn/?igshid=MDJmNzVkMjY=';
    window.location.href = 'https://www.instagram.com/p/CldlFe_t7Wn/?igshid=MDJmNzVkMjY=';
    // window.open(url1,'_blank');
    return null;
  }
  function Pay0() {
    // const url1 = 'https://www.instagram.com/p/CldlFe_t7Wn/?igshid=MDJmNzVkMjY=';
    window.location.href = 'https://www.jazzcash.com.pk/shop/money-transfer-shop/';
    // window.open(url1,'_blank');
    return null;
  }
  function Pay1() {
    // const url1 = 'https://www.instagram.com/p/CldlFe_t7Wn/?igshid=MDJmNzVkMjY=';
    window.location.href = 'https://easypaisa.com.pk/send-money-to-bank-account/';
    // window.open(url1,'_blank');
    return null;
  }
  function Pay2() {
    // const url1 = 'https://www.instagram.com/p/CldlFe_t7Wn/?igshid=MDJmNzVkMjY=';
    window.location.href = 'https://sadapay.pk/';
    // window.open(url1,'_blank');
    return null;
  }
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Home" element={<Homepage />}></Route>
        <Route path="/Products/:category" element={<ProductList />}></Route>
        <Route path="/Products" element={<ProductList />}></Route>
        <Route path="/Product/:id" element={<Product />}></Route>
        <Route path="/Electronics" element={<Products2/>}></Route>
        <Route path="/Clothes" element={<Products1/>}></Route>
        <Route path="/Register" element={user ? <Navigate to="/" replace={true}/> : <Register/>}></Route>
        <Route path="/Signin" element={user ? <Navigate to="/" replace={true}/> : <Login/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
        <Route path="/Pay" element={<Pay/>}></Route>
        <Route path="/Pay0" element={<Pay0/>}></Route>
        <Route path="/Pay1" element={<Pay1/>}></Route>
        <Route path="/Pay2" element={<Pay2/>}></Route>
        <Route path="/external" element={<External/>}></Route>
        <Route path="/internal1" element={<Internal1/>}></Route>
        <Route path="/operator" element={<Operator/>}></Route>
        <Route path="/AddProducts" element={<Addproducts/>}></Route>
      </Routes>
    </>
  );
}

export default App;
