import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productActions";
import Product from "../components/Product";

import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          {products.map((item, index) => (
            <Col sm={12} md={6} lg={4}>
              <Product product={item} key={index} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
