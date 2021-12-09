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
// reactstrap components
import {
  
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    Col,
    Button,
    UncontrolledTooltip,
  } from "reactstrap";
  // core components
  import Header from "components/Headers/Header.js";
  
  const EmpleadosUsers = () => {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Dark table */}
          <Row className="mt-5">
            <div className="col">
              <Card className="bg-default shadow">
                <CardHeader className="bg-transparent border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="text-white mb-0">Empleados</h3>
                    </Col>
                     <Col className="text-right" xs="4">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                      Agregar
                      </Button>
                    </Col> 
                  </Row>
                </CardHeader>
                <Table
                  className="align-items-center table-dark table-flush"
                  responsive
                >
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Tipo Identificacion</th>
                      <th scope="col">Identificacion</th>
                      <th scope="col">Correo</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                            <span className="mb-0 text-sm">
                              Javier Fernando
                            </span> 
                      </th>
                      <td>Moreno Rodriguez</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          Cedula de Ciudadania
                        </Badge>
                      </td>
                      <td>
                        1000283962
                      </td>
                      <td>
                        morenofj@uninorte.edu.co
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#Javier"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#javier"
                              onClick={(e) => e.preventDefault()}
                            >
                              EDITAR
                            </DropdownItem>
                            <DropdownItem
                              href="#javier"
                              onClick={(e) => e.preventDefault()}
                            >
                              ELIMINAR
                            </DropdownItem>
                            {/* <DropdownItem
                              href="#javier"
                              onClick={(e) => e.preventDefault()}
                            >
                              AGREGAR
                            </DropdownItem> */}
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                    <td></td>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                    
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  };
  
  export default EmpleadosUsers;
  