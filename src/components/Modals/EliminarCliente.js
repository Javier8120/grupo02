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
        EliminarClienteModal: false
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
                onClick={() => this.toggleModal("EliminarClienteModal")}   
                    >
                <i class="fas fa-times"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.EliminarClienteModal}
                    toggle={() => this.toggleModal("EliminarClienteModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="EliminarClienteModalLabel">
                            Eliminar Cliente (Usuario)
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("EliminarClienteModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">Estas seguro que deseas eliminar este usuario?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("EliminarClienteModal")}
                        >
                            No
                        </Button>
                        <Button color="primary" type="button">
                            Ok, Toi seguro
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
