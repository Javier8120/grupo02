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
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/ClientHeader.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--8" fluid>

      <Row className="mt-3">
          <Col className="mb-5 mb-xl-4" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">Ultimos Movimientos</h3>
              
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush text-center" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Dia-Mes-Año</th>
                    <th scope="col">Lugar</th>
                    <th scope="col">Valor Pagado</th>
                    <th scope="col">Numero de Transaccion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">15/12/2020</th>
                    <td>Bogota</td>
                    <td>80.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46538990
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">12/02/2021</th>
                    <td>Madrid</td>
                    <td>80.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 46909867
                      
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">12/04/2021</th>
                    <td>Barranquilla</td>
                    <td>82.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 47784969
                      
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">12/04/2021</th>
                    <td>Barranquilla</td>
                    <td>82.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 47784969
                      
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">12/04/2021</th>
                    <td>Barranquilla</td>
                    <td>82.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 47784969
                      
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">14/06/2021</th>
                    <td>Madrid</td>
                    <td>85.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 48433481
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">13/08/2021</th>
                    <td>Cali</td>
                    <td>89.000</td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3" /> 49692495
                      
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Dinero Abonado
                    </h6>
                    <h2 className="mb-0">Total De Dinero Abonado</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          
        </Row>


        <Row>
          <Col className="mb-5 mb-xl-4" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Grafica Cuotas Pagadas.
                    </h6>
                    <h2 className="text-white mb-0">Monto Acomulado</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Meses</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Semanas</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">Certificado.</h3>
                  
                  <nav className="form-group text-center">
                    <button type="button" className="btn btn-primary btn-lg">Vista Previa</button>
                   
                  
                    <button type="button" className="btn btn-primary btn-lg">Descarga Tu Certificado.</button>
                     

                  </nav>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>                

        </Row>

        

        <Row className="mt-3">
          <Col className="mb-0 mb-xl-4" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">Solicitar Prorroga.</h3>
                    <form>
                  <div className="form-group">
                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                    <textarea className="form-control" name="content" placeholder="Cuentamos porque razon solicitaras una prorroga de tus cuotas" rows="7"></textarea>
                  </div>
                  <div className="form-group text-center">
                  <label htmlfor="Aplazar ">¿Cuantas Cuotas Desea Aplazar?</label>
                  </div>

                  <div className="form-group">
                  <center>  
                  <select>

                    <option value={""}>-Selecciona Un Numero-</option>
                    <option value={"1"}>01</option>
                    <option value={"2"}>02</option>
                    <option value={"3"}>03</option>
                    <option value={"4"}>04</option>
                    <option value={"5"}>05</option>
                    <option value={"6"}>06</option>

                  </select>
                  </center>   
                  </div>
                  
                  <div className="form-group text-center">
                    <button type="button" className="btn btn-primary btn-lg">Solicitar</button>
                  </div>
                  
                  </form>
                  </div>
                  
                </Row>
              </CardHeader>
            </Card>
          </Col>
        </Row>

        <Col className="mb-0 mb-xl-4" xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0 text-center">Simulacion de Pago{'\n'}</h3>
                  

                  <div className="form-group text-center">
                          
                  <input type="text" placeholder="Nombre del Propietario"></input>
                  <input type="number" placeholder="Identificacion"></input>
                  <input type="number" placeholder="Valor Agregar"></input>
                  <input type="text" placeholder="Producto"></input>
                  <input type="number" placeholder="Numero de Cuenta"></input>

                  </div>

                  <div className="form-group text-center">

                  <button type="submit" className="btn btn-primary btn-lg">Abonar Dinero</button>
                  <button type="submit" className="btn btn-primary btn-lg">Pagar Cuota</button>

                  </div>
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>                  


      </Container>
    </>
  );
};

export default Index;
