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
        AceptarprorrogaModal: false
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
                onClick={() => this.toggleModal("AceptarprorrogaModal")}   
                    >
                <i class="fas fa-check"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.AceptarprorrogaModal}
                    toggle={() => this.toggleModal("AceptarprorrogaModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="AceptarprorrogaModalLabel">
                             Aceptar Prorroga 
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AceptarprorrogaModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body"> Desea Aceptar Esta Prorroga?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("AceptarprorrogaModal")}
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
