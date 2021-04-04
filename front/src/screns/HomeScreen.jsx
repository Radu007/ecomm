import React, { useState, useEffect } from "react";
import axios from "axios";

import Product from "../components/Product";

import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <h1>Latest</h1>
      <Row>
        {products.map((item, index) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={item} key={index} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
