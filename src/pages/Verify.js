import React, { useContext } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTR_ROUTE, AUTH_ROUTE, MAIN_ROUTE } from "../utils/consts";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "..";

export default function Veify() {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const { user } = useContext(Context);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 61 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{"Verification"}</h2>
        <Form className="d-flex flex-column">
          {
            <>
              <Form.Control
                placeholder="V-code"
                className="mt-2"
              ></Form.Control>
            </>
          }

          <div className="d-flex justify-content-between  ">
            <Button
              onClick={() => {
                user.setIsAuth(true);
                history.push(MAIN_ROUTE);
              }}
              className="mt-3"
              variant="outline-success"
            >
              {"Go"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
