import React from "react";
import ReactDatetime from "react-datetime";
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
  Modal,
  Row,
  Col
} from "reactstrap";

class Modals extends React.Component {
  state = {
    defaultModal: false
  };

  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });

  };
  render() {
    return (
      <>
        <Button
          color="info"
          type="button"
          onClick={() => this.toggleModal("formModal")}
        >
          Informacion 
        </Button>
        <Modal
          className="modal-dialog-centered"
          size="sm"
          isOpen={this.state.formModal}
          toggle={() => this.toggleModal("formModal")}
        >
          <div className="modal-body p-0">
            <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Informacion Usuario</small>
            </div>
            <Form role="form">
              <FormGroup >
                <InputGroup className="input-group-alternative mb-3" >
                  <InputGroupAddon addonType="prepend" >
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Javier" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Moreno" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-badge" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Javier123" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-world" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Colombia" type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-pin-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Barranquilla" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-pin-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="Calle 67 # 33-65" type="text" />
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-pin-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input defaultValue="084002" type="text" />
                </InputGroup>
              </FormGroup>
      

              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-ui-04" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <select type="text" class="form-control">
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
                  <Input defaultValue="1002345896" type="number" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-calendar-grid-58" />
                  </InputGroupText>
                </InputGroupAddon>
              <ReactDatetime
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
              <ReactDatetime
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
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    defaultValue="Javier@gmail.com"
                    type="email"
                    autoComplete="new-email"
                    required 
                  />
                </InputGroup>
              </FormGroup>
              {/* <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="new-password"
                    required
                  />                  
                </InputGroup>
              </FormGroup> */}
   {/*            <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-chat-round" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                          //className="form-control-alternative"
                          placeholder="Define un poco de ti"
                          rows="4"
                          defaultValue="Un poco Sobre mi"
                          type="text"
                        />
                </InputGroup>
              </FormGroup> */}
              {/* <div className="text-center">
                <Button className="mt-4" color="success" type="button">
                  Guardar Cambios
                </Button>
              </div> */}
            </Form>
          </CardBody>
            </Card>
          </div>
        </Modal>

      </>
    );
  }
}

export default Modals;