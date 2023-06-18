import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { ADD_ROUTE, MAIN_ROUTE, REGISTR_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={MAIN_ROUTE}
        >
          Rental Service
        </NavLink>
        <Nav className="ml-auto">
          {user.isAuth ? (
            <>
              <Button
                onClick={() => history.push(ADD_ROUTE)}
                variant={"outline-light"}
              >
                Add Flat
              </Button>
              <Button
                variant={"outline-light"}
                className="ml-2"
                onClick={() => user.setIsAuth(false)}
              >
                Exit
              </Button>
            </>
          ) : (
            <Button
              variant={"outline-light"}
              onClick={() => history.push(REGISTR_ROUTE)}
            >
              Auth
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
