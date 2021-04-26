import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screns/HomeScreen";
import ProductScreen from "./screns/ProductScreen";
import CartScreen from "./screns/CartScreen";
import LoginScreen from "./screns/LoginScreen";
import RegisterScreen from "./screns/RegisterScreen";
import ProfileScreen from "./screns/ProfileScreen";
import ShippingScreen from "./screns/ShippingScreen";
import PaymentScreen from "./screns/PaymentScreen";

import { BrowserRouter, Route } from "react-router-dom";
function App({ match }) {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
