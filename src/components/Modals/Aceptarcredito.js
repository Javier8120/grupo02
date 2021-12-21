import React from "react";
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
    DropdownItem,
    Col
} from "reactstrap";

class Modals extends React.Component {
    state = {
        AceptarCraditoModal: false
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
                color="primary"
                 type="button"
                onClick={() => this.toggleModal("AceptarCraditoModal")}   
                    >
                <i class="fas fa-check"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.AceptarCraditoModal}
                    toggle={() => this.toggleModal("AceptarCraditoModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="AceptarCraditoModalLabel">
                             Aceptar Credito 
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AceptarCraditoModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">Aceptar Credito?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AceptarCraditoModal")}
                        >
                        Cancelar
                        </Button>
                        <Button color="primary" type="button">
                            Aceptar
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
