import React, { useContext } from "react";
import { Button, Col, Container, Image } from "react-bootstrap";
import { Context } from "..";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function SingleFlat() {
  const { flat } = useContext(Context);
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const selectedflat = flat.flats.filter(
    (flat) => flat.id == location.pathname.split("/")[2]
  );
  console.log(selectedflat);
  return (
    <Container className="d-flex p-3 m-3 justify-content-between">
      <Col md={4}>
        <Image width={300} height={300} src={selectedflat[0].photo}></Image>
        <br />
        {selectedflat[0].title}
      </Col>
      <Col md={4}>
        <Button className="">Book</Button>
      </Col>
    </Container>
  );
}
