/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="Javier"
                  target="_blank"
                >
                  Equipo 02
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href="Javier"
                    target="_blank"
                  >
                    Javier
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="Javier"
                    target="_blank"
                  >
                    Johan
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="Javier"
                    target="_blank"
                  >
                    Andres
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="Javier"
                    target="_blank"
                  >
                    Harson
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="Javier"
                    target="_blank"
                  >
                    Rafael
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
