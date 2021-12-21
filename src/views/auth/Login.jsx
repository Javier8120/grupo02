
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import React, { useRef, useState } from 'react';

export function Login() {
  // Crear HOOKS para hacer conexion con BackEnd
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [msgError, setMsgError] = useState();
  function login() {
    // Capturar los datos usu/pass
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //Consumir API login
    fetch("http://localhost:4000/user/login", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify({ email, password })
    }).then(res => res.json())
      .then(res => {
        if (res.estado === "ok") {
          {
            localStorage.setItem("token", res.token);
            window.location.href = res.url
          }
        } else {
          setError(true);
          setMsgError(res.msg);
        }
      })
    // Varificar que esté logueado el usuario
  }
  return (
    <>

      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          {error && <div className="alert alert-danger" role="alert">{msgError}</div>}
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h4>Iniciar Sesion</h4>
            </div>
            <form action="">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input placeholder="Email" ref={emailRef} className="form-control" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative" htmlFor="">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <input parceholder="Contraseña" ref={passwordRef} className="form-control" type="password" />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Recordarme</span>
                  </label>
                </div>
               <div className="text-center">
               <button className="btn btn-primary" type="button" onClick={login}>Iniciar Sesion</button>
                    
                </div>
              
            </form>
          </CardBody>
        </Card>
        <Row className="mt-3">
            <Col xs="6">
              <a
                className="text-light"
                href="#modal que envie mensaje al correo del usuario"
                onClick={(e) => e.preventDefault()}
              >
                <small>Olvide mi contraseña?</small>
              </a>
            </Col>
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/auth/register"
                onClick={(e) => e.redirectDefault()}
              >
                <small>Crear Cuenta</small>
              </a>
            </Col>
          </Row>
      </Col>

      
              
    </>
  );
};



