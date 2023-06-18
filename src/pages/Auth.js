import React, { useContext } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  REGISTR_ROUTE,
  AUTH_ROUTE,
  MAIN_ROUTE,
  VERIFI_ROUTE,
} from "../utils/consts";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "..";

export default function Auth() {
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const { user } = useContext(Context);

  const isAuth = location.pathname === AUTH_ROUTE;
  console.log(isAuth);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 61 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isAuth ? "Auth" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          {isAuth ? (
            <>
              <Form.Control
                placeholder="Username"
                className="mt-2"
              ></Form.Control>
              <Form.Control
                placeholder="password"
                type="password"
                className="mt-2"
              ></Form.Control>
            </>
          ) : (
            <>
              <Form.Control placeholder="Name" className="mt-2"></Form.Control>
              <Form.Control
                placeholder="Last name"
                className="mt-2"
              ></Form.Control>
              <Form.Control
                placeholder="Username"
                className="mt-2"
              ></Form.Control>
              <Form.Control placeholder="Email" className="mt-2"></Form.Control>
              <Form.Control
                placeholder="password"
                type="password"
                className="mt-2"
              ></Form.Control>
            </>
          )}

          <div className="d-flex justify-content-between  ">
            {isAuth ? (
              <NavLink to={REGISTR_ROUTE} className="mt-3">
                dont have account ?
              </NavLink>
            ) : (
              <NavLink to={AUTH_ROUTE} className="mt-3">
                already have account ?
              </NavLink>
            )}

            <Button
              onClick={() => {
                {
                  isAuth
                    ? history.push(MAIN_ROUTE)
                    : history.push(VERIFI_ROUTE);
                }
              }}
              className="mt-3"
              variant="outline-success"
            >
              {isAuth ? "Login" : "Create"}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}
