import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import loaderGif from "../../assets/images/loader.gif";
import "./Loader.css";
const Loader = () => {
  return (
    <>
      <Row className="noPadding">
        <Col className="text-center mt-5">
          <Container>
            <Image alt="loaderGif" className="loader-image" src={loaderGif} />
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Loader;
