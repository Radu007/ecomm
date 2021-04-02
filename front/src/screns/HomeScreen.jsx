import React from "react";

import Product from "../components/Product";

import products from "../products";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest</h1>
      <Row>
        {products.map((item, index) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
