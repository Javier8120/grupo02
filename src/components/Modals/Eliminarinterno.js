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
        EliminarinternoModal: false
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
                color="warning"
                 type="button"
                onClick={() => this.toggleModal("EliminarinternoModal")}   
                    >
                <i class="fas fa-times"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.EliminarinternoModal}
                    toggle={() => this.toggleModal("EliminarinternoModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="EliminarinternoModalLabel">
                            Eliminar Usuario Interno
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("EliminarinternoModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">Seguro Deseas Eliminar al Usuario?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("EliminarinternoModal")}
                        >
                            No
                        </Button>
                        <Button color="primary" type="button">
                            Eliminar
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
