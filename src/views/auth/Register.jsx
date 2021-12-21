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
import ReactDatetime from "react-datetime";
import {

  Card,

  CardBody,
  FormGroup,
 
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import React, { Fragment, useRef, useState } from 'react';

export function Register() {
  const nomRef = useRef();
  const apeRef = useRef();
  const tipoRef = useRef();
  const idenRef = useRef();
  const naciRef = useRef();
  const expeRef = useRef();
  const ingresosRef = useRef();
  const egresosRef = useRef();
  const matriculaRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [success, setSuccess] = useState(false);
  function solicitudes() {
    //capturamos los datos
    const nombres = nomRef.current.value;
    const apellidos = apeRef.current.value;
    const tipo_identificacion = tipoRef.current.value;
    const identificacion = idenRef.current.value;
    const nacimiento = naciRef.current.value;
    const expedicion = expeRef.current.value;
    const ingresos = ingresosRef.current.value;
    const egresos = egresosRef.current.value;
    const matricula = matriculaRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rol = "cliente"
    //Consumir api guardar
    fetch("http://localhost:4000/registros/guardar", {
      headers: { "contect-type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        nombres,
        apellidos,
        tipo_identificacion,
        identificacion,
        nacimiento,
        expedicion,
        ingresos,
        egresos,
        matricula,
        email,
        password,
        rol

      })
    }).then(res => res.json())
      .then(res => {
        if (res.estado === "ok") {
          setSuccess(true); // mostras mensaje de respuesta
          setTimeout(() => setSuccess(false), 3000);
          nomRef.current.value = "";
          apeRef.current.value = "";
          tipoRef.current.value = "";
          idenRef.current.value = "";
          naciRef.current.value = "";
          expeRef.current.value = "";
          ingresosRef.current.value = "";
          egresosRef.current.value = "";
          matriculaRef.current.value = "";
          emailRef.current.value = "";
          passwordRef.current.value = "";

        } else {
          alert(res.msg); // mostrar mensaje de respuesta
        }
      })

  }



  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
        {success && <div class="alert alert-success" role="alert">Guardado con éxito :)</div>}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Solicitud de Credito</small>
            </div>
            <form action="">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={nomRef} placeholder="Nombres" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={apeRef} placeholder="Apellidos" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-ui-04" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <select type="text" class="form-control" ref={tipoRef}>
                    {/* <option>Tipo de Identificacion</option> */}
                    <option> Cedula Ciudadania</option>
                    <option> Cedula Extranjera</option>
                    <option> Pasaporte</option>
                  </select>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-check-bold" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={idenRef} placeholder="Numero Identificacion" type="number" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime ref={naciRef}
                    inputProps={{
                      placeholder: "Fecha de Nacimiento"
                    }}
                    timeFormat={false}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-calendar-grid-58" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <ReactDatetime ref={expeRef}
                    inputProps={{
                      placeholder: "Fecha Expedicion"
                    }}
                    timeFormat={false}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-fat-add" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={ingresosRef} placeholder="Valor de Ingresos" type="number" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-fat-delete" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={egresosRef} placeholder="Valor de egresos" type="number" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-fat-delete" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control" ref={matriculaRef} placeholder="Valor Matricula Educativa" type="number" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control"
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input className="form-control"
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                  />

                </InputGroup>
              </FormGroup>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input className="form-control"
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Estoy de acuerdo con{" "}
                        <a required href="POLITICA DE PRIVACIDAD" onClick={(e) => e.preventDefault()}>
                          la politica de privacidad
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
                {success && <div class="alert alert-success" role="alert">Guardado con éxito :)</div>}
              </Row>
              <div className="text-center">
                <button className="btn btn-primary" type="button" onClick={solicitudes}>
                  Solicitar Credito
                </button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>

    </>
  );
};
