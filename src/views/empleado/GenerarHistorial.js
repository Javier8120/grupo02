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
import Header from "components/Headers/EmpleadoHeader.js";

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
                    <h3 className="text-white mb-0">Clientes</h3>
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
                    <th scope="col">Ultimo mes de pago</th>
                    <th scope="col">Pago Realizado</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">Javier Fernando</span>
                    </th>
                    <td>Moreno Rodriguez</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-green" />
                        Cedula de Ciudadania
                      </Badge>
                    </td>
                    <td>1000283962</td>
                    <td>morenofj@uninorte.edu.co</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-green" />
                        Octubre
                      </Badge>
                    </td>
                    <td>900.000 $</td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <span className="mb-0 text-sm">Harson David</span>
                    </th>
                    <td>Delahoz Herrera</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-green" />
                        Cedula de Ciudadania
                      </Badge>
                    </td>
                    <td>1001883450</td>
                    <td>harsond@uninorte.edu.co</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-green" />
                        Julio
                      </Badge>
                    </td>
                    <td>1.450.000 $</td>
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
