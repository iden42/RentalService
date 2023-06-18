import React, { useContext } from "react";

import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Context } from "..";
import { SINGLEFLAT_ROUTE } from "../utils/consts";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Main() {
  const { flat } = useContext(Context);
  const history = useHistory();

  return (
    <Container>
      <Row>
        {" "}
        {/* <Col
          md={3}
          onClick={() => {
            history.push(SINGLEFLAT_ROUTE + "/" + flat.id);
          }}
        ></Col> */}
        {flat.flats.map((flat) => (
          <Card
            onClick={() => {
              history.push(SINGLEFLAT_ROUTE + "/" + flat.id);
            }}
            className="d-flex m-3 p-2"
            style={{ width: 150, cursor: "pointer" }}
            key={flat.id}
          >
            <Image width={130} height={130} src={flat.photo}></Image>
            <div style={{ margin: "auto" }}>{flat.title}</div>
            <div style={{ margin: "auto" }}>{flat.price}</div>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
