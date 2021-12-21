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
        RechazarProrrogaModal: false
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
                onClick={() => this.toggleModal("RechazarProrrogaModal")}   
                    >
                <i class="fas fa-times"></i>
             </Button>
                

                {/* Modal */}
                <Modal
                    className="modal-dialog-centered"
                    isOpen={this.state.RechazarProrrogaModal}
                    toggle={() => this.toggleModal("RechazarProrrogaModal")}
                >
                    <div className="modal-header">
                        <h5 className="modal-title" id="RechazarProrrogaModalLabel">
                             Rechazar Prorroga 
                        </h5>
                        <button
                            aria-label="Close"
                            className="close"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("RechazarProrrogaModal")}
                        >
                            <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body"> Deseas Recharzar Prorroga del Usuario?</div>
                    <div className="modal-footer">
                        <Button
                            color="secondary"
                            data-dismiss="modal"
                            type="button"
                            onClick={() => this.toggleModal("RechazarProrrogaModal")}
                        >
                            No
                        </Button>
                        <Button color="primary" type="button">
                            Rechazar
                        </Button>
                    </div>
                </Modal>
            </>
        );
    }
}

export default Modals;
